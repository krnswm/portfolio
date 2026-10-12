import "./globals.css";

export const viewport = { themeColor: "#0E0D0F", viewportFit: "cover" };

// Runs before the page paints: marks JS as available and applies the saved theme (dark by default).
const themeScript =
  'document.documentElement.classList.add("js");try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch(e){}';

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&family=Tiro+Devanagari+Hindi&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
