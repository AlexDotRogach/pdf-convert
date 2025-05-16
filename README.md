# PDF Viewer Web App

This project is a web application for uploading, converting, and viewing PDF files. It is built with **React** and **TypeScript**, uses **rsbuild** as the bundler, and follows a modular architecture with components, APIs, utilities, and custom hooks.

## 🚀 Features

- Upload PDF files
- View history of uploaded documents
- Convert an array of text into a PDF
- Display PDF files directly in the browser
- Simple and scalable architecture

## 🛠️ Technologies

- **React + TypeScript**
- **rsbuild** — modern bundler
- **PostCSS**, **Babel**, **Biome**
- Composables (custom React hooks)
- API client based on `fetch`

## 📁 Project Structure

```
src/
├── api/                # API logic (e.g. convertPdf.ts)
├── components/         # UI components
│   ├── parts/          # Shared components (e.g. Spinner)
├── composables/        # Custom React hooks
├── const/              # Constants
├── types/              # TypeScript interfaces
├── utils/              # Utility functions
├── App.tsx             # Root component
├── index.tsx           # Entry point
```

## 📦 Installation

```bash
npm install
```

## 🧪 Development Server

```bash
npm run dev
```

## 🏗️ Build for Production

```bash
npm run build
```

## ✅ Linting and Formatting

```bash
npm run biome
```

## ✅ Testing this project!
Important things you need to comment app.css in app.tsx!

```bash
npm run test
```

## 🤝 Contributing

Pull requests and suggestions are welcome!

## 📄 License

[MIT](LICENSE)
