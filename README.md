# Harsh Singh — personal website

A personal website using [Jon Barron's original template](https://github.com/jonbarron/jonbarron.github.io). `styles.css` is an unmodified copy of his stylesheet. The HTML uses the original table layout, typography, paragraph spacing, colors, portrait styling, and narrow-screen behavior. Research rows have matching column padding and square figure spaces. Personal content and research figures are replaced with Harsh's details. Plain HTML and CSS; no build step or JavaScript required.

## Preview

Open `index.html` directly, or run this command from the project directory:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Then visit <http://127.0.0.1:8000>.

## Make it yours

All page content is in `index.html`. The bio and research introduction come from the supplied Markdown document. The two research entries use the supplied author details and PDFs, with World Action Models listed first.

- **Bio:** edit the paragraph below your name.
- **Contact:** email, LinkedIn, GitHub, and X are linked below the bio. Commented examples show where to add a CV or Scholar link once you have the actual file or URL.
- **Photo:** replace `images/harsh-singh.jpeg`. It is a copy of the supplied `IMG_6217.jpeg`; the page displays a circular crop and links to the full image. The same photo is used as the browser tab icon. The original source photo is unchanged.
- **Research:** duplicate a paper's `<tr>...</tr>` block for each publication. Update its title, authors, workshop details, summary, and links. Author names and workshop acceptances come from the user's supplied metadata. World Action Models features the NeurIPS 2026 Robot Learning Workshop (oral presentation). Delta Attention lists the NeurIPS 2026 Pre-to-Post and LCFM workshops and credits the work to NVIDIA. Oral presentation text is bold red, following the original template's treatment.
- **Papers:** titles are plain text and there are no paper links while the manuscripts await public release. Draft PDFs are not included in the site. Add arXiv links once the papers are available.
- **Figures:** the research thumbnails are Figure 1 extracted from each supplied PDF (World Action Models page 3; Delta Attention page 2). Each is centered in a 160 × 160 white square using `object-fit: contain`, preserving its full aspect ratio without cropping. Clicking a figure opens the original rectangular image. Replace a paper's image using, for example:

  ```html
  <img src="images/my-paper.jpg"
       alt="A diagram explaining the paper's main result"
       width="160" height="160"
       style="display:block;object-fit:contain;background:#ffffff;"
       loading="lazy">
  ```

- **Writing:** the Boothe Prize has its own section above Honors & Awards, with the Cognitive Cyborgism essay linked to its Stanford Digital Repository record. Stanford's PWR archive identifies Harshvardhan Singh as the Spring 2025 winner; the October 2025 award date and exact description, including the selection count and paper length, come from the user. Supplied PDFs stay outside the website.
- **Honors & Awards:** compact entries are listed newest first, without project titles or links. act-athon was hosted by Actor Labs in collaboration with Physical Intelligence; its September 2026 first-place-overall result comes from the user. The Cognition x Etched x Mercor Inference-Time Compute Hackathon entry retains the user's second-place result and $5,000 prize. The TreeHacks entry identifies the Scrapybara award and the user's $16,000 prize value. The projects' Devpost pages confirm June 2026 and February 2025, respectively. Regeneron STS Scholar (January 2024) and the ISEF Grand Award in Cellular & Molecular Biology (4th place, May 2023) also use the user's supplied details.
- **Style:** `styles.css` is identical to the upstream stylesheet. There are no custom overrides or mobile breakpoints in it. Inline styles retain the original table layout, with matching research text-cell padding and square, white-padded figure thumbnails as requested. The original tables remain side by side on narrow screens.

## Hosting

Serve the repository as a static website. It is compatible with GitHub Pages and uses relative asset paths. The existing `CNAME` remains `harsh-singh.com`; this change does not alter hosting or publish the site.

The font files are served by Google Fonts, with local system fallbacks when offline. No analytics or other third-party scripts are included.

## Credits

The stylesheet and layout come from [Jon Barron's website source](https://github.com/jonbarron/jonbarron.github.io). Its README invites reuse for personal websites. Layout tables have nonvisual presentation roles for assistive technology. The supplied portrait, text, research figures, and credit are personalized content.
