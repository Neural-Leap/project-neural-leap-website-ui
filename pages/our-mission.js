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
        <div className="div-block-80">
          <div
            data-animation="default"
            data-collapse="medium"
            data-duration={400}
            data-easing="ease"
            data-easing2="ease"
            role="banner"
            className="navbar desk w-nav"
          >
            <div className="contain-div">
              <div className="div-block desktop">
                <a href="#" className="brand w-nav-brand">
                  <img src="images/Neural-Leap.svg" loading="lazy" alt="" />
                </a>
                <nav role="navigation" className="w-nav-menu">
                  <a href="#" className="nav-link w-nav-link">
                    Home
                  </a>
                  <a href="#" className="nav-link w-nav-link">
                    Pricing
                  </a>
                  <a href="#" className="nav-link w-nav-link">
                    Hiring
                  </a>
                  <a href="#" className="nav-link w-nav-link">
                    Case Studies
                  </a>
                </nav>
                <div className="w-nav-button">
                  <div className="icon w-icon-nav-menu" />
                </div>
              </div>
              <div className="div-block-2">
                <a href="#" className="nav-link sing-in w-nav-link">
                  Sign in
                </a>
                <a href="#" className="button w-button">
                  Sign up
                </a>
              </div>
            </div>
          </div>
          <div
            data-animation="default"
            data-collapse="medium"
            data-duration={400}
            data-easing="ease"
            data-easing2="ease"
            role="banner"
            className="navbar-2 w-nav"
          >
            <div className="div-block-30">
              <div className="menu-button-2 w-nav-button">
                <div className="icon-2 w-icon-nav-menu" />
              </div>
              <a href="index.html" className="brand-2 w-nav-brand">
                <img src="images/Neural-Leap.svg" loading="lazy" alt="" />
              </a>
              <nav role="navigation" className="nav-menu-2 w-nav-menu">
                <a href="#" className="nav-link-2 w-nav-link">
                  Home
                </a>
                <a href="#" className="nav-link-2 w-nav-link">
                  About
                </a>
                <a href="#" className="nav-link-2 w-nav-link">
                  Contact
                </a>
                <a href="#" className="nav-link-2 w-nav-link">
                  Sign in
                </a>
                <a href="#" className="blue-button _2 w-button">
                  Sign up
                </a>
              </nav>
              <div className="div-block-83" />
            </div>
          </div>
          <div className="section-9 wf-section">
            <img
              src="images/our-mission-float.svg"
              loading="lazy"
              alt=""
              className="image-10"
            />
            <div className="div-block-74">
              <div className="div-block-75">
                <div className="div-block-76">
                  <h1 className="heading-19">
                    Our <span className="text-span-7">Mission</span>
                  </h1>
                  <p className="paragraph-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc fringilla in at tortor, malesuada orci. Tincidunt
                    lectus vestibulum odio convallis mattis interdum lectus
                    vitae porttitor. Faucibus purus massa bibendum velit. Tempor
                    amet cras arcu, ante massa fermentum. Luctus molestie netus
                    ornare non amet. Lobortis mattis vitae pulvinar adipiscing
                    adipiscing scelerisque adipiscing.
                  </p>
                </div>
                <div className="div-block-77" />
              </div>
            </div>
          </div>
          <img
            src="images/dot.svg"
            loading="lazy"
            alt=""
            className="image-12"
          />
        </div>
        <div className="section-8 wf-section">
          <div className="div-block-78">
            <div
              id="w-node-dec2fad3-40c7-331a-fa99-dd1ec62b195c-19cd5cdc"
              className="div-block-79"
            >
              <img
                src="images/Group-sp.svg"
                loading="lazy"
                alt=""
                className="image-11"
              />
              <h1 className="heading-20">Id molestie.</h1>
              <h1 className="heading-21">Commodo fermentum.</h1>
              <p className="paragraph-20 center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                fringilla in at tortor, malesuada orci. Tincidunt lectus
                vestibulum odio convallis mattis interdum lectus vitae
                porttitor. Faucibus purus massa bibendum velit. Tempor amet cras
                arcu, ante massa fermentum. Luctus molestie netus ornare non
                amet. Lobortis mattis vitae pulvinar adipiscing adipiscing
                scelerisque adipiscing.
              </p>
            </div>
            <div
              id="w-node-ec4c1bff-e97d-cd1c-a220-8de88cad394f-19cd5cdc"
              className="div-block-79"
            >
              <img
                src="images/sp-2.svg"
                loading="lazy"
                alt=""
                className="image-11"
              />
              <h1 className="heading-20">Id molestie.</h1>
              <h1 className="heading-21">Commodo fermentum.</h1>
              <p className="paragraph-20 center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                fringilla in at tortor, malesuada orci. Tincidunt lectus
                vestibulum odio convallis mattis interdum lectus vitae
                porttitor. Faucibus purus massa bibendum velit. Tempor amet cras
                arcu, ante massa fermentum. Luctus molestie netus ornare non
                amet. Lobortis mattis vitae pulvinar adipiscing adipiscing
                scelerisque adipiscing.
              </p>
            </div>
            <div
              id="w-node-badea782-508c-0ff8-c7dd-73d0509fcf00-19cd5cdc"
              className="div-block-79"
            >
              <img
                src="images/sp-3.svg"
                loading="lazy"
                alt=""
                className="image-11"
              />
              <h1 className="heading-20">Id molestie.</h1>
              <h1 className="heading-21">Commodo fermentum.</h1>
              <p className="paragraph-20 center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                fringilla in at tortor, malesuada orci. Tincidunt lectus
                vestibulum odio convallis mattis interdum lectus vitae
                porttitor. Faucibus purus massa bibendum velit. Tempor amet cras
                arcu, ante massa fermentum. Luctus molestie netus ornare non
                amet. Lobortis mattis vitae pulvinar adipiscing adipiscing
                scelerisque adipiscing.
              </p>
            </div>
            <div
              id="w-node-fb04e1b0-e8e4-b186-8d8b-6c92c45cc251-19cd5cdc"
              className="div-block-79"
            >
              <img
                src="images/sp-4.svg"
                loading="lazy"
                alt=""
                className="image-11"
              />
              <h1 className="heading-20">Id molestie.</h1>
              <h1 className="heading-21">Commodo fermentum.</h1>
              <p className="paragraph-20 center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                fringilla in at tortor, malesuada orci. Tincidunt lectus
                vestibulum odio convallis mattis interdum lectus vitae
                porttitor. Faucibus purus massa bibendum velit. Tempor amet cras
                arcu, ante massa fermentum. Luctus molestie netus ornare non
                amet. Lobortis mattis vitae pulvinar adipiscing adipiscing
                scelerisque adipiscing.
              </p>
            </div>
          </div>
        </div>
        <div className="section-10 wf-section">
          <div className="div-block-81">
            <div className="div-block-82">
              <img src="images/Frame-las.svg" loading="lazy" alt="" />
            </div>
            <h1 className="heading-22">
              The #1{" "}
              <span className="text-span-8">AI-Engineering-As-A-Service</span>{" "}
              Subscription
            </h1>
            <p className="paragraph-20 center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
              orci, diam amet pulvinar ligula adipiscing pharetra dui tincidunt.
              Cursus fusce sed eget semper feugiat facilisi in adipiscing vitae.
              Neque ridiculus.
            </p>
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
    .readFileSync("public/content/our-mission.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data,
    },
  };
};

export default Template;
