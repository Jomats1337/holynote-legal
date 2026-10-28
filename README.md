# HolyNote Legal

Official legal and support pages for the HolyNote iOS and Android apps by JOMATS FZCO.

- `/privacy/` — Privacy Policy
- `/terms/` — Terms of Use
- `/support/` — Support and privacy-request instructions

The site is static, uses no cookies or analytics scripts, and is deployed from the `main` branch root with GitHub Pages.

## October 28, 2026 — iOS Meta/Jomlink policy, publication approved

Owner subsequently approved publication and selected Jomlink retention of96hours.
The effective copy now uses October28 and has no draft banner. It describes96h
server retention, parent-bounded observations, minute cleanup and migration
backups expiring at their oldest record's deadline. Publish only privacy/index.html,
this README and scripts/check-privacy-policy.mjs. Existing support/terms edits
must remain excluded. App Privacy answers/certifications and app submission are
separate; owner deferred the tracking/fingerprinting assessment for now, not a
finding of compliance. Read live deployment/Pages state before calling published.

Validation: `node scripts/check-privacy-policy.mjs` (11checks), plus visual QA and
post-push HTTPS body/hash readback. Full rollout receipt is in main docs/
PRIVACY_POLICY_UPDATE_2026-10-28.md and OWN_ATTRIBUTION_CURRENT.md.

### Historical local-draft step (superseded by approval above)

Owner approved local edits to privacy/index.html only after reviewing the scope.
The file is visibly marked as an unpublished draft; the public October18 policy
is not replaced. No commit/push, Pages deployment, App Privacy save, certification,
or App Review action is authorized by this draft-edit instruction.

Draft additions describe native iOS Meta/automatic purchase metadata, the
anonymousID-to-Adapty association, conditional iOS Adapty IP collection,
first-party Jomlink device/network/provider/link context and local storage,
indefinite server retention distinct from24h retry/AI retention, and support-led
privacy requests. They remove the unsupported blanket iOS no-tracking claim;
they do not certify ATT, fingerprinting, legal bases, sale/sharing classification
or worldwide compliance. Existing company/AI/Android/Terms/Support terms remain
outside this change; unrelated support/index.html and terms/index.html edits are
preserved. The local draft banner/effective date must be explicitly reconciled
before any separately authorized publication.

See main docs/PRIVACY_POLICY_UPDATE_2026-10-28.md for source evidence, validation,
release blockers and rollback. Do not publish merely because the copy is drafted.

## October 18, 2026 — iOS Amplitude disclosure

Owner-approved addition: privacy/index.html adds Amplitude
technical product analytics, random installation identity, Adapty lifecycle join,
content exclusions, disabled capture/identifier properties, US processing and
retention. It also makes the existing iOS AppsFlyer IP-derived approximate
location explicit. Owner confirmed publication on October18. Publish only
privacy/index.html and this README; preserve unrelated support/terms edits.
No worldwide-compliance or legal-basis certification is made by the agent.

## October 16, 2026 — Android AppsFlyer privacy disclosure

Owner-approved addition: Android AppsFlyer install/session attribution,
pseudonymous UID and allowlisted campaign metadata to Adapty, IP-derived
approximate location, Meta partner sharing with in-app event postbacks OFF.
Identifier-disable controls and independent optional diagnostics are described.
Publication and matching Google Play Data Safety update were explicitly approved
by the owner. Publish only privacy/index.html and this README; preserve unrelated
support/terms edits. Public readback and release evidence are recorded in the
main project's docs/ANDROID_APPSFLYER_2026-10-16.md and HANDOFF_CURRENT.md.

## October 15, 2026 — Android privacy disclosure update

Owner-approved scope: `privacy/index.html` now distinguishes iOS AppsFlyer from
Android Meta/Adapty subscription and commercial-event measurement, pseudonymous
identifiers, Google Play purchases, and separately optional Firebase Crashlytics.
It explicitly discloses the current absence of an Android advertising opt-in or
in-app measurement switch, and does not equate the Facebook “anonymous” ID with
unidentifiable data. No legal-basis or worldwide-compliance certification is made.
No content is intentionally sent to these analytics providers; AD_ID collection
and automatic client purchase logging remain disabled.

Publish only `privacy/index.html` and this README. Existing local edits to
`support/index.html` and `terms/index.html` are unrelated and must not be included.
After pushing, verify the public privacy URL contains the October15 date and all
Android disclosures. Google Play Data Safety must be separately reconciled; a
policy publication alone does not update the Play declaration or submit a build.
Rollback by reverting only this scoped publication commit (never reset the tree),
but do not remove disclosures while the described collection remains enabled.
