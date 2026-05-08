import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <html lang="en">
    <head>
      <meta property="og:title" content="Blog" />
    </head>
    <body>{children}</body>
  </html>;
};

export default Layout;
