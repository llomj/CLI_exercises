# App Store Rollout Plan (Free + Full Unlock)

Date: March 1, 2026

## 1) Goal

Ship on iOS App Store with:
- Free access to part of the app
- One-time unlock for full app access at $2.99

Recommended model:
- App is free to download
- Use one non-consumable in-app purchase (IAP): `Full App Unlock`
- Price point: `$2.99` (can test $3.99 later)

## 2) Current App State (Today)

- Current app is a Vite PWA and can be hosted on GitHub Pages.
- User progress is stored locally on the device/browser (`localStorage`), not in a backend account system.
- Current key behavior:
  - Progress is personal to that device/browser install.
  - If the app is removed, local progress can be lost.
  - No cross-device sync yet.

## 3) Free vs Paid Split (Suggested)

Free tier should feel useful, not crippled:
- Free:
  - Levels 1-2 fully available
  - Basic glossary and log
  - Random mode limited (example: 10 random questions/day)
- Paid unlock ($2.99 once):
  - All 10 levels
  - Full 3000 question bank
  - Full random mode
  - Any premium review/advanced tools

## 4) How This Becomes a "Personal App" on User Phones

There are two different paths:

1. PWA path (hosted web app)
- Hosted on GitHub Pages (or another web host)
- User taps "Add to Home Screen"
- Feels app-like, but it is still web-hosted

2. App Store path (recommended for your goal)
- You package the app into an iOS app shell (commonly with Capacitor)
- User installs from App Store like any normal app
- App data lives in that app's iOS sandbox on the phone
- This is the clean "personal app on their phone" experience

Important note:
- If you want the same progress across iPhone + iPad + other devices, you need account login + backend sync.
- Without backend sync, each install is personal/local per device.

## 5) Hosting Architecture for App Store Version

Recommended for reliability:
- Bundle built web assets inside the iOS app binary
- Do not rely on GitHub Pages for core app runtime in the App Store build

Why:
- Better offline behavior
- More predictable review outcome
- Less risk from remote hosting issues

You can still keep GitHub Pages for the web/PWA version in parallel.

## 6) App Store Payment Rules (Critical)

For unlocking digital content/features in iOS app:
- Use Apple In-App Purchase (StoreKit)
- Product type: non-consumable
- Include "Restore Purchases" in settings

Suggested product ID:
- `com.pythonexerciseslearn.fullunlock`

## 7) Revenue Snapshot at $2.99

Approximate net per sale before taxes:
- 15% Apple fee (Small Business Program): about `$2.54`
- 30% fee: about `$2.09`

Developer Program cost:
- `$99/year`

Rough annual break-even:
- ~39 to 48 unlock purchases (ignoring taxes/refunds)

## 8) Implementation Checklist

Phase A - Product decisions
- Finalize free/paid feature gates
- Finalize unlock product ID and paywall copy

Phase B - iOS packaging
- Add Capacitor iOS shell
- Build and run on real iPhone
- Confirm offline behavior and persistence

Phase C - Payments
- Add StoreKit non-consumable purchase flow
- Add entitlement check (`isUnlocked`)
- Add Restore Purchases button and handling
- Gate premium features in UI and logic

Phase D - Release readiness
- Add Privacy Policy + Terms URL
- Add support email
- Test purchase flow in Sandbox/TestFlight
- Submit to App Store review

## 9) Next Practical Step

Create a dedicated feature flag in app state now:
- `isFullUnlocked: boolean`

Then wire all premium gates to that single flag so StoreKit integration later is simple.
