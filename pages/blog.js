import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from "react-use";

const Blog = ({ data }) => {
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
        <div className="wf-section">
          <div className="div-block-86">
            <h1 className="heading-23">Blogs</h1>
            <div className="text-block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              fringilla in at tortor, malesuada orci. Tincidunt lectus
              vestibulum odio convallis mattis interdum lectus vitae porttitor.
              Faucibus purus massa bibendum velit. Tempor amet cras arcu, ante
              massa fermentum. Luctus molestie netus ornare non amet. Lobortis
              mattis vitae pulvinar adipiscing adipiscing scelerisque
              adipiscing.
            </div>
            <div className="div-block-87">
              <div className="div-block-88">
                <img
                  src="images/Rectangle-1733.svg"
                  loading="lazy"
                  alt=""
                  className="image-14"
                />
                <div>
                  <div className="div-block-89">
                    <div className="text-block-2">Lorem ipsum</div>
                    <div className="text-block-3">Vestibulum sed est.</div>
                  </div>
                  <div className="text-block-4">
                    Access a massive pool of Design talent
                  </div>
                  <div className="div-block-90">
                    <div className="div-block-91">
                      <img
                        src="images/Ellipse-166.svg"
                        loading="lazy"
                        alt=""
                        className="image-15"
                      />
                    </div>
                    <div>
                      <div className="text-block-5">Vestibulum sed est.</div>
                      <div className="text-block-6">Nec amet.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-block-88">
                <div className="div-block-88 horizontal">
                  <div className="div-block-92">
                    <img
                      src="images/Rectangle-1730.svg"
                      loading="lazy"
                      alt=""
                      className="image-14 horizontal"
                    />
                  </div>
                  <div>
                    <div className="div-block-89">
                      <div className="text-block-2 horizontal">Lorem ipsum</div>
                      <div className="text-block-3 hz">Vestibulum sed est.</div>
                    </div>
                    <div className="text-block-4 hz">
                      Access a massive pool of Design talent
                    </div>
                    <div className="div-block-90">
                      <div className="div-block-91 hz">
                        <img
                          src="images/Ellipse-166.svg"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                      <div>
                        <div className="text-block-5 hz">
                          Vestibulum sed est.
                        </div>
                        <div className="text-block-6 hz">Nec amet.</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-block-88 horizontal">
                  <div className="div-block-92">
                    <img
                      src="images/Rectangle-1734.svg"
                      loading="lazy"
                      alt=""
                      className="image-14 horizontal"
                    />
                  </div>
                  <div>
                    <div className="div-block-89">
                      <div className="text-block-2 horizontal">Lorem ipsum</div>
                      <div className="text-block-3 hz">Vestibulum sed est.</div>
                    </div>
                    <div className="text-block-4 hz">
                      Access a massive pool of Design talent
                    </div>
                    <div className="div-block-90">
                      <div className="div-block-91 hz">
                        <img
                          src="images/Ellipse-166.svg"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                      <div>
                        <div className="text-block-5 hz">
                          Vestibulum sed est.
                        </div>
                        <div className="text-block-6 hz">Nec amet.</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-block-88 horizontal">
                  <div className="div-block-92">
                    <img
                      src="images/Rectangle-1735.svg"
                      loading="lazy"
                      alt=""
                      className="image-14 horizontal"
                    />
                  </div>
                  <div>
                    <div className="div-block-89">
                      <div className="text-block-2 horizontal">Lorem ipsum</div>
                      <div className="text-block-3 hz">Vestibulum sed est.</div>
                    </div>
                    <div className="text-block-4 hz">
                      Access a massive pool of Design talent
                    </div>
                    <div className="div-block-90">
                      <div className="div-block-91 hz">
                        <img
                          src="images/Ellipse-166.svg"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                      <div>
                        <div className="text-block-5 hz">
                          Vestibulum sed est.
                        </div>
                        <div className="text-block-6 hz">Nec amet.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-block-94">
              <div className="div-block-95">
                <div id="w-node-_5461b4d0-a816-919e-bf6c-7e3b1440d9fc-84c34174">
                  <div className="div-block-87">
                    <div className="div-block-88">
                      <img
                        src="images/Rectangle-4404.svg"
                        loading="lazy"
                        alt=""
                        className="image-14"
                      />
                      <div>
                        <div className="div-block-89">
                          <div className="text-block-2">Lorem ipsum</div>
                          <div className="text-block-3">
                            Vestibulum sed est.
                          </div>
                        </div>
                        <div className="text-block-4">
                          Access a massive pool of Design talent
                        </div>
                        <div className="div-block-90">
                          <div className="div-block-91">
                            <img
                              src="images/Ellipse-166.svg"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                          <div>
                            <div className="text-block-5">
                              Vestibulum sed est.
                            </div>
                            <div className="text-block-6">Nec amet.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="w-node-_198018b5-2dd3-1cd2-6540-8871b9ec6ff2-84c34174">
                  <div className="div-block-87">
                    <div className="div-block-88">
                      <img
                        src="images/Rectangle-4404.svg"
                        loading="lazy"
                        alt=""
                        className="image-14"
                      />
                      <div>
                        <div className="div-block-89">
                          <div className="text-block-2">Lorem ipsum</div>
                          <div className="text-block-3">
                            Vestibulum sed est.
                          </div>
                        </div>
                        <div className="text-block-4">
                          Access a massive pool of Design talent
                        </div>
                        <div className="div-block-90">
                          <div className="div-block-91">
                            <img
                              src="images/Ellipse-166.svg"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                          <div>
                            <div className="text-block-5">
                              Vestibulum sed est.
                            </div>
                            <div className="text-block-6">Nec amet.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="w-node-_77f86cd7-94c7-3608-14bb-5030117a0ac4-84c34174">
                  <div className="div-block-87">
                    <div className="div-block-88">
                      <img
                        src="images/Rectangle-4404.svg"
                        loading="lazy"
                        alt=""
                        className="image-14"
                      />
                      <div>
                        <div className="div-block-89">
                          <div className="text-block-2">Lorem ipsum</div>
                          <div className="text-block-3">
                            Vestibulum sed est.
                          </div>
                        </div>
                        <div className="text-block-4">
                          Access a massive pool of Design talent
                        </div>
                        <div className="div-block-90">
                          <div className="div-block-91">
                            <img
                              src="images/Ellipse-166.svg"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                          <div>
                            <div className="text-block-5">
                              Vestibulum sed est.
                            </div>
                            <div className="text-block-6">Nec amet.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="w-node-_059d45d8-c3a1-5dbb-2bc0-b7cfe1554421-84c34174">
                  <div className="div-block-87">
                    <div className="div-block-88">
                      <img
                        src="images/Rectangle-4404.svg"
                        loading="lazy"
                        alt=""
                        className="image-14"
                      />
                      <div>
                        <div className="div-block-89">
                          <div className="text-block-2">Lorem ipsum</div>
                          <div className="text-block-3">
                            Vestibulum sed est.
                          </div>
                        </div>
                        <div className="text-block-4">
                          Access a massive pool of Design talent
                        </div>
                        <div className="div-block-90">
                          <div className="div-block-91">
                            <img
                              src="images/Ellipse-166.svg"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                          <div>
                            <div className="text-block-5">
                              Vestibulum sed est.
                            </div>
                            <div className="text-block-6">Nec amet.</div>
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
    .readFileSync("public/content/blog.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data,
    },
  };
};

export default Blog;
