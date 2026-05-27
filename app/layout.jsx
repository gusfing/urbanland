import "./globals.css";

export const metadata = {
  title: "Urbanland || Street Furniture",
  description: "Complete outdoor furniture solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@100..900&family=Funnel+Display:wght@400..600&family=Instrument+Serif:wght@400..600&family=Inter+Tight:wght@300..600&family=Manrope:wght@300..600&family=Sora:wght@300..600&family=Space+Grotesk:wght@300..600&family=IBM+Plex+Mono:wght@300;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
        {/* mmcite styles for product cards */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
