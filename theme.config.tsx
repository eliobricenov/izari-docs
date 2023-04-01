import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import ZondaxLogo from "./components/ZondaxLogo";
import Footer from "./components/Footer";

const config: DocsThemeConfig = {
  head: (
    <>
      <title>Izari Docs</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Izari Docs" />
      <meta property="og:description" content="Izari Doc" />
    </>
  ),
  logo: ZondaxLogo,
  project: {
    link: "https://github.com/zondax/izari-filecoin",
  },
  gitTimestamp: <></>,
  docsRepositoryBase: "https://github.com/zondax/izari-filecoin",
  footer: {
    text: Footer,
  },
};

export default config;
