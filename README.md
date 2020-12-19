# Gas Blog 
## Basierend auf: Next js Blog Boilerplate

<p align="center">
  <a href="https://creativedesignsguru.com/demo/Nextjs-Blog-Boilerplate/"><img src="public/assets/images/nextjs-starter-banner.png?raw=true" alt="Nextjs starter banner"></a>
</p>

🚀 Next.js Gas Blog Boilerplate ist ein Starter Template für Blogs for your blog based on Next.js framework. ⚡️ Made with [Next.js](https://nextjs.org), [TypeScript](https://www.typescriptlang.org), [ESLint](https://eslint.org), [Prettier](https://prettier.io), [PostCSS](https://postcss.org), [Tailwind CSS](https://tailwindcss.com).

Clone this project and use it to create your own [Next.js](https://nextjs.org) blog. You can check a [Next js blog templates demo](https://creativedesignsguru.com/demo/Nextjs-Blog-Boilerplate/).

### Funktionalitäten
Blog Funktionalitäten:

- 🎈 Highlight der Syntax mit Prism.js
- 🤖 SEO Meta-Daten und Open Graph tags
- ⚙️ JSON-LD für bessere Indexierung
- 📖 Pagination
- 🌈 Minimalistischer Blog Theme
- ⬇️ [Markdown](https://de.wikipedia.org/wiki/Markdown) Support 
- 💯 Top Geschwindigkeit - Super Lighthouse Bewertung 


- 🔥 [Next.js](https://nextjs.org) dient zur Generierung statischer Seiten
- 🎨 Integriert mit dem CSS Framework [Tailwind CSS](https://tailwindcss.com)
- 💅 [PostCSS](https://postcss.org) zum prozessieren von [Tailwind CSS](https://tailwindcss.com)
- 🎉 Check der JavaScript Objekt-Typen mit [TypeScript](https://www.typescriptlang.org) Programmierung
- ✏️ Linter mit [ESLint](https://eslint.org) - Hilft bei der Lösung von JavaSkript Fehlern.
- 🛠 Code Formattierung mit [Prettier](https://prettier.io)
- 🦊 SEO Meta-Daten, [JSON-LD](https://developers.google.com/search/docs/guides/intro-structured-data) und [Open Graph](https://ogp.me/) getagged mit [Next SEO](https://github.com/garmeeh/next-seo)
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

Funktionalitäten die schon von Next.js gegeben sind:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Philosophie

- Minimaler Code
- SEO-friendly
- 🚀 Produktions-ready

### Vorraussetzungen

- Ein Node.js Server und npm

### Anleitung

Folgenden Code in der lokal Entwicklungsumgebung eingeben :

```
git clone --depth=1 https://github.com/TheManFromEarth1/Gas-Blog my-project-name
cd my-project-name
npm install
```

Dann kannst du lokal Entwicklen mit Live Reload: 

```
npm run dev
```

Öffne http://localhost:8080 in deinem Browser um das Projekt zu sehen

```
.
├── _posts            # Deine Blog Artikel
├── public            # Statische Dateien
│   ├── assets
│   │   └── images
│   │       └── posts # Im Blog genutzte Fotos
└── src
    ├── pages         # Next.js Seiten
    ├── styles        # CSS Dateien
    └── templates     # Blog Templates
```

### Anpassungen machen

Die Konfiguration ist ganz einfach mit dem Next js Boilerplate. Ändere dazu folgende Dateien:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` und `public/favicon-32x32.png`: dein Blog favicon, kann genereriert werden von https://favicon.io/favicon-converter/
- `public/assets/images/logo.png`, `public/assets/images/logo-32x32.png`: dein Blog Logo
- `src/styles/main.css`: deine Blog-CSS Datei, basierend auf das Tailwind CSS Framework
- `src/utils/Config.ts`: Konfigurations-Datei mit Blog Name, URL, usw. 
- `src/templates/Main.tsx`: Blog Theme

### Auf einem Nodejs Server online hochladen

Die Resultate kann man lokal einsehen mit:

```
$ npm run build
$ npm run start
```

Die generierten HTML und CSS Dateien werden automatisch minifiziert. (Feature eingebaut in Next js). Unnötiger CSS Code von [Tailwind CSS](https://tailwindcss.com) wird auch entfernt, so dass die Produktions-Dateien klein wie möglich bleiben.

Eine optimierte Ausgabe kann generiert werden mit:

```
npm run build-prod
```

Nun ist der Blog fertig zum hochladen. Alle generierten Dateien sind im `dist` Ordner, welche beim NodeJS Hosting-Anbieter hochgeladen werden können.

### Templates
#### Standart Template
#### Gas Blog


### Lizenz
Lizenziert unter der MIT Lizenz, Copyright © 2020

Siehe [LICENSE](LICENSE) für mehr Informationen.

---
Basierend auf dem Boilerplate Theme von [CreativeDesignsGuru](https://creativedesignsguru.com)