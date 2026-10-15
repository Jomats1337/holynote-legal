# HolyNote Legal

Official legal and support pages for the HolyNote iOS and Android apps by JOMATS FZCO.

- `/privacy/` — Privacy Policy
- `/terms/` — Terms of Use
- `/support/` — Support and privacy-request instructions

The site is static, uses no cookies or analytics scripts, and is deployed from the `main` branch root with GitHub Pages.

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
