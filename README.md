# HolyNote Legal

Official legal and support pages for the HolyNote iOS and Android apps by JOMATS FZCO.

- `/privacy/` — Privacy Policy
- `/terms/` — Terms of Use
- `/support/` — Support and privacy-request instructions

The site is static, uses no cookies or analytics scripts, and is deployed from the `main` branch root with GitHub Pages.

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
