// the default export of _app.js is a top-level React component that wraps all the pages in your application
// https://nextjs.org/docs/advanced-features/custom-app

// REMINDER: you must restart the development server when you add pages/_app.js
// npm run dev

import '../styles/global.css'; // _app.js is the only place to import global CSS

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
