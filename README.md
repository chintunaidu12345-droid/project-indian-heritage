# Bharat Heritage — Vite + React (JavaScript)

This is a small demo converting the provided static HTML into a React app using Vite and Tailwind CSS.

## Quick start (Windows PowerShell)

1. Install dependencies

```powershell
npm install
```

2. Start dev server

```powershell
npm run dev
```

3. Build for production

```powershell
npm run build
```

4. Preview the production build

```powershell
npm run preview
```

Notes:
- After `npm install` you may need to run `npx tailwindcss -i ./src/index.css -o ./dist/output.css --minify` if you configure a custom build step, but the provided PostCSS config lets Vite handle Tailwind automatically.
- This project is intentionally minimal and uses local components in `src/components` converted from your original HTML.

Images / how to update pictures
--------------------------------
To use your local images (the files you listed on your desktop), copy them into the project `public/images/` folder. Create the folder if it doesn't exist. Use the exact filenames below (the code expects these names):

download.jpg
unnamed.jpg
download (1).jpg
download (2).jpg
download (3).jpg
download (4).jpg

Example (PowerShell):

```powershell
mkdir .\public\images -ErrorAction Ignore
copy 'C:\Users\V.NARASIMHA PRASAD\OneDrive\Desktop\download.jpg' .\public\images\
copy 'C:\Users\V.NARASIMHA PRASAD\OneDrive\Desktop\unnamed.jpg' .\public\images\
# repeat for the other files (the names may include spaces and parentheses)
```

After copying the files, reload the dev server page (http://localhost:5173/) and the site will display your images in the Heritage and Gallery sections.
