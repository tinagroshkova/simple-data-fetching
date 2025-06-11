# Data Fetching React App

This is a simple React application that demonstrates how to fetch and display blog posts from an external API. The app uses TypeScript, Vite, and functional React components.

## Features

- Fetches blog posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts)
- Displays loading and error states
- Clean, responsive UI with CSS Grid
- Modular component structure

## Project Structure

```
src/
  App.tsx
  main.tsx
  index.css
  assets/
    data-fetching.png
  components/
    BlogPosts.tsx
    ErrorMessage.tsx
  util/
    http.ts
public/
  data-fetching.png
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd data-fetching
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App

Start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### Building for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## License

MIT

---

**Made with React, TypeScript, and Vite.**
