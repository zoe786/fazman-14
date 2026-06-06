import "./globals.css";

export const metadata = {
  title: "Smile Marketplace",
  description:
    "Dental marketplace like Airbnb for patients, practices, dentists, and admins.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
