# PrepAlly landing

A single static marketing page for **PrepAlly** — a WhatsApp-based WAEC tutor for Nigerian
senior-secondary students. The page's one job: get a visitor to tap **Start on WhatsApp**.

## Stack

Plain **HTML + Tailwind CSS** (Tailwind via CDN). No framework, no build step. The whole site is
`index.html` plus assets. Deploy as a static site (Vercel / Netlify) — just publish the folder.

## Local preview

Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Stubs that MUST be replaced before going public

These are built as obvious stubs on purpose — no fake values were invented. Flip each before
launch:

- [ ] **Start on WhatsApp** buttons (`href="#"`) → point at the live `wa.me/<number>` link.
      Search the file for `STUB: replace href with live wa.me`.
- [ ] Three teaching **screenshots** → replace the `[SCREENSHOT 1/2/3]` placeholder slots in the
      Proof section with real WhatsApp shots (keep the WhatsApp chrome visible).
- [ ] Three **testimonials** → replace the visibly-placeholder cards with real, consented quotes.
- [ ] Founder **contact link** ("Reach me directly", `href="#"`) → set to the real WhatsApp/email.

## Notes

- Production builds should compile Tailwind to a static CSS file rather than using the CDN, for
  speed and to drop the runtime script. The CDN keeps the source build-step-free as specified.
