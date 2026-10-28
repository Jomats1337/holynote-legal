import assert from 'node:assert/strict';
import {readFileSync, existsSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const current = readFileSync(path.join(root, 'privacy/index.html'), 'utf8');
const baseline = execFileSync('git', ['show', '68781a9:privacy/index.html'], {cwd: root, encoding: 'utf8'});
let passed = 0;
function check(name, action) {
  action();
  passed += 1;
  console.log(`PASS ${name}`);
}
function section(html, number) {
  const start = html.indexOf(`<h2>${number}. `);
  assert.ok(start >= 0, `Missing section ${number}`);
  const end = html.indexOf('<h2>', start + 4);
  return html.slice(start, end < 0 ? html.indexOf('</article>', start) : end).trim();
}
function paragraph(html, prefix) {
  const start = html.indexOf(prefix);
  assert.ok(start >= 0, `Missing paragraph ${prefix}`);
  return html.slice(start, html.indexOf('</p>', start) + 4);
}

check('sixteen numbered sections retained', () => {
  const numbers = [...current.matchAll(/<h2>(\d+)\. /g)].map(match => Number(match[1]));
  assert.deepEqual(numbers, Array.from({length: 16}, (_, index) => index + 1));
});
check('approved effective policy has a date and no draft banner', () => {
  assert.ok(current.includes('Effective and last updated: October 28, 2026'));
  assert.ok(!current.includes('aria-label="Draft status"'));
  assert.ok(!current.includes('Draft for owner review'));
});
check('native Meta, profile association and conditional Adapty IP disclosed', () => {
  for (const text of ['Meta (iOS)', 'Meta SDK\'s pseudonymous app-instance identifier to Adapty',
    'Adapty IP-address collection is enabled', 'automatically detected StoreKit purchase metadata']) {
    assert.ok(current.includes(text), text);
  }
  assert.ok(!current.includes('collection of the Apple advertising identifier (IDFA) and IP address by the Adapty SDK is disabled'));
});
check('Jomlink actual technical fields and purpose disclosed', () => {
  for (const text of ['Apple vendor identifier (IDFV)', 'screen size/scale/brightness/orientation',
    'VPN use or device modification', 'genuine AppsFlyer UID and Adapty profile identifiers',
    'suggest a possible connection between a link visit and an app record']) {
    assert.ok(current.includes(text), text);
  }
});
check('96h server retention and backup expiry separated from local queues and AI jobs', () => {
  assert.ok(current.includes('retained for 96 hours from receipt by our server'));
  assert.ok(!current.includes('retained indefinitely'));
  assert.ok(current.includes('no later than their parent first-SDK-open record'));
  assert.ok(current.includes('oldest record in that backup reaches its 96-hour deadline'));
  assert.ok(current.includes('temporary retry queues with a 24-hour delivery window'));
  assert.ok(current.includes("separate from the AI job store's 24-hour retention period"));
});
check('no unsupported tracking exemption or anonymous-identity promise', () => {
  assert.ok(!current.includes('does not access Apple’s advertising identifier (IDFA), enable Apple-defined cross-app tracking'));
  assert.ok(current.includes('not a claim that every use of other identifiers'));
  assert.ok(current.includes('does not replace any required permission'));
  assert.ok(current.includes('not verified personal identities or calibrated probabilities'));
});
check('support route and lack of in-app deletion control disclosed', () => {
  assert.ok(current.includes('support@holynote.app'));
  assert.ok(current.includes('There is no in-app Jomlink server-deletion control at present'));
  assert.ok(current.includes('a date or shared IP address alone does not prove ownership'));
});
check('unrelated company, permission, AI, legal and safety sections unchanged', () => {
  for (const number of [1, 4, 5, 10, 11, 13, 14, 15, 16]) {
    assert.equal(section(current, number), section(baseline, number), `Section ${number}`);
  }
});
check('existing Android operational paragraphs unchanged', () => {
  for (const prefix of ['<p><strong>Android app measurement:', '<p><strong>Android acquisition attribution:',
    '<p><strong>Subscription measurement:', '<p>Android collection of the Google Advertising ID',
    '<p><strong>Optional Android diagnostics:']) {
    assert.equal(paragraph(current, prefix), paragraph(baseline, prefix), prefix);
  }
});
check('no tracking script or credential introduced', () => {
  assert.ok(!/<script\b/i.test(current));
  assert.ok(!/sk-(?:proj-)?[A-Za-z0-9_-]{20,}/.test(current));
  assert.ok(!/META_CLIENT_TOKEN\s*=|BIBLE_NOTE_BACKEND_ACCESS_TOKEN\s*=/.test(current));
  assert.ok(current.includes('which do not run this measurement code'));
});
check('all local hrefs still resolve in the legal site', () => {
  for (const [, href] of current.matchAll(/href="([^"]+)"/g)) {
    if (/^(?:https?:|mailto:|tel:|#)/.test(href)) continue;
    let target = path.resolve(root, 'privacy', href.split('#')[0]);
    if (href.endsWith('/')) target = path.join(target, 'index.html');
    assert.ok(existsSync(target), href);
  }
});
console.log(`${passed}/${passed} privacy policy checks passed. This is not legal or platform certification.`);
