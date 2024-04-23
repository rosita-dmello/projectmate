/* eslint-disable @next/next/next-script-for-ga */
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Explore projects, contribute seamlessly, access insightful stats, effortlessly share, connect with a vibrant community, and showcase your work with a personalized portfolio."
          />
          <meta
            name="keywords"
            content="opensource, github, reactjs, nextjs, technology, portfolio, profile"
          />
          <meta name="robots" content="index,follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="2 days" />
          <meta name="author" content="Rohit Dasu" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.projectmate.net/" />
          <meta
            property="og:title"
            content="Supercharge your open-source contributions with projectmate.net"
          />
          <meta
            property="og:description"
            content="Explore projects, contribute seamlessly, access insightful stats, effortlessly share, connect with a vibrant community, and showcase your work with a personalized portfolio."
          />
          <meta property="og:image" content="/og.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.projectmate.net/" />
          <meta
            property="twitter:title"
            content="Supercharge your open-source contributions with projectmate.net"
          />
          <meta
            property="twitter:description"
            content="Explore projects, contribute seamlessly, access insightful stats, effortlessly share, connect with a vibrant community, and showcase your work with a personalized portfolio."
          />
          <meta property="twitter:image" content="/og.png" />

          <script
            src="https://survei-feedback.vercel.app/scripts/survei.js"
            data-survei-id="661d54a06635b504822c38e0"
            data-theme="sun"
            data-position="left"
            data-button-color="#000000"
            data-input-placeholder="I liked the ...."
            data-trigger-text="Feedback"
            data-input-label="What did you like or dislike?"
            defer
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KSS8T4M');`,
            }}
          />
          {/* fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lato:wght@100;300;400;700;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Cookie&display=swap"
            rel="stylesheet"
          />
          {/* /fonts */}
        </Head>
        <body className="bg-primary-background">
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KSS8T4M"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
