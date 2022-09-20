import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from "react-use";

const ScheduleADemo = ({ data }) => {
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
        <div className="div-block-35">
          <div className="div-block-53">
            <div className="div-block-54">
              <div className="div-block-36">
                <div className="div-block-37">
                  <div className="div-block-45">
                    <h1 className="heading-13">You’re Almost</h1>
                    <h1 className="heading-12">Done</h1>
                    <p className="paragraph-11">
                      Please provide us with some details so that we can set-up
                      the best demo experience for you
                    </p>
                  </div>
                </div>
                <div className="div-block-38">
                  <div className="form-block w-form">
                    <form
                      id="email-form"
                      name="email-form"
                      data-name="Email Form"
                      method="get"
                      className="form-2"
                    >
                      <div className="div-block-39">
                        <div className="div-block-43">
                          <label htmlFor="name" className="from-label">
                            FIRST NAME
                          </label>
                          <input
                            type="text"
                            className="text-field-2 w-input"
                            maxLength={256}
                            name="name"
                            data-name="Name"
                            placeholder="John"
                            id="name"
                          />
                        </div>
                        <div className="div-block-44">
                          <label htmlFor="name-2" className="from-label">
                            LAST NAME
                          </label>
                          <input
                            type="text"
                            className="text-field-3 w-input"
                            maxLength={256}
                            name="name-2"
                            data-name="Name 2"
                            placeholder="Groban"
                            id="name-2"
                          />
                        </div>
                      </div>
                      <div className="div-block-40">
                        <label htmlFor="email" className="from-label">
                          COMPANY NAME
                        </label>
                        <input
                          type="email"
                          className="input-filed w-input"
                          maxLength={256}
                          name="email"
                          data-name="Email"
                          placeholder="John LTD"
                          id="email"
                          required
                        />
                      </div>
                      <div className="div-block-41">
                        <label htmlFor="email-3" className="from-label">
                          COMPANY SIZE
                        </label>
                        <select
                          id="field"
                          name="field"
                          data-name="Field"
                          className="input-filed select w-select"
                        >
                          <option value>Select one...</option>
                          <option value="First">First choice</option>
                          <option value="Second">Second choice</option>
                          <option value="Third">Third choice</option>
                        </select>
                      </div>
                      <div className="div-block-42">
                        <label htmlFor="email-2" className="from-label">
                          PHONE NUMBER
                        </label>
                      </div>
                      <div className="div-block-46">
                        <div
                          data-hover="false"
                          data-delay={0}
                          className="dropdown w-dropdown"
                        >
                          <div className="dropdown-toggle w-dropdown-toggle">
                            <div className="w-icon-dropdown-toggle" />
                            <img
                              src="images/emojione-v1_flag-for-united-states.svg"
                              loading="lazy"
                              alt=""
                              className="image-6"
                            />
                          </div>
                          <nav className="dropdown-list w-dropdown-list">
                            <a href="#" className="w-dropdown-link">
                              Link 1
                            </a>
                            <a href="#" className="w-dropdown-link">
                              Link 2
                            </a>
                            <a href="#" className="w-dropdown-link">
                              Link 3
                            </a>
                          </nav>
                        </div>
                        <input
                          type="email"
                          className="input-filed phone-number w-input"
                          maxLength={256}
                          name="Mobile-number"
                          data-name="Mobile number"
                          placeholder="123.456.789"
                          id="Mobile-number"
                          required
                        />
                      </div>
                      <p className="paragraph-12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ornare risus eu quis bibendum est dui. Tortor nisl
                        sapien eget.
                      </p>
                      <input
                        type="submit"
                        defaultValue="Let’s Chat!"
                        data-wait="Please wait..."
                        className="submit-button-2 w-button"
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
              <div className="div-block-47">
                <p className="paragraph-14">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare risus eu quis bibendum est dui. Tortor nisl sapien
                  eget.
                </p>
                <div className="div-block-48">
                  <img
                    src="images/sap_1.svg"
                    loading="lazy"
                    alt=""
                    className="logo"
                  />
                  <img
                    src="images/amz_1.svg"
                    loading="lazy"
                    alt=""
                    className="logo"
                  />
                  <img
                    src="images/oracle.svg"
                    loading="lazy"
                    alt=""
                    className="logo"
                  />
                  <img
                    src="images/google_1.svg"
                    loading="lazy"
                    alt=""
                    className="logo"
                  />
                  <img
                    src="images/meta_1.svg"
                    loading="lazy"
                    alt=""
                    className="logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="white-footer">
          <div className="div-block-50">
            <div id="w-node-_5158ab5c-34db-f1f5-356b-daaea039b468-9ea07478">
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
              id="w-node-b6e6febc-0a64-2934-967a-a8a99de8a181-9ea07478"
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
              id="w-node-_27505864-9966-c67f-5859-c84daf7b7cf5-9ea07478"
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
              id="w-node-d63a98cc-c7a0-d08b-266f-38631ac4538b-9ea07478"
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
    .readFileSync("public/content/schedule-a-demo.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data,
    },
  };
};

export default ScheduleADemo;
