import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import NavBar from "./NavBar";
//import Footer from "./Footer";

export default function Container({ children, ...customMeta }) {
  const router = useRouter();
  
  const meta = {
    title: "Caridad Rivera - Developer, Critical Thinker, Poet",
    description: `I've been developing websites for 3 years. Get in touch with me to know more.`,
    image: "./profile.jpeg",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
        />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />

        )}
        
      </Head>
      <NavBar/>
      <main className="dark:bg-gray light:bg-white w-full ">
        <div>{children}</div>   
      </main>
    </div>
  );
}