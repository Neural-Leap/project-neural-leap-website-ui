import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from "react-use";

const Calendar = ({ data }) => {
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
      <div className="body-2">
  <div data-animation="default" data-collapse="medium" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="navbar desk _2 w-nav">
    <div className="contain-div">
      <div className="div-block desktop">
        <a href="#" className="brand w-nav-brand"><img src="images/Neural-Leap.svg" loading="lazy" alt="" /></a>
        <nav role="navigation" className="w-nav-menu">
          <a href="/" className="nav-link w-nav-link">Home</a>
          <a href="pricing" className="nav-link w-nav-link">Pricing</a>
          <a href="about-us" className="nav-link w-nav-link">About Us</a>
          <a href="our-mission" className="nav-link w-nav-link">Our Mission</a>
        </nav>
      </div>
      <div className="div-block-2">
        <a href="schedule-a-demo" className="button w-button">Book A Demo</a>
      </div>
    </div>
  </div>
  <div className="div-block-35">
    <div className="div-block-53">
      <div className="div-block-54">
        <div className="div-block-36 _2">
          <div className="div-block-433 _2">
            <div className="w-embed w-script">
              {/*  Calendly inline widget begin  */}
              <div className="calendly-inline-widget" data-url="https://calendly.com/paramaaa/30min" style={{minWidth: '280px', height: '800px'}} />
              {/*  Calendly inline widget end  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer white wf-section">
    <div className="div-block-62">
      <div className="div-block-27">
        <div id="w-node-_40e950fb-9e70-2b4e-9c9d-3eaf455dceba-b0c8dd28" className="div-block-28"><img src="images/Neural-Leap_1.svg" loading="lazy" width={188} alt="" className="image-19" />
          <a href="#" className="link-block w-inline-block">
            <p className="paragraph-25 black">Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </a>
          <div className="div-block-108">
            <a href="#" className="link-block-2 w-inline-block"><img src="images/ant-design_instagram-filled.svg" loading="lazy" alt="" /></a>
            <a href="#" className="link-block-2 w-inline-block"><img src="images/brandico_twitter-bird.svg" loading="lazy" alt="" /></a>
            <a href="#" className="link-block-2 w-inline-block"><img src="images/bxl_facebook.svg" loading="lazy" alt="" /></a>
          </div>
        </div>
        <div id="w-node-_40e950fb-9e70-2b4e-9c9d-3eaf455dcecb-b0c8dd28" className="div-block-106">
          <div className="div-block-109">
            <div className="text-block-7">Links</div>
            <div className="div-block-110">
              <a href="#" className="link-2">Overons</a>
              <a href="#" className="link-2">Social Media</a>
              <a href="#" className="link-2">Counters</a>
              <a href="#" className="link-2">Contact</a>
            </div>
          </div>
          <div className="div-block-109">
            <div className="text-block-7">Company</div>
            <div className="div-block-110">
              <a href="#" className="link-2">Terms &amp; Conditions</a>
              <a href="#" className="link-2">Privacy Policy</a>
              <a href="#" className="link-2">Contact</a>
            </div>
          </div>
          <div className="div-block-109">
            <div className="text-block-7">Get in touch</div>
            <div className="div-block-110">
              <a href="#" className="link-2">Crechterwoord K12 182 DK Alknjkcb</a>
              <a href="#" className="link-2">085-132567</a>
              <a href="#" className="link-2">info@payme.net</a>
            </div>
          </div>
        </div>
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
    .readFileSync("public/content/calendar.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data,
    },
  };
};

export default Calendar;
