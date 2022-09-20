import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from "react-use";

const Pricing = ({ data }) => {
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
          <div className="div-block-63">
            <div className="div-block-64">
              <div className="div-block-65">
                <h1 className="heading-15">Pricing</h1>
              </div>
              <div className="div-block-66">
                <p className="paragraph-17">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lectus tempor scelerisque libero egestas tellus mattis. Massa,
                  facilisi commodo sociis ipsum id tellus mauris. Hendrerit
                  viverra lobortis non lorem maecenas sapien. Dui fringilla
                  malesuada gravida est amet, volutpat. Proin sem dolor augue
                  viverra iaculis. Dolor amet, est ac suspendisse suspendisse
                  varius volutpat sollicitudin.
                </p>
              </div>
            </div>
          </div>
          <img
            src="images/Frame-nav.svg"
            loading="lazy"
            alt=""
            className="image-7"
          />
        </div>
        <div className="section-7 wf-section">
          <div className="cover-div">
            <div className="div-block-67">
              <h1 className="heading-16">
                Enim neque velit sed luctus{" "}
                <span className="text-span-5">congue mattis.</span>
              </h1>
              <p className="paragraph-18">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
                tempor scelerisque libero egestas tellus mattis. Massa, facilisi
                commodo sociis ipsum id tellus mauris. Hendrerit viverra
                lobortis non lorem maecenas sapien. Dui fringilla malesuada
                gravida est amet, volutpat. Proin sem dolor augue viverra
                iaculis. Dolor amet, est ac suspendisse suspendisse varius
                volutpat sollicitudin.
              </p>
              <p className="paragraph-18">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
                tempor scelerisque libero egestas tellus mattis. Massa, facilisi
                commodo sociis ipsum id tellus mauris. Hendrerit viverra
                lobortis non lorem maecenas sapien. Dui fringilla malesuada
                gravida est amet, volutpat. Proin sem dolor augue viverra
                iaculis. Dolor amet, est ac suspendisse suspendisse varius
                volutpat sollicitudin.
              </p>
            </div>
            <div className="div-block-68">
              <div
                data-current="Tab 1"
                data-easing="ease"
                data-duration-in={300}
                data-duration-out={100}
                className="w-tabs"
              >
                <div className="tabs-menu w-tab-menu">
                  <a
                    data-w-tab="Tab 1"
                    className="tab-div w-inline-block w-tab-link w--current"
                  >
                    <div>Communication</div>
                  </a>
                  <a
                    data-w-tab="Tab 2"
                    className="tab-div w-inline-block w-tab-link"
                  >
                    <div>Communication</div>
                  </a>
                  <a
                    data-w-tab="Tab 3"
                    className="tab-div w-inline-block w-tab-link"
                  >
                    <div>Communication</div>
                  </a>
                  <a
                    data-w-tab="Tab 4"
                    className="tab-div w-inline-block w-tab-link"
                  >
                    <div>Communication</div>
                  </a>
                </div>
                <div className="tabs-content w-tab-content">
                  <div
                    data-w-tab="Tab 1"
                    className="tab-pane-tab-1 w-tab-pane w--tab-active"
                  >
                    <div className="div-block-69">
                      <div
                        id="w-node-d9cfbac8-c5e2-26d0-3bfe-98c9b9bc9132-b43d32f7"
                        className="div-block-70"
                      >
                        <h1 className="heading-17">
                          Lorem
                          <br />
                          <span className="text-span-6">ipsum dolor</span>
                        </h1>
                        <h1 className="heading-18">$ 99</h1>
                        <p className="paragraph-19">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Tellus neque vitae at egestas libero, eleifend
                          tellus suspendisse. Gravida facilisis consequat
                          sodales velit parturient at. Morbi varius phasellus
                          non ut lectus. Enim tempor in odio ut a vestibulum
                          quis sed. Interdum aliquet porttitor tellus amet
                          fringilla lacus ac.Interdum quis arcu tincidunt
                          vulputate tincidunt scelerisque. Enim varius integer
                          phasellus sit aenean pellentesque urna.
                        </p>
                      </div>
                      <div
                        id="w-node-_2723158d-3589-bf82-effb-70744675de0b-b43d32f7"
                        className="div-block-70"
                      >
                        <h1 className="heading-17">
                          Lorem <br />‍
                          <span className="text-span-6">ipsum dolor</span>
                        </h1>
                        <h1 className="heading-18">$ 99</h1>
                        <p className="paragraph-19">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Tellus neque vitae at egestas libero, eleifend
                          tellus suspendisse. Gravida facilisis consequat
                          sodales velit parturient at. Morbi varius phasellus
                          non ut lectus. Enim tempor in odio ut a vestibulum
                          quis sed. Interdum aliquet porttitor tellus amet
                          fringilla lacus ac.Interdum quis arcu tincidunt
                          vulputate tincidunt scelerisque. Enim varius integer
                          phasellus sit aenean pellentesque urna.
                        </p>
                      </div>
                      <div
                        id="w-node-d6bb0878-4b6c-dbc8-dcc0-4de6e076c920-b43d32f7"
                        className="div-block-70"
                      >
                        <h1 className="heading-17">
                          Lorem <br />‍
                          <span className="text-span-6">ipsum dolor</span>
                        </h1>
                        <h1 className="heading-18">$ 99</h1>
                        <p className="paragraph-19">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Tellus neque vitae at egestas libero, eleifend
                          tellus suspendisse. Gravida facilisis consequat
                          sodales velit parturient at. Morbi varius phasellus
                          non ut lectus. Enim tempor in odio ut a vestibulum
                          quis sed. Interdum aliquet porttitor tellus amet
                          fringilla lacus ac.Interdum quis arcu tincidunt
                          vulputate tincidunt scelerisque. Enim varius integer
                          phasellus sit aenean pellentesque urna.
                        </p>
                      </div>
                      <div
                        id="w-node-e72e8058-6bed-3321-3368-5f9d0ea7d32a-b43d32f7"
                        className="div-block-70"
                      >
                        <h1 className="heading-17">
                          Lorem{" "}
                          <span className="text-span-6">
                            <br />
                            ipsum dolor
                          </span>
                        </h1>
                        <h1 className="heading-18">$ 99</h1>
                        <p className="paragraph-19">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Tellus neque vitae at egestas libero, eleifend
                          tellus suspendisse. Gravida facilisis consequat
                          sodales velit parturient at. Morbi varius phasellus
                          non ut lectus. Enim tempor in odio ut a vestibulum
                          quis sed. Interdum aliquet porttitor tellus amet
                          fringilla lacus ac.Interdum quis arcu tincidunt
                          vulputate tincidunt scelerisque. Enim varius integer
                          phasellus sit aenean pellentesque urna.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div data-w-tab="Tab 2" className="w-tab-pane">
                    <div className="div-block-69">
                      <div
                        id="w-node-bae2df68-6a07-e4fe-5bc4-9505f84b0b2a-b43d32f7"
                        className="div-block-70"
                      >
                        <h1 className="heading-17">
                          Lorem <span className="text-span-6">ipsum dolor</span>
                        </h1>
                        <h1 className="heading-18">$ 99</h1>
                        <p className="paragraph-19">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Tellus neque vitae at egestas libero, eleifend
                          tellus suspendisse. Gravida facilisis consequat
                          sodales velit parturient at. Morbi varius phasellus
                          non ut lectus. Enim tempor in odio ut a vestibulum
                          quis sed. Interdum aliquet porttitor tellus amet
                          fringilla lacus ac.Interdum quis arcu tincidunt
                          vulputate tincidunt scelerisque. Enim varius integer
                          phasellus sit aenean pellentesque urna.
                        </p>
                      </div>
                      <div
                        id="w-node-bae2df68-6a07-e4fe-5bc4-9505f84b0b33-b43d32f7"
                        className="div-block-70"
                      >
                        <h1 className="heading-17">
                          Lorem <span className="text-span-6">ipsum dolor</span>
                        </h1>
                        <h1 className="heading-18">$ 99</h1>
                        <p className="paragraph-19">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Tellus neque vitae at egestas libero, eleifend
                          tellus suspendisse. Gravida facilisis consequat
                          sodales velit parturient at. Morbi varius phasellus
                          non ut lectus. Enim tempor in odio ut a vestibulum
                          quis sed. Interdum aliquet porttitor tellus amet
                          fringilla lacus ac.Interdum quis arcu tincidunt
                          vulputate tincidunt scelerisque. Enim varius integer
                          phasellus sit aenean pellentesque urna.
                        </p>
                      </div>
                      <div
                        id="w-node-bae2df68-6a07-e4fe-5bc4-9505f84b0b3c-b43d32f7"
                        className="div-block-70"
                      >
                        <h1 className="heading-17">
                          Lorem <span className="text-span-6">ipsum dolor</span>
                        </h1>
                        <h1 className="heading-18">$ 99</h1>
                        <p className="paragraph-19">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Tellus neque vitae at egestas libero, eleifend
                          tellus suspendisse. Gravida facilisis consequat
                          sodales velit parturient at. Morbi varius phasellus
                          non ut lectus. Enim tempor in odio ut a vestibulum
                          quis sed. Interdum aliquet porttitor tellus amet
                          fringilla lacus ac.Interdum quis arcu tincidunt
                          vulputate tincidunt scelerisque. Enim varius integer
                          phasellus sit aenean pellentesque urna.
                        </p>
                      </div>
                      <div
                        id="w-node-bae2df68-6a07-e4fe-5bc4-9505f84b0b45-b43d32f7"
                        className="div-block-70"
                      >
                        <h1 className="heading-17">
                          Lorem <span className="text-span-6">ipsum dolor</span>
                        </h1>
                        <h1 className="heading-18">$ 99</h1>
                        <p className="paragraph-19">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Tellus neque vitae at egestas libero, eleifend
                          tellus suspendisse. Gravida facilisis consequat
                          sodales velit parturient at. Morbi varius phasellus
                          non ut lectus. Enim tempor in odio ut a vestibulum
                          quis sed. Interdum aliquet porttitor tellus amet
                          fringilla lacus ac.Interdum quis arcu tincidunt
                          vulputate tincidunt scelerisque. Enim varius integer
                          phasellus sit aenean pellentesque urna.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div data-w-tab="Tab 3" className="w-tab-pane">
                    <div className="div-block-69">
                      <div
                        id="w-node-fdd10b3f-3f37-9287-663c-c0b4913ae910-b43d32f7"
                        className="div-block-70"
                      >
                        <h1 className="heading-17">
                          Lorem <span className="text-span-6">ipsum dolor</span>
                        </h1>
                        <h1 className="heading-18">$ 99</h1>
                        <p className="paragraph-19">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Tellus neque vitae at egestas libero, eleifend
                          tellus suspendisse. Gravida facilisis consequat
                          sodales velit parturient at. Morbi varius phasellus
                          non ut lectus. Enim tempor in odio ut a vestibulum
                          quis sed. Interdum aliquet porttitor tellus amet
                          fringilla lacus ac.Interdum quis arcu tincidunt
                          vulputate tincidunt scelerisque. Enim varius integer
                          phasellus sit aenean pellentesque urna.
                        </p>
                      </div>
                      <div
                        id="w-node-fdd10b3f-3f37-9287-663c-c0b4913ae919-b43d32f7"
                        className="div-block-70"
                      >
                        <h1 className="heading-17">
                          Lorem <span className="text-span-6">ipsum dolor</span>
                        </h1>
                        <h1 className="heading-18">$ 99</h1>
                        <p className="paragraph-19">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Tellus neque vitae at egestas libero, eleifend
                          tellus suspendisse. Gravida facilisis consequat
                          sodales velit parturient at. Morbi varius phasellus
                          non ut lectus. Enim tempor in odio ut a vestibulum
                          quis sed. Interdum aliquet porttitor tellus amet
                          fringilla lacus ac.Interdum quis arcu tincidunt
                          vulputate tincidunt scelerisque. Enim varius integer
                          phasellus sit aenean pellentesque urna.
                        </p>
                      </div>
                      <div
                        id="w-node-fdd10b3f-3f37-9287-663c-c0b4913ae922-b43d32f7"
                        className="div-block-70"
                      >
                        <h1 className="heading-17">
                          Lorem <span className="text-span-6">ipsum dolor</span>
                        </h1>
                        <h1 className="heading-18">$ 99</h1>
                        <p className="paragraph-19">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Tellus neque vitae at egestas libero, eleifend
                          tellus suspendisse. Gravida facilisis consequat
                          sodales velit parturient at. Morbi varius phasellus
                          non ut lectus. Enim tempor in odio ut a vestibulum
                          quis sed. Interdum aliquet porttitor tellus amet
                          fringilla lacus ac.Interdum quis arcu tincidunt
                          vulputate tincidunt scelerisque. Enim varius integer
                          phasellus sit aenean pellentesque urna.
                        </p>
                      </div>
                      <div
                        id="w-node-fdd10b3f-3f37-9287-663c-c0b4913ae92b-b43d32f7"
                        className="div-block-70"
                      >
                        <h1 className="heading-17">
                          Lorem <span className="text-span-6">ipsum dolor</span>
                        </h1>
                        <h1 className="heading-18">$ 99</h1>
                        <p className="paragraph-19">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Tellus neque vitae at egestas libero, eleifend
                          tellus suspendisse. Gravida facilisis consequat
                          sodales velit parturient at. Morbi varius phasellus
                          non ut lectus. Enim tempor in odio ut a vestibulum
                          quis sed. Interdum aliquet porttitor tellus amet
                          fringilla lacus ac.Interdum quis arcu tincidunt
                          vulputate tincidunt scelerisque. Enim varius integer
                          phasellus sit aenean pellentesque urna.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div data-w-tab="Tab 4" className="w-tab-pane">
                    <div className="div-block-69">
                      <div
                        id="w-node-ab34c3cd-cb0c-0cca-9ea4-ed8cf1b1e245-b43d32f7"
                        className="div-block-70"
                      >
                        <h1 className="heading-17">
                          Lorem <span className="text-span-6">ipsum dolor</span>
                        </h1>
                        <h1 className="heading-18">$ 99</h1>
                        <p className="paragraph-19">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Tellus neque vitae at egestas libero, eleifend
                          tellus suspendisse. Gravida facilisis consequat
                          sodales velit parturient at. Morbi varius phasellus
                          non ut lectus. Enim tempor in odio ut a vestibulum
                          quis sed. Interdum aliquet porttitor tellus amet
                          fringilla lacus ac.Interdum quis arcu tincidunt
                          vulputate tincidunt scelerisque. Enim varius integer
                          phasellus sit aenean pellentesque urna.
                        </p>
                      </div>
                      <div
                        id="w-node-ab34c3cd-cb0c-0cca-9ea4-ed8cf1b1e24e-b43d32f7"
                        className="div-block-70"
                      >
                        <h1 className="heading-17">
                          Lorem <span className="text-span-6">ipsum dolor</span>
                        </h1>
                        <h1 className="heading-18">$ 99</h1>
                        <p className="paragraph-19">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Tellus neque vitae at egestas libero, eleifend
                          tellus suspendisse. Gravida facilisis consequat
                          sodales velit parturient at. Morbi varius phasellus
                          non ut lectus. Enim tempor in odio ut a vestibulum
                          quis sed. Interdum aliquet porttitor tellus amet
                          fringilla lacus ac.Interdum quis arcu tincidunt
                          vulputate tincidunt scelerisque. Enim varius integer
                          phasellus sit aenean pellentesque urna.
                        </p>
                      </div>
                      <div
                        id="w-node-ab34c3cd-cb0c-0cca-9ea4-ed8cf1b1e257-b43d32f7"
                        className="div-block-70"
                      >
                        <h1 className="heading-17">
                          Lorem <span className="text-span-6">ipsum dolor</span>
                        </h1>
                        <h1 className="heading-18">$ 99</h1>
                        <p className="paragraph-19">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Tellus neque vitae at egestas libero, eleifend
                          tellus suspendisse. Gravida facilisis consequat
                          sodales velit parturient at. Morbi varius phasellus
                          non ut lectus. Enim tempor in odio ut a vestibulum
                          quis sed. Interdum aliquet porttitor tellus amet
                          fringilla lacus ac.Interdum quis arcu tincidunt
                          vulputate tincidunt scelerisque. Enim varius integer
                          phasellus sit aenean pellentesque urna.
                        </p>
                      </div>
                      <div
                        id="w-node-ab34c3cd-cb0c-0cca-9ea4-ed8cf1b1e260-b43d32f7"
                        className="div-block-70"
                      >
                        <h1 className="heading-17">
                          Lorem <span className="text-span-6">ipsum dolor</span>
                        </h1>
                        <h1 className="heading-18">$ 99</h1>
                        <p className="paragraph-19">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Tellus neque vitae at egestas libero, eleifend
                          tellus suspendisse. Gravida facilisis consequat
                          sodales velit parturient at. Morbi varius phasellus
                          non ut lectus. Enim tempor in odio ut a vestibulum
                          quis sed. Interdum aliquet porttitor tellus amet
                          fringilla lacus ac.Interdum quis arcu tincidunt
                          vulputate tincidunt scelerisque. Enim varius integer
                          phasellus sit aenean pellentesque urna.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="images/Frame-sec2.svg"
            loading="lazy"
            alt=""
            className="image-8"
          />
        </div>
        <div className="wf-section">
          <div className="cover-div _2">
            <div className="div-block-71">
              <div className="div-block-72">
                <h1 className="heading-16">
                  <span className="text-span-5">
                    The #1 AI-Engineering-As-A-Service Subscription
                  </span>
                </h1>
                <p className="paragraph-18">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Rhoncus orci, diam amet pulvinar ligula adipiscing pharetra
                  dui tincidunt. Cursus fusce sed eget semper feugiat facilisi
                  in adipiscing vitae. Neque ridiculus.
                </p>
              </div>
              <div className="div-block-73">
                <img
                  src="images/Frame-last.svg"
                  loading="lazy"
                  alt=""
                  className="image-9"
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
    .readFileSync("public/content/pricing.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data,
    },
  };
};

export default Pricing;
