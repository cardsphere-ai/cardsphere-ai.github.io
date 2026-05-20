# CardSphere AI Public Site

Premium static public site for CardSphere AI. The files in this folder are ready
to be used as the root of the `cardsphere-ai.github.io` repository or deployed
as a GitHub Pages artifact from this app repository.

No secrets, analytics, cookies, Supabase keys, provider credentials, app source
code, copyrighted card art, or unauthorized logos are included.

## Pages

- `index.html`: public landing page.
- `privacy-policy.html`: Google Play-ready privacy policy for the private beta.
- `support.html`: public support page.
- `404.html`: GitHub Pages not-found page.
- `privacy-policy/index.html`: clean URL redirect for `/privacy-policy`.
- `support/index.html`: clean URL redirect for `/support`.

## Brand Assets

The landing page uses copied, existing CardSphere AI assets only:

- `assets/img/cardsphere-app-icon.png`: copied from
  `C:\cardsphere-ai\apps\mobile\android\app\src\main\res\mipmap-xxxhdpi\ic_launcher.png`.
- `assets/img/cardsphere-cosmic-card.png`: copied from
  `C:\cardsphere-ai\apps\mobile\assets\brand\cardsphere_cosmic_card_cutout.png`.
- `assets/img/cardsphere-social-preview.png`: copied from
  `C:\cardsphere-ai\assets\play-store\feature-graphic\cardsphere_feature_graphic_1024x500.png`.

The public hero animation is CSS-only. It uses no generated imagery, videos,
external frameworks, analytics, tracking scripts, cookies, app source code, or
secrets.

## Social Link Previews

Open Graph and Twitter/X large-card metadata are configured for the public pages
using the custom domain `https://cardsphereai.com`.

Primary preview image:

- `https://cardsphereai.com/assets/img/cardsphere-social-preview.png`

Preview QA after deployment:

1. Open `https://cardsphereai.com/assets/img/cardsphere-social-preview.png`.
2. Inspect page source for `og:image` and `twitter:image`.
3. Test `https://cardsphereai.com` in LinkedIn Post Inspector.
4. Test `https://cardsphereai.com` in Facebook Sharing Debugger.
5. Test with the Twitter/X Card Validator if available.
6. Share the URL in a private Telegram or WhatsApp chat.

Telegram, WhatsApp, iMessage, Discord, Facebook, LinkedIn, and X/Twitter may
cache previews. If an old image appears, wait for cache expiry or refresh with
the platform debugger where available.

Legacy Markdown sources remain available:

- `index.md`
- `privacy-policy.md`
- `support.md`

## Local Preview

Open `index.html` directly in a browser or serve the folder with any static
server. No build step is required.

## GitHub Pages Setup

For a standalone `cardsphere-ai.github.io` repository:

1. Put these files at the repository root.
2. Commit and push to the default branch.
3. Open repository Settings.
4. Open Pages.
5. Choose deploy from branch.
6. Select the default branch and root folder.
7. Verify:
   - `/`
   - `/privacy-policy.html`
   - `/support.html`
   - `/privacy-policy`
   - `/support`

For this app repository, use GitHub Pages or a manual deployment workflow that
publishes the `site/` folder as the web root.

## Future Custom Domain

Do not create a `CNAME` file until the founder confirms the domain is ready.

Future domain candidates:

- `cardsphereai.com`
- `www.cardsphereai.com`

Future DNS notes:

- Apex domain should use GitHub Pages A records.
- `www` should use a CNAME to `cardsphere-ai.github.io`.
- Enable HTTPS in GitHub Pages after DNS propagates.

## Policy Notes

- CardSphere AI remains a private beta foundation.
- The site does not claim production readiness.
- The site does not claim partnerships with publishers, grading companies,
  marketplaces, or pricing providers.
- The site does not claim certain card outcomes or financial advice.
- The site keeps provider-aware market wording and the no-scraping policy.

## Brand Safety

- This is the public site for CardSphere AI.
- CardSphere AI is independent and is not affiliated with Cardsphere.com,
  Space Cow Media, card publishers, grading companies, marketplaces, or pricing
  providers.
- Public copy should use the full product name, CardSphere AI.
- Avoid shortening the product name to CardSphere in public copy.
- Describe CardSphere AI as collector intelligence, scanner evidence,
  OCR-assisted review, portfolio intelligence, local-first collection
  management, optional cloud sync, and trading-card decision support.
