import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from "react-use";
import Link from "next/link";

const AboutUs = ({ data }) => {
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
          <Link href="about-us"><a aria-current="page" className="nav-link w-nav-link w--current">About Us</a></Link>
          <Link href="our-mission"><a className="nav-link w-nav-link">Our Mission</a></Link>
        </nav>
      </div>
      <div className="div-block-2">
        <Link href="schedule-a-demo"><a className="button w-button">Book A Demo</a></Link>
      </div>
    </div>
  </div>
  <div className="wf-section">
    <div className="div-block-63">
      <div className="div-block-64">
        <div className="div-block-65">
          <h1 className="heading-15">About <span className="text-span-9">Us</span></h1>
        </div>
        <div className="div-block-66">
          <p className="paragraph-17">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus tempor scelerisque libero egestas tellus mattis. Massa, facilisi commodo sociis ipsum id tellus mauris. Hendrerit viverra lobortis non lorem maecenas sapien. Dui fringilla malesuada gravida est amet, volutpat. Proin sem dolor augue viverra iaculis. Dolor amet, est ac suspendisse suspendisse varius volutpat sollicitudin.</p>
        </div>
      </div>
    </div><img src="images/Frame-nav.svg" loading="lazy" alt="" className="image-7" />
  </div>
  <div className="section-7 wf-section">
    <div className="cover-div new">
      <div className="div-block-84">
        <div className="div-block-67 _50">
          <h1 className="heading-16">Enim neque velit sed luctus <span className="text-span-5">congue mattis.</span></h1>
          <p className="paragraph-18">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus tempor scelerisque libero egestas tellus mattis. Massa, facilisi commodo sociis ipsum id tellus mauris. Hendrerit viverra lobortis non lorem maecenas sapien. Dui fringilla malesuada gravida est amet, volutpat. Proin sem dolor augue viverra iaculis. Dolor amet, est ac suspendisse suspendisse varius volutpat sollicitudin.</p>
        </div>
        <div className="div-block-85"><img src="images/Group-1000001916.png" loading="lazy" srcSet="images/Group-1000001916-p-500.png 500w, images/Group-1000001916.png 569w" sizes="(max-width: 767px) 90vw, (max-width: 991px) 45vw, (max-width: 1919px) 46vw, 700px" alt="" className="image-13" /></div>
      </div>
    </div>
    <div className="cover-div new reverse">
      <div className="div-block-84 reverse">
        <div className="div-block-67 _50">
          <h1 className="heading-16">Enim neque velit sed luctus <span className="text-span-5">congue mattis.</span></h1>
          <p className="paragraph-18">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus tempor scelerisque libero egestas tellus mattis. Massa, facilisi commodo sociis ipsum id tellus mauris. Hendrerit viverra lobortis non lorem maecenas sapien. Dui fringilla malesuada gravida est amet, volutpat. Proin sem dolor augue viverra iaculis. Dolor amet, est ac suspendisse suspendisse varius volutpat sollicitudin.</p>
        </div>
        <div className="div-block-85"><img src="images/2-sec.png" loading="lazy" srcSet="images/2-sec-p-500.png 500w, images/2-sec-p-800.png 800w, images/2-sec.png 890w" sizes="(max-width: 767px) 90vw, (max-width: 991px) 42vw, (max-width: 1919px) 44vw, 700px" alt="" className="image-13" /></div>
      </div>
    </div>
    <div className="cover-div new">
      <div className="div-block-84">
        <div className="div-block-67 _50">
          <h1 className="heading-16">Enim neque velit sed luctus <span className="text-span-5">congue mattis.</span></h1>
          <p className="paragraph-18">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus tempor scelerisque libero egestas tellus mattis. Massa, facilisi commodo sociis ipsum id tellus mauris. Hendrerit viverra lobortis non lorem maecenas sapien. Dui fringilla malesuada gravida est amet, volutpat. Proin sem dolor augue viverra iaculis. Dolor amet, est ac suspendisse suspendisse varius volutpat sollicitudin.</p>
        </div>
        <div className="div-block-85"><img src="images/3sec.png" loading="lazy" srcSet="images/3sec-p-500.png 500w, images/3sec-p-800.png 800w, images/3sec.png 854w" sizes="(max-width: 767px) 90vw, (max-width: 991px) 45vw, (max-width: 1919px) 46vw, 700px" alt="" className="image-13" /></div>
      </div>
    </div>
    <div className="cover-div new reverse">
      <div className="div-block-84 reverse">
        <div className="div-block-67 _50">
          <h1 className="heading-16">Enim neque velit sed luctus <span className="text-span-5">congue mattis.</span></h1>
          <p className="paragraph-18">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus tempor scelerisque libero egestas tellus mattis. Massa, facilisi commodo sociis ipsum id tellus mauris. Hendrerit viverra lobortis non lorem maecenas sapien. Dui fringilla malesuada gravida est amet, volutpat. Proin sem dolor augue viverra iaculis. Dolor amet, est ac suspendisse suspendisse varius volutpat sollicitudin.</p>
        </div>
        <div className="div-block-85"><img src="images/4sec.png" loading="lazy" srcSet="images/4sec-p-500.png 500w, images/4sec-p-800.png 800w, images/4sec.png 890w" sizes="(max-width: 767px) 90vw, (max-width: 991px) 42vw, (max-width: 1919px) 44vw, 700px" alt="" className="image-13" /></div>
      </div>
    </div>
  </div>
  <div className="footer wf-section">
    <div className="div-block-62">
      <div className="div-block-27">
        <div id="w-node-ba3d8d30-50a5-7a64-faac-e9f0317afd15-35a4ce86" className="div-block-28"><img src="images/Neural-Leap_1.svg" loading="lazy" width={188} alt="" className="image-19" />
          <Link href="#"><a className="link-block w-inline-block">
            <p className="paragraph-25">Access top 1% of global talent, eliminate the cost of hiring, and effortlessly scale the team to meet their needs.</p>
          </a></Link>
        </div>
        <div id="w-node-ba3d8d30-50a5-7a64-faac-e9f0317afd1a-35a4ce86" className="div-block-28">
          <h1 className="heading-11">Pages</h1>
          <Link href="about-us"><a aria-current="page" className="link-block w-inline-block w--current">
            <p>About Us</p>
          </a></Link>
          <Link href="our-mission"><a className="link-block w-inline-block">
            <p>Our Mission</p>
          </a></Link>
          <Link href="schedule-a-demo"><a className="link-block w-inline-block">
            <p>Get In Touch</p>
          </a></Link>
        </div>
        <div id="w-node-ba3d8d30-50a5-7a64-faac-e9f0317afd26-35a4ce86">
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
    .readFileSync("public/content/about-us.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data,
    },
  };
};

export default AboutUs;
