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
      <div className="div-block-52">
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
            <a
              href="index.html"
              aria-current="page"
              className="brand-2 w-nav-brand w--current"
            >
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
        <div className="section wf-section">
          <div className="div-block-55">
            <div className="div-block-56">
              <div className="div-block-4">
                <div className="div-block-3">
                  <h1 className="heading">Your Outsourced</h1>
                  <h1 className="heading-2">Machine Learning Team</h1>
                  <p className="paragraph">
                    Neural Leap is an AI engineering service that enables
                    companies to access top 1% of global talent, eliminate their
                    cost of hiring, and effortlessly scale their team to meet
                    their needs.
                  </p>
                  <a href="#" className="blue-button w-button">
                    Book A Demo
                  </a>
                  <div className="div-block-5">
                    <img
                      src="images/sap.svg"
                      loading="lazy"
                      alt=""
                      className="hero-logo"
                    />
                    <img
                      src="images/amz.svg"
                      loading="lazy"
                      alt=""
                      className="hero-logo"
                    />
                    <img
                      src="images/orc.svg"
                      loading="lazy"
                      alt=""
                      className="hero-logo"
                    />
                    <img
                      src="images/google.svg"
                      loading="lazy"
                      alt=""
                      className="hero-logo"
                    />
                    <img
                      src="images/meta.svg"
                      loading="lazy"
                      alt=""
                      className="hero-logo"
                    />
                  </div>
                </div>
                <div>
                  <img
                    src="images/right-grp.svg"
                    loading="lazy"
                    alt=""
                    className="right-image"
                  />
                </div>
              </div>
            </div>
          </div>
          <img
            src="images/Ellipse-1932.svg"
            loading="lazy"
            alt=""
            className="top-left-cornor-image"
          />
        </div>
        <div className="section-2 wf-section">
          <div className="div-block-57">
            <div className="div-block-6">
              <div className="div-block-7">
                <img
                  src="images/acces-float.svg"
                  loading="lazy"
                  alt=""
                  className="image"
                />
              </div>
              <div className="div-block-8">
                <div className="div-block-9">
                  <h1 className="heading-3">
                    Access The Top 1% of{" "}
                    <span className="text-span">AI Engineering Talent</span>
                  </h1>
                  <p className="paragraph-2">
                    Current machine learning, deep learning, and other related
                    engineering talent is siloed in FAANG companies that pay top
                    of market salaries. Even they’re having trouble holding on
                    to top talent though.
                    <br />
                    <br />
                    We know this because we’re a group of ex FAANG machine
                    learning engineers that wanted to give every company the
                    ability to access top talent in the field. We’ve created a
                    unique management structure that enables us to maintain a
                    high retention rate so you have a team you can always rely
                    on.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="div-block-58">
            <div className="div-block-6 _2">
              <div className="div-block-8 _2">
                <div className="div-block-9">
                  <h1 className="heading-3">
                    Have <span className="text-span-4">A Reliable Team </span>
                    You Can Count On
                  </h1>
                  <p className="paragraph-2">
                    Its hard retaining top engineering talent in general but
                    when it comes to machine learning its arguably the most
                    difficult. Your HR department will spend months trying to
                    kure top talent only to have them leave shortly after.
                    <br />
                    This happens time and time again in todays job market for AI
                    engineering talent. While we can’t force people to stay, we
                    do have a unique management structure thats enabled us to
                    maintain a high retention rate so you have a team you can
                    always rely on.
                  </p>
                </div>
              </div>
              <div className="div-block-7 new">
                <img
                  src="images/Frame-line.svg"
                  loading="lazy"
                  alt=""
                  className="image _2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="section-3 wf-section">
          <div>
            <div className="div-block-10">
              <h1 className="heading-4">Id molestie.</h1>
              <h1 className="heading-5">Commodo fermentum.</h1>
              <p className="paragraph-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                suspendisse massa laoreet cursus vitae aliquam nec integer a.
                Odio lectus at nibh sed hendrerit risus est. Pharetra sagittis,
                ut a elit id. Dui integer proin faucibus.
              </p>
              <a href="#" className="blue-button _3 w-button">
                Sign up
              </a>
            </div>
          </div>
        </div>
        <div className="section-4 wf-section">
          <div>
            <div className="div-block-11">
              <div
                id="w-node-_0a365498-7c28-0cdb-93c0-2761e1d24c65-63111abb"
                className="div-cover"
              >
                <div>
                  <img src="images/spiral.svg" loading="lazy" alt="" />
                </div>
                <div className="div-block-13">
                  <h1 className="heading-6">
                    <span className="text-span-2">Effortlessly</span> Scale Your
                    Team
                  </h1>
                  <p className="paragraph-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
                    tempus ullamcorper faucibus vitae cursus amet lectus
                    condimentum.
                  </p>
                </div>
              </div>
              <div
                id="w-node-_7db3c2b9-6dc5-c264-93b3-7314e35b3b33-63111abb"
                className="div-cover"
              >
                <img src="images/tri.svg" loading="lazy" alt="" />
                <div className="div-block-13">
                  <h1 className="heading-6">
                    <span className="text-span-2">Effortlessly</span> Scale Your
                    Team
                  </h1>
                  <p className="paragraph-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
                    tempus ullamcorper faucibus vitae cursus amet lectus
                    condimentum.
                  </p>
                </div>
              </div>
              <div
                id="w-node-_8798fd89-13ba-ad91-09dc-e08625bccdc3-63111abb"
                className="div-cover"
              >
                <img src="images/circl.svg" loading="lazy" alt="" />
                <div className="div-block-13">
                  <h1 className="heading-6">
                    <span className="text-span-2">Effortlessly</span> Scale Your
                    Team
                  </h1>
                  <p className="paragraph-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
                    tempus ullamcorper faucibus vitae cursus amet lectus
                    condimentum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-5 wf-section">
          <div className="div-block-59">
            <div className="div-block-15">
              <div className="step-line">
                <div className="div-block-19" />
                <div className="div-block-20" />
              </div>
              <div className="step-line">
                <div className="div-block-19" />
                <div className="div-block-20" />
              </div>
              <div className="step-line">
                <div className="div-block-19" />
              </div>
            </div>
            <div className="div-block-14">
              <div className="content-step">
                <h1 className="heading-7">Step 3</h1>
                <h1 className="heading-8">Receive The Code</h1>
                <p className="paragraph-5">
                  Whether its through Google Colab or you want us to create a PR
                  on GitHub. Just let us know what you want
                </p>
              </div>
              <div className="content-step">
                <h1 className="heading-7">Step 3</h1>
                <h1 className="heading-8">Receive The Code</h1>
                <p className="paragraph-5">
                  Whether its through Google Colab or you want us to create a PR
                  on GitHub. Just let us know what you want
                </p>
              </div>
              <div className="content-step _3">
                <h1 className="heading-7">Step 3</h1>
                <h1 className="heading-8">Receive The Code</h1>
                <p className="paragraph-5">
                  Whether its through Google Colab or you want us to create a PR
                  on GitHub. Just let us know what you want
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-6 wf-section">
          <div className="div-block-60">
            <div className="div-block-22">
              <h1 className="heading-9">Testimonials</h1>
              <img
                src="images/ibm.svg"
                loading="lazy"
                alt=""
                className="image-3"
              />
              <p className="paragraph-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur justo, vitae potenti lorem accumsan. Consequat justo
                cursus urna felis.
              </p>
              <div className="div-block-21">
                <img src="images/avatar-client.svg" loading="lazy" alt="" />
                <div className="div-block-23">
                  <p className="paragraph-7">Organize across</p>
                  <p className="paragraph-7">Ui designer</p>
                </div>
              </div>
              <a href="#" className="button-2 w-button">
                More Testimonials
              </a>
            </div>
          </div>
          <div className="div-block-61">
            <div className="div-block-24">
              <div className="div-block-25">
                <img
                  src="images/lastspiral.svg"
                  loading="lazy"
                  alt=""
                  className="image-4"
                />
              </div>
              <div className="div-block-26">
                <h1 className="heading-10">
                  The #1{" "}
                  <span className="text-span-3">
                    AI-Engineering-As-A-Service
                  </span>{" "}
                  Subscription
                </h1>
                <p className="paragraph-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Rhoncus orci, diam amet pulvinar ligula adipiscing pharetra
                  dui tincidunt. Cursus fusce sed eget semper feugiat facilisi
                  in adipiscing vitae. Neque ridiculus.
                </p>
              </div>
            </div>
          </div>
          <img src="images/dot.svg" loading="lazy" alt="" className="image-5" />
        </div>
        <div className="footer wf-section">
          <div className="div-block-62">
            <div className="div-block-27">
              <div
                id="w-node-a2a4429f-4978-8740-e194-387a24b05cbc-63111abb"
                className="div-block-28"
              >
                <h1 className="heading-11">Pages</h1>
                <a href="#" className="link-block w-inline-block">
                  <p>Home</p>
                </a>
                <a href="#" className="link-block w-inline-block">
                  <p>Product</p>
                </a>
                <a href="#" className="link-block w-inline-block">
                  <p>Pricing</p>
                </a>
                <a href="#" className="link-block w-inline-block">
                  <p>About</p>
                </a>
                <a href="#" className="link-block w-inline-block">
                  <p>Contact</p>
                </a>
              </div>
              <div
                id="w-node-_125be137-37b5-48dc-592e-659a8e32d782-63111abb"
                className="div-block-28"
              >
                <h1 className="heading-11">Tomothy</h1>
                <a href="#" className="link-block w-inline-block">
                  <p>Eleanor Edwards</p>
                </a>
                <a href="#" className="link-block w-inline-block">
                  <p>Ted Robertson</p>
                </a>
                <a href="#" className="link-block w-inline-block">
                  <p>Annette Russell</p>
                </a>
                <a href="#" className="link-block w-inline-block">
                  <p>Jennie Mckinney</p>
                </a>
                <a href="#" className="link-block w-inline-block">
                  <p>Gloria Richards</p>
                </a>
              </div>
              <div
                id="w-node-_99d30a7e-a79d-bcc4-f8dc-b241c5134b6a-63111abb"
                className="div-block-28"
              >
                <h1 className="heading-11">Jane Black</h1>
                <a href="#" className="link-block w-inline-block">
                  <p>Philip Jones</p>
                </a>
                <a href="#" className="link-block w-inline-block">
                  <p>Product</p>
                </a>
                <a href="#" className="link-block w-inline-block">
                  <p>Colleen Russell</p>
                </a>
                <a href="#" className="link-block w-inline-block">
                  <p>Marvin Hawkins</p>
                </a>
                <a href="#" className="link-block w-inline-block">
                  <p>Bruce Simmmons</p>
                </a>
              </div>
              <div id="w-node-_36bdb3b1-eac0-02e9-3358-270834c522c0-63111abb">
                <div>
                  <a href="#" className="social-icon w-inline-block">
                    <img src="images/twitter.svg" loading="lazy" alt="" />
                  </a>
                  <a href="#" className="w-inline-block">
                    <img
                      src="images/fb.svg"
                      loading="lazy"
                      alt=""
                      className="social-icon"
                    />
                  </a>
                  <a href="#" className="w-inline-block">
                    <img
                      src="images/link.svg"
                      loading="lazy"
                      alt=""
                      className="social-icon"
                    />
                  </a>
                  <div className="div-block-29">
                    <p className="paragraph-9">Subscribe to our Newsletter</p>
                    <p className="paragraph-10">
                      Lacus ut iaculis mattis tellus velit.
                    </p>
                  </div>
                  <div>
                    <div className="w-form">
                      <form
                        id="email-form"
                        name="email-form"
                        data-name="Email Form"
                        method="get"
                        className="form"
                      >
                        <input
                          type="text"
                          className="text-field w-input"
                          maxLength={256}
                          name="name"
                          data-name="Name"
                          placeholder="Your Email"
                          id="name"
                        />
                        <input
                          type="submit"
                          defaultValue="Subsribe"
                          data-wait="Please wait..."
                          className="submit-button w-button"
                        />
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
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
  );
};

export const getStaticProps = async () => {
  const markdownWithMetadata = fs
    .readFileSync("public/content/index.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data,
    },
  };
};

export default Template;
