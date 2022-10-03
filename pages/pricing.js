import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from "react-use";
import Link from "next/link";

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
      <div className="body-2">
  <div data-animation="default" data-collapse="medium" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="navbar desk _2 w-nav">
    <div className="contain-div">
      <div className="div-block desktop">
        <Link href="#"><a className="brand w-nav-brand"><img src="images/Neural-Leap.svg" loading="lazy" alt="" /></a></Link>
        <nav role="navigation" className="w-nav-menu">
          <Link href="/"><a className="nav-link w-nav-link">Home</a></Link>
          <Link href="pricing"><a  aria-current="page" className="nav-link w-nav-link w--current">Pricing</a></Link>
          <Link href="about-us"><a  className="nav-link w-nav-link">About Us</a></Link>
          <Link href="our-mission"><a  className="nav-link w-nav-link">Our Mission</a></Link>
        </nav>
      </div>
      <div className="div-block-2">
        <Link href="schedule-a-demo"><a  className="button w-button">Book A Demo</a></Link>
      </div>
    </div>
  </div>
  <div className="section-12 wf-section">
    <div className="div-block-63">
      <div className="div-block-64">
        <div className="div-block-65">
          <h1 className="heading-15">Pricing &amp; Plans</h1>
        </div>
        <div className="div-block-66">
          <p className="paragraph-17">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus tempor scelerisque libero egestas tellus mattis. Massa, facilisi commodo sociis ipsum id tellus mauris.</p>
          <form action="/search" className="search-3 w-form"><input type="search" className="search-input-2 w-input" maxLength={256} name="query" placeholder="Search" id="search" required /><input type="submit" defaultValue="Search" className="search-button-3 w-button" /></form>
          <div className="text-block-12">POWERED BY</div>
        </div>
        <div className="div-block-5"><img src="images/sap.svg" loading="lazy" alt="" className="hero-logo _1" /><img src="images/amz.svg" loading="lazy" alt="" className="hero-logo" /><img src="images/oracle.svg" loading="lazy" alt="" className="hero-logo" /><img src="images/google.svg" loading="lazy" alt="" className="hero-logo" /><img src="images/meta.svg" loading="lazy" alt="" className="hero-logo" /></div>
      </div>
    </div><img src="images/Frame-nav.svg" loading="lazy" alt="" className="image-7" />
  </div>
  <div className="section-7 wf-section">
    <div className="cover-div _2">
      <div className="div-block-68">
        <div className="div-block-69">
          <div id="w-node-d9cfbac8-c5e2-26d0-3bfe-98c9b9bc9132-b43d32f7" className="div-block-70"><img src="images/Logo.svg" loading="lazy" alt="" className="image-20" />
            <div className="text-block-11">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className="rich-text-block w-richtext">
              <ul role="list">
                <li>Lorem ipsum dolor sit amet, consectetur </li>
                <li>Lorem ipsum dolor sit amet, consectetur </li>
                <li>Lorem ipsum dolor sit amet, consectetur </li>
                <li>Lorem ipsum dolor sit amet, consectetur </li>
                <li>Lorem ipsum dolor sit amet, consectetur </li>
                <li>Lorem ipsum dolor sit amet, consectetur </li>
              </ul>
              <p>‍</p>
            </div>
          </div>
          <div id="w-node-_7c3549ee-9e96-6b29-339b-a6518aa3cd34-b43d32f7" className="div-block-70"><img src="images/Logo-2.svg" loading="lazy" alt="" className="image-20" />
            <div className="text-block-11">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className="rich-text-block w-richtext">
              <ul role="list">
                <li>Lorem ipsum dolor sit amet, consectetur </li>
                <li>Lorem ipsum dolor sit amet, consectetur </li>
                <li>Lorem ipsum dolor sit amet, consectetur </li>
                <li>Lorem ipsum dolor sit amet, consectetur &nbsp;</li>
                <li>Lorem ipsum dolor sit amet, consectetur </li>
                <li>Lorem ipsum dolor sit amet, consectetur </li>
              </ul>
              <p>‍</p>
            </div>
          </div>
          <div id="w-node-e2fd7733-b139-27e3-78a9-222e07da85ee-b43d32f7" className="div-block-70"><img src="images/Logo-1.svg" loading="lazy" alt="" className="image-20" />
            <div className="text-block-11">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className="rich-text-block w-richtext">
              <ul role="list">
                <li>Lorem ipsum dolor sit amet, consectetur </li>
                <li>Lorem ipsum dolor sit amet, consectetur </li>
                <li>Lorem ipsum dolor sit amet, consectetur </li>
                <li>Lorem ipsum dolor sit amet, consectetur </li>
                <li>Lorem ipsum dolor sit amet, consectetur </li>
                <li>Lorem ipsum dolor sit amet, consectetur </li>
              </ul>
              <p>‍</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section-11 wf-section">
    <div className="div-block-434">
      <div className="div-block-435-copy">
        <div className="text-block-8">Enim neque velit sed luctus <span className="text-span-11">congue mattis.</span></div>
        <div className="text-block-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus tempor scelerisque libero egestas tellus mattis. Massa, facilisi commodo sociis ipsum id tellus mauris. Hendrerit viverra lobortis non lorem maecenas sapien. Dui fringilla malesuada gravida est amet, volutpat. Proin sem dolor augue viverra iaculis. Dolor amet, est ac suspendisse suspendisse varius volutpat sollicitudin.</div>
      </div>
      <div className="div-block-435">
        <div id="w-node-_272a2e5f-fd7c-2780-f97d-cee950ce7715-b43d32f7" className="div-block-70 _2">
          <h1 className="heading-18-copy">123+</h1>
          <div>Lorem ipsum dolor sit amet,</div>
        </div>
        <div id="w-node-_6956e88b-020d-d7c2-7225-ad8c090b2c4e-b43d32f7" className="div-block-70 _2">
          <h1 className="heading-18-copy">123+</h1>
          <div>Lorem ipsum dolor sit amet,</div>
        </div>
        <div id="w-node-e3b35cf6-3677-987c-3fe2-63a080926e35-b43d32f7" className="div-block-70 _2">
          <h1 className="heading-18-copy">123+</h1>
          <div>Lorem ipsum dolor sit amet,</div>
        </div>
        <div id="w-node-_5e894b3e-3b78-c3bc-b98c-e052696d04e4-b43d32f7" className="div-block-70 _2">
          <h1 className="heading-18-copy">123+</h1>
          <div>Lorem ipsum dolor sit amet,</div>
        </div>
        <div id="w-node-ae00795e-6c40-a9a9-c1a7-e1357f481857-b43d32f7" className="div-block-70 _2">
          <h1 className="heading-18-copy">123+</h1>
          <div>Lorem ipsum dolor sit amet,</div>
        </div>
        <div id="w-node-_21572c0b-001a-491c-1765-aafe96bceaf7-b43d32f7" className="div-block-70 _2">
          <h1 className="heading-18-copy">123+</h1>
          <div>Lorem ipsum dolor sit amet,</div>
        </div>
      </div>
    </div>
  </div>
  <div className="section-6 pricing wf-section">
    <div className="div-block-60">
      <div className="div-block-22">
        <h1 className="heading-9">Testimonials</h1><img src="images/ibm.svg" loading="lazy" alt="" className="image-3" />
        <p className="paragraph-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur justo, vitae potenti lorem accumsan. Consequat justo cursus urna felis.</p>
        <div className="div-block-21"><img src="images/avatar-client.svg" loading="lazy" alt="" />
          <div className="div-block-23">
            <p className="paragraph-7">Organize across</p>
            <p className="paragraph-7">Ui designer</p>
          </div>
        </div>
        <Link href="#"><a className="button-2 w-button">More Testimonials</a></Link>
      </div>
    </div>
    <div className="div-block-61">
      <div className="div-block-24">
        <div className="div-block-25"><img src="images/lastspiral.svg" loading="lazy" alt="" className="image-4" /></div>
        <div className="div-block-26">
          <h1 className="heading-10">The #1 <span className="text-span-3">AI-Engineering-As-A-Service</span> Subscription</h1>
          <p className="paragraph-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus orci, diam amet pulvinar ligula adipiscing pharetra dui tincidunt. Cursus fusce sed eget semper feugiat facilisi in adipiscing vitae. Neque ridiculus.</p>
        </div>
      </div>
    </div><img src="images/dot.svg" loading="lazy" alt="" className="image-5" />
  </div>
  <div className="footer white wf-section">
    <div className="div-block-62">
      <div className="div-block-27">
        <div id="w-node-_83490565-746c-920b-169f-7bc13049b789-b43d32f7" className="div-block-28"><img src="images/Neural-Leap_1.svg" loading="lazy" width={188} alt="" className="image-19" />
          <Link href="#"><a className="link-block w-inline-block">
            <p className="paragraph-25 black">Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </a></Link>
          <div className="div-block-108">
            <Link href="#"><a className="link-block-2 w-inline-block"><img src="images/ant-design_instagram-filled.svg" loading="lazy" alt="" /></a></Link>
            <Link href="#"><a className="link-block-2 w-inline-block"><img src="images/brandico_twitter-bird.svg" loading="lazy" alt="" /></a></Link>
            <Link href="#"><a className="link-block-2 w-inline-block"><img src="images/bxl_facebook.svg" loading="lazy" alt="" /></a></Link>
          </div>
        </div>
        <div id="w-node-_83490565-746c-920b-169f-7bc13049b795-b43d32f7" className="div-block-106">
          <div className="div-block-109">
            <div className="text-block-7">Links</div>
            <div className="div-block-110">
              <Link href="#"><a className="link-2">Overons</a></Link>
              <Link href="#"><a className="link-2">Social Media</a></Link>
              <Link href="#"><a className="link-2">Counters</a></Link>
              <Link href="#"><a className="link-2">Contact</a></Link>
            </div>
          </div>
          <div className="div-block-109">
            <div className="text-block-7">Company</div>
            <div className="div-block-110">
              <Link href="#"><a className="link-2">Terms &amp; Conditions</a></Link>
              <Link href="#"><a className="link-2">Privacy Policy</a></Link>
              <Link href="#"><a className="link-2">Contact</a></Link>
            </div>
          </div>
          <div className="div-block-109">
            <div className="text-block-7">Get in touch</div>
            <div className="div-block-110">
              <Link href="#"><a className="link-2">Crechterwoord K12 182 DK Alknjkcb</a></Link>
              <Link href="#"><a className="link-2">085-132567</a></Link>
              <Link href="#"><a className="link-2">info@payme.net</a></Link>
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
