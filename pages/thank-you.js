import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from "react-use";

const Template = ({ data }) => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        {/* Title Tag */}
        <title>{data.titleTag}</title>

        {/* Meta Description */}
        <meta content={data.metaDescription} name="description" />

        {/* OG Title */}
        <meta content={data.ogTitle} property="og:title" />

        {/* OG Description */}
        <meta content={data.ogDescription} property="og:description" />

        {/* OG Image */}
        <meta content={data.ogImage} property="og:image" />

        {/* Twitter Title */}
        <meta content={data.twitterTitle} property="twitter:title" />

        {/* Twitter Description */}
        <meta
          content={data.twitterDescription}
          property="twitter:description"
        />

        {/* Twitter Image */}
        <meta content={data.twitterImage} property="twitter:image" />

        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />

        {/* Favicon*/}
        <link href="images/favicon.png" rel="icon" type="image/png" />

        {/* Webclip */}
        <link href="images/webclip.png" rel="apple-touch-icon" />

        {/* Fall Back CSS */}
        {/* [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif] */}
      </Head>
      <div>
        <div className="navbar-single">
          <div className="div-block-32">
            <div className="div-block-33">
              <a href="index.html" className="w-inline-block">
                <img src="images/Neural-Leap.svg" loading="lazy" alt="" />
              </a>
            </div>
            <div className="div-block-34" />
          </div>
        </div>
        <div className="wf-section">
          <div className="div-block-102">
            <div className="div-block-103">
              <div className="div-block-104">
                <h1 className="heading-25">
                  You’re The Best!
                  <br />
                  <span className="text-span-10">THANK YOU</span>
                </h1>
                <p className="paragraph-24">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  orci sem non nunc a nunc odio. Vivamus sapien, placerat
                  pulvinar metus ultricies. Adipiscing mi velit et.
                </p>
              </div>
              <div className="div-block-105">
                <img
                  src="images/Frame-ty.svg"
                  loading="lazy"
                  alt=""
                  className="image-18"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="white-footer">
          <div className="div-block-50">
            <div id="w-node-_806fd0e8-d8f5-4f10-5e89-bdfe9d04afce-9d04afcc">
              <img src="images/Neural-Leap_1.svg" loading="lazy" alt="" />
              <p className="paragraph-15">
                Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
              </p>
              <div>
                <img
                  src="images/ant-design_instagram-filled.svg"
                  loading="lazy"
                  alt=""
                  className="social-logo"
                />
                <img
                  src="images/brandico_twitter-bird.svg"
                  loading="lazy"
                  alt=""
                  className="social-logo"
                />
                <img
                  src="images/bxl_facebook.svg"
                  loading="lazy"
                  alt=""
                  className="social-logo"
                />
              </div>
            </div>
            <div
              id="w-node-_806fd0e8-d8f5-4f10-5e89-bdfe9d04afd6-9d04afcc"
              className="div-block-51"
            >
              <h1 className="heading-14">Links</h1>
              <a href="#" className="footer-link w-inline-block">
                <p>Overons</p>
              </a>
              <a href="#" className="footer-link w-inline-block">
                <p>Social Media</p>
              </a>
              <a href="#" className="footer-link w-inline-block">
                <p>Counters</p>
              </a>
              <a href="#" className="footer-link w-inline-block">
                <p>Contact</p>
              </a>
            </div>
            <div
              id="w-node-_806fd0e8-d8f5-4f10-5e89-bdfe9d04afe5-9d04afcc"
              className="div-block-51"
            >
              <h1 className="heading-14">Company</h1>
              <a href="#" className="footer-link w-inline-block">
                <p>Terms &amp; Conditions</p>
              </a>
              <a href="#" className="footer-link w-inline-block">
                <p>Privacy Policy</p>
              </a>
              <a href="#" className="footer-link w-inline-block">
                <p>Contact</p>
              </a>
            </div>
            <div
              id="w-node-_806fd0e8-d8f5-4f10-5e89-bdfe9d04aff1-9d04afcc"
              className="div-block-51"
            >
              <h1 className="heading-14">Get in touch</h1>
              <a href="#" className="footer-link w-inline-block">
                <p>Crechterwoord K12 182 DK Alknjkcb</p>
              </a>
              <a href="#" className="footer-link w-inline-block">
                <p>085-132567</p>
              </a>
              <a href="#" className="footer-link w-inline-block">
                <p className="paragraph-16">info@payme.net</p>
              </a>
            </div>
          </div>
        </div>
        {/* [if lte IE 9]><![endif] */}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const markdownWithMetadata = fs
    .readFileSync("public/content/thank-you.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data,
    },
  };
};

export default Template;
