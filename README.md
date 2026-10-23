# Sohel Maniyar — Personal Portfolio

A responsive, single-page portfolio built with **HTML, CSS, and vanilla JavaScript**. It is designed to run locally and can be published with GitHub Pages—no npm install or build step required.

## Run locally
1. Extract the ZIP.
2. Open the `personal-portfolio` folder in VS Code.
3. Open `index.html` in your browser, or use the Live Server extension.

## Before publishing
- [ ] Update the display name in `main.js` and `index.html` if you want your full name shown.
- [ ] Replace `your.email@example.com` in `main.js` with your email.
- [ ] Replace `https://github.com/your-github-username` in `main.js` with your GitHub profile.
- [ ] Add your photo as `assets/images/profile.jpg` and update the photo placeholder in `index.html` to use it.
- [ ] Add screenshots, repository links, and accurate details for each project.
- [ ] Review the skills section and remove any technologies you have not started learning yet.

## Add your photo
The hero currently has a placeholder so the site works without an image. To use your photo, replace the `.photo-placeholder` block in `index.html` with:

```html
<img class="profile-photo" src="assets/images/profile.jpg" alt="Portrait of Sohel Maniyar">
```

Then add this CSS to `style.css`:

```css
.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
```

Put your image at `assets/images/profile.jpg`. JPG, PNG, or WebP works; if you use another filename, update the `src`.

## Publish with GitHub Pages
1. Create a new repository on GitHub (for example, `personal-portfolio`).
2. Upload the contents of this folder to the repository root. `index.html` should be at the root—not inside another nested folder.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to finish deploying and open the URL it provides.

## Project notes
The portfolio uses placeholder links until you add your own. The Student Result Management System is described as a frontend prototype; the Anonymous E-Complaint Box is presented as a practice project. Update these descriptions to match the actual state of your code before sharing the site publicly.

Fonts are loaded from Google Fonts; if unavailable, local fallback fonts will be used.
