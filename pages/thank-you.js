import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from "react-use";
import Link from "next/link";

const ThankYou = ({ data }) => {
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
  <div data-animation="default" data-collapse="medium" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="navbar desk w-nav">
    <div className="contain-div">
      <div className="div-block desktop">
        <Link href="#"><a className="brand w-nav-brand"><img src="images/Neural-Leap.svg" loading="lazy" alt="" /></a></Link>
        <nav role="navigation" className="w-nav-menu">
          <Link href="/"><a className="nav-link w-nav-link">Home</a></Link>
          <Link href="pricing"><a className="nav-link w-nav-link">Pricing</a></Link>
          <Link href="about-us"><a className="nav-link w-nav-link">About Us</a></Link>
          <Link href="our-mission"><a className="nav-link w-nav-link">Our Mission</a></Link>
        </nav>
      </div>
      <div className="div-block-2">
        <Link href="schedule-a-demo"><a className="button w-button">Book A Demo</a></Link>
      </div>
    </div>
  </div>
  <div className="wf-section">
    <div className="div-block-102">
      <div className="div-block-103">
        <div className="div-block-104">
          <h1 className="heading-25">You’re The Best!<br /><span className="text-span-10">THANK YOU</span></h1>
          <p className="paragraph-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci sem non nunc a nunc odio. Vivamus sapien, placerat pulvinar metus ultricies. Adipiscing mi velit et.</p>
        </div>
        <div className="div-block-105"><img src="images/Frame-ty.svg" loading="lazy" alt="" className="image-18" /></div>
      </div>
    </div>
  </div>
  <div className="footer wf-section">
    <div className="div-block-62">
      <div className="div-block-27">
        <div id="w-node-a523c9bd-aadc-f28f-44d7-8cd44e435da9-c78592c5" className="div-block-28"><img src="images/Neural-Leap_1.svg" loading="lazy" width={188} alt="" className="image-19" />
          <Link href="#"><a className="link-block w-inline-block">
            <p className="paragraph-25">Access top 1% of global talent, eliminate the cost of hiring, and effortlessly scale the team to meet their needs.</p>
          </a></Link>
        </div>
        <div id="w-node-a523c9bd-aadc-f28f-44d7-8cd44e435dae-c78592c5" className="div-block-28">
          <h1 className="heading-11">Pages</h1>
          <Link href="about-us"><a className="link-block w-inline-block">
            <p>About Us</p>
          </a></Link>
          <Link href="our-mission"><a className="link-block w-inline-block">
            <p>Our Mission</p>
          </a></Link>
          <Link href="schedule-a-demo"><a className="link-block w-inline-block">
            <p>Get In Touch</p>
          </a></Link>
        </div>
        <div id="w-node-a523c9bd-aadc-f28f-44d7-8cd44e435dba-c78592c5">
          <div>
            <div className="div-block-29">
              <p className="paragraph-9">Feel free to get in touch with us<br />via phone or send us a message.</p>
              <p className="paragraph-10">info@neuralleap.com </p>
            </div>
            <div>
              <div className="w-form">
                <form id="email-form" name="email-form" data-name="Email Form" method="get" className="form"><input type="text" className="text-field w-input" maxLength={256} name="name" data-name="Name" placeholder="Your Email" id="name" /><input type="submit" defaultValue="Contact Us" data-wait="Please wait..." className="submit-button w-button" /></form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
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
    .readFileSync("public/content/thank-you.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data,
    },
  };
};

export default ThankYou;
