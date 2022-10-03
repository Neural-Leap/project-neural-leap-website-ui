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
      <div className="body-blogs">
  <div data-animation="default" data-collapse="medium" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="navbar desk w-nav">
    <div className="contain-div">
      <div className="div-block desktop">
        <a href="#" className="brand w-nav-brand"><img src="images/Neural-Leap.svg" loading="lazy" alt="" /></a>
        <nav role="navigation" className="w-nav-menu">
          <a href="index.html" className="nav-link w-nav-link">Home</a>
          <a href="pricing.html" className="nav-link w-nav-link">Pricing</a>
          <a href="about-us.html" className="nav-link w-nav-link">About Us</a>
          <a href="our-mission.html" className="nav-link w-nav-link">Our Mission</a>
        </nav>
      </div>
      <div className="div-block-2">
        <a href="schedule-a-demo.html" className="button w-button">Book A Demo</a>
      </div>
    </div>
  </div>
  <div data-animation="default" data-collapse="medium" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="navbar-2 w-nav">
    <div className="div-block-30">
      <a href="index.html" className="brand-2 w-nav-brand"><img src="images/Neural-Leap.svg" loading="lazy" alt="" /></a>
      <div className="div-block-83" />
    </div>
  </div>
  <div className="wf-section">
    <div className="div-block-86">
      <h1 className="heading-23">Blogs</h1>
      <div className="text-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla in at tortor, malesuada orci. Tincidunt lectus vestibulum odio convallis mattis interdum lectus vitae porttitor. Faucibus purus massa bibendum velit. Tempor amet cras arcu, ante massa fermentum. Luctus molestie netus ornare non amet. Lobortis mattis vitae pulvinar adipiscing adipiscing scelerisque adipiscing.</div>
      <div className="div-block-87">
        <div className="div-block-88"><img src="images/Rectangle-1733.svg" loading="lazy" alt="" className="image-14" />
          <div>
            <div className="div-block-89">
              <div className="text-block-2">Lorem ipsum</div>
              <div className="text-block-3">Vestibulum sed est.</div>
            </div>
            <div className="text-block-4">Access a massive pool of Design talent</div>
            <div className="div-block-90">
              <div className="div-block-91"><img src="images/Ellipse-166.svg" loading="lazy" alt="" className="image-15" /></div>
              <div>
                <div className="text-block-5">Vestibulum sed est.</div>
                <div className="text-block-6">Nec amet.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-block-88">
          <div className="div-block-88 horizontal">
            <div className="div-block-92"><img src="images/Rectangle-1730.svg" loading="lazy" alt="" className="image-14 horizontal" /></div>
            <div>
              <div className="div-block-89">
                <div className="text-block-2 horizontal">Lorem ipsum</div>
                <div className="text-block-3 hz">Vestibulum sed est.</div>
              </div>
              <div className="text-block-4 hz">Access a massive pool of Design talent</div>
              <div className="div-block-90">
                <div className="div-block-91 hz"><img src="images/Ellipse-166.svg" loading="lazy" alt="" /></div>
                <div>
                  <div className="text-block-5 hz">Vestibulum sed est.</div>
                  <div className="text-block-6 hz">Nec amet.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-block-88 horizontal">
            <div className="div-block-92"><img src="images/Rectangle-1734.svg" loading="lazy" alt="" className="image-14 horizontal" /></div>
            <div>
              <div className="div-block-89">
                <div className="text-block-2 horizontal">Lorem ipsum</div>
                <div className="text-block-3 hz">Vestibulum sed est.</div>
              </div>
              <div className="text-block-4 hz">Access a massive pool of Design talent</div>
              <div className="div-block-90">
                <div className="div-block-91 hz"><img src="images/Ellipse-166.svg" loading="lazy" alt="" /></div>
                <div>
                  <div className="text-block-5 hz">Vestibulum sed est.</div>
                  <div className="text-block-6 hz">Nec amet.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-block-88 horizontal">
            <div className="div-block-92"><img src="images/Rectangle-1735.svg" loading="lazy" alt="" className="image-14 horizontal" /></div>
            <div>
              <div className="div-block-89">
                <div className="text-block-2 horizontal">Lorem ipsum</div>
                <div className="text-block-3 hz">Vestibulum sed est.</div>
              </div>
              <div className="text-block-4 hz">Access a massive pool of Design talent</div>
              <div className="div-block-90">
                <div className="div-block-91 hz"><img src="images/Ellipse-166.svg" loading="lazy" alt="" /></div>
                <div>
                  <div className="text-block-5 hz">Vestibulum sed est.</div>
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
              <div className="div-block-88"><img src="images/Rectangle-4404.svg" loading="lazy" alt="" className="image-14" />
                <div>
                  <div className="div-block-89">
                    <div className="text-block-2">Lorem ipsum</div>
                    <div className="text-block-3">Vestibulum sed est.</div>
                  </div>
                  <div className="text-block-4">Access a massive pool of Design talent</div>
                  <div className="div-block-90">
                    <div className="div-block-91"><img src="images/Ellipse-166.svg" loading="lazy" alt="" /></div>
                    <div>
                      <div className="text-block-5">Vestibulum sed est.</div>
                      <div className="text-block-6">Nec amet.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-_198018b5-2dd3-1cd2-6540-8871b9ec6ff2-84c34174">
            <div className="div-block-87">
              <div className="div-block-88"><img src="images/Rectangle-4404.svg" loading="lazy" alt="" className="image-14" />
                <div>
                  <div className="div-block-89">
                    <div className="text-block-2">Lorem ipsum</div>
                    <div className="text-block-3">Vestibulum sed est.</div>
                  </div>
                  <div className="text-block-4">Access a massive pool of Design talent</div>
                  <div className="div-block-90">
                    <div className="div-block-91"><img src="images/Ellipse-166.svg" loading="lazy" alt="" /></div>
                    <div>
                      <div className="text-block-5">Vestibulum sed est.</div>
                      <div className="text-block-6">Nec amet.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-_77f86cd7-94c7-3608-14bb-5030117a0ac4-84c34174">
            <div className="div-block-87">
              <div className="div-block-88"><img src="images/Rectangle-4404.svg" loading="lazy" alt="" className="image-14" />
                <div>
                  <div className="div-block-89">
                    <div className="text-block-2">Lorem ipsum</div>
                    <div className="text-block-3">Vestibulum sed est.</div>
                  </div>
                  <div className="text-block-4">Access a massive pool of Design talent</div>
                  <div className="div-block-90">
                    <div className="div-block-91"><img src="images/Ellipse-166.svg" loading="lazy" alt="" /></div>
                    <div>
                      <div className="text-block-5">Vestibulum sed est.</div>
                      <div className="text-block-6">Nec amet.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-_059d45d8-c3a1-5dbb-2bc0-b7cfe1554421-84c34174">
            <div className="div-block-87">
              <div className="div-block-88"><img src="images/Rectangle-4404.svg" loading="lazy" alt="" className="image-14" />
                <div>
                  <div className="div-block-89">
                    <div className="text-block-2">Lorem ipsum</div>
                    <div className="text-block-3">Vestibulum sed est.</div>
                  </div>
                  <div className="text-block-4">Access a massive pool of Design talent</div>
                  <div className="div-block-90">
                    <div className="div-block-91"><img src="images/Ellipse-166.svg" loading="lazy" alt="" /></div>
                    <div>
                      <div className="text-block-5">Vestibulum sed est.</div>
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
  <div className="footer wf-section">
    <div className="div-block-62">
      <div className="div-block-27">
        <div id="w-node-_7b5127df-921f-a556-6260-9b90ecbec509-84c34174" className="div-block-28"><img src="images/Neural-Leap_1.svg" loading="lazy" width={188} alt="" className="image-19" />
          <a href="#" className="link-block w-inline-block">
            <p className="paragraph-25">Access top 1% of global talent, eliminate the cost of hiring, and effortlessly scale the team to meet their needs.</p>
          </a>
        </div>
        <div id="w-node-_7b5127df-921f-a556-6260-9b90ecbec50e-84c34174" className="div-block-28">
          <h1 className="heading-11">Pages</h1>
          <a href="about-us.html" className="link-block w-inline-block">
            <p>About Us</p>
          </a>
          <a href="our-mission.html" className="link-block w-inline-block">
            <p>Our Mission</p>
          </a>
          <a href="schedule-a-demo.html" className="link-block w-inline-block">
            <p>Get In Touch</p>
          </a>
        </div>
        <div id="w-node-_7b5127df-921f-a556-6260-9b90ecbec51a-84c34174">
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
