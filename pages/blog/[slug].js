import React, { useEffect } from "react";
import Head from "next/head";
import Script from 'next/script'
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import serverSideTracking from '../../customFunctions/server-side-tracking'
import { useEffectOnce } from 'react-use';

const Blog = ({ htmlString, data }) => {

    useEffectOnce(() => {
        serverSideTracking(data.eventNameForTracking, window.location.href, data.eventIdForTracking);
    });

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
                <meta content={data.twitterDescription} property="twitter:description" />

                {/* Twitter Image */}
                <meta content={data.twitterImage} property="twitter:image" />

                <meta property="og:type" content="website" />
                <meta content="summary_large_image" name="twitter:card" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />

                {/* Favicon*/}
                <link href="images/favicon.png" rel="icon" type="image/png" />

                {/* Webclip */}
                <link href="images/webclip.png" rel="apple-touch-icon" />
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
                        <div className="search-bar-div">
                            <form action="/search" className="search-2 w-form">
                                <input
                                    type="search"
                                    className="search-input w-input"
                                    maxLength={256}
                                    name="query"
                                    placeholder="Search…"
                                    id="search"
                                    required
                                />
                                <input
                                    type="submit"
                                    defaultValue
                                    className="search-button-2 w-button"
                                />
                            </form>
                        </div>
                        <div>
                            <div>
                                <div className="text-block-4 hz">
                                    Access a massive pool of Design talent
                                </div>
                                <p className="paragraph-21">
                                    All the agility has been sucked out of agile projects
                                </p>
                                <div className="div-block-90">
                                    <div className="div-block-91 hz">
                                        <img src="images/Ellipse-166.svg" loading="lazy" alt="" />
                                    </div>
                                    <div>
                                        <div className="text-block-5 hz">Vestibulum sed est.</div>
                                        <div className="text-block-6 hz">Nec amet.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="div-block-96">
                            <a href="#" className="social-link w-inline-block">
                                <img src="images/twitter_1.svg" loading="lazy" alt="" />
                            </a>
                            <a href="#" className="social-link w-inline-block">
                                <img src="images/fb_1.svg" loading="lazy" alt="" />
                            </a>
                            <a href="#" className="social-link w-inline-block">
                                <img src="images/google_2.svg" loading="lazy" alt="" />
                            </a>
                        </div>
                        <div className="div-block-97">
                            <img
                                src="images/blog-imag.png"
                                loading="lazy"
                                sizes="(max-width: 1919px) 90vw, 1500px"
                                srcSet="images/blog-imag-p-500.png 500w, images/blog-imag-p-800.png 800w, images/blog-imag-p-1080.png 1080w, images/blog-imag.png 1134w"
                                alt=""
                                className="image-16"
                            />
                            <div className="div-block-98">
                                <h1 className="heading-24">
                                    Doing agile is not the same as being agile
                                </h1>
                                <p className="paragraph-22">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Tristique proin tristique gravida senectus interdum in. Nulla
                                    dictum in pharetra vestibulum. Placerat sed feugiat odio id
                                    aliquet quis magna ornare pharetra.
                                    <br />
                                    <br />
                                    Scelerisque vel, ac dignissim vitae at commodo in nam duis.
                                    Tristique aenean et cras purus ullamcorper tellus pretium
                                    etiam nullam. Dolor pharetra proin nec auctor vulputate id
                                    vulputate consequat. Pellentesque arcu tristique dignissim
                                    pulvinar pulvinar nullam metus, risus.
                                    <br />
                                    <br />
                                    Magna feugiat tristique leo, ipsum diam, condimentum. Duis
                                    elementum eu faucibus est enim sed convallis iaculis.
                                    <br />
                                    Orci cursus cras id aliquet eget augue. Maecenas nisl enim
                                    lobortis elementum enim eleifend fringilla semper. <br />
                                    <br />
                                    Vulputate egestas at nunc nunc viverra viverra maecenas. Purus
                                    accumsan nisl at metus, quis id posuere amet. Rutrum porttitor
                                    aliquam mauris quam gravida magna. Sed semper fames proin
                                    nunc, erat elementum. Sed pretium est donec in. Velit,
                                    venenatis fames sit malesuada eu.Commodo nullam aliquam
                                    ultrices pellentesque tortor mattis semper fringilla. Nibh
                                    nullam aliquet mauris, sagittis, blandit rutrum. Enim sed eu
                                    sed aliquam. Gravida urna nunc, sed quis in gravida ut odio
                                    potenti. Adipiscing ac sed suspendisse vel venenatis sed
                                    gravida suspendisse.
                                </p>
                            </div>
                            <div className="div-block-98">
                                <h1 className="heading-24">
                                    Doing agile is not the same as being agile
                                </h1>
                                <p className="paragraph-22">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Tristique proin tristique gravida senectus interdum in. Nulla
                                    dictum in pharetra vestibulum. Placerat sed feugiat odio id
                                    aliquet quis magna ornare pharetra.
                                    <br />
                                    <br />
                                    Scelerisque vel, ac dignissim vitae at commodo in nam duis.
                                    Tristique aenean et cras purus ullamcorper tellus pretium
                                    etiam nullam. Dolor pharetra proin nec auctor vulputate id
                                    vulputate consequat. Pellentesque arcu tristique dignissim
                                    pulvinar pulvinar nullam metus, risus.
                                    <br />
                                    <br />
                                    Magna feugiat tristique leo, ipsum diam, condimentum. Duis
                                    elementum eu faucibus est enim sed convallis iaculis.
                                    <br />
                                    Orci cursus cras id aliquet eget augue. Maecenas nisl enim
                                    lobortis elementum enim eleifend fringilla semper. <br />
                                    <br />
                                    Vulputate egestas at nunc nunc viverra viverra maecenas. Purus
                                    accumsan nisl at metus, quis id posuere amet. Rutrum porttitor
                                    aliquam mauris quam gravida magna. Sed semper fames proin
                                    nunc, erat elementum. Sed pretium est donec in. Velit,
                                    venenatis fames sit malesuada eu.Commodo nullam aliquam
                                    ultrices pellentesque tortor mattis semper fringilla. Nibh
                                    nullam aliquet mauris, sagittis, blandit rutrum. Enim sed eu
                                    sed aliquam. Gravida urna nunc, sed quis in gravida ut odio
                                    potenti. Adipiscing ac sed suspendisse vel venenatis sed
                                    gravida suspendisse.
                                </p>
                            </div>
                            <div className="div-block-98">
                                <h1 className="heading-24">
                                    Doing agile is not the same as being agile
                                </h1>
                                <p className="paragraph-22">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Tristique proin tristique gravida senectus interdum in. Nulla
                                    dictum in pharetra vestibulum. Placerat sed feugiat odio id
                                    aliquet quis magna ornare pharetra.
                                    <br />
                                    Scelerisque vel, ac dignissim vitae at commodo in nam duis.
                                    Tristique aenean et cras purus ullamcorper tellus pretium
                                    etiam nullam. Dolor pharetra proin nec auctor vulputate id
                                    vulputate consequat. Pellentesque arcu tristique dignissim
                                    pulvinar pulvinar nullam metus, risus.
                                    <br />
                                    <br />
                                    Magna feugiat tristique leo, ipsum diam, condimentum. Duis
                                    elementum eu faucibus est enim sed convallis iaculis.
                                    <br />
                                    Orci cursus cras id aliquet eget augue. Maecenas nisl enim
                                    lobortis elementum enim eleifend fringilla semper. <br />
                                    <br />
                                    Vulputate egestas at nunc nunc viverra viverra maecenas. Purus
                                    accumsan nisl at metus, quis id posuere amet. Rutrum porttitor
                                    aliquam mauris quam gravida magna. Sed semper fames proin
                                    nunc, erat elementum. Sed pretium est donec in. Velit,
                                    venenatis fames sit malesuada eu.Commodo nullam aliquam
                                    ultrices pellentesque tortor mattis semper fringilla. Nibh
                                    nullam aliquet mauris, sagittis, blandit rutrum. Enim sed eu
                                    sed aliquam. Gravida urna nunc, sed quis in gravida ut odio
                                    potenti. Adipiscing ac sed suspendisse vel venenatis sed
                                    gravida suspendisse.
                                </p>
                            </div>
                            <div className="social-icons-blog">
                                <div className="div-block-96 _2">
                                    <a href="#" className="social-link _2 w-inline-block">
                                        <img
                                            src="images/fa-regular_comment.svg"
                                            loading="lazy"
                                            alt=""
                                        />
                                        <p className="paragraph-23">Comment</p>
                                    </a>
                                    <a href="#" className="social-link _2 w-inline-block">
                                        <img
                                            src="images/ant-design_like-outlined.svg"
                                            loading="lazy"
                                            alt=""
                                        />
                                        <p className="paragraph-23">Like</p>
                                    </a>
                                </div>
                                <div className="div-block-96">
                                    <a href="#" className="social-link w-inline-block">
                                        <img src="images/twitter_1.svg" loading="lazy" alt="" />
                                    </a>
                                    <a href="#" className="social-link w-inline-block">
                                        <img src="images/fb_1.svg" loading="lazy" alt="" />
                                    </a>
                                    <a href="#" className="social-link w-inline-block">
                                        <img src="images/google_2.svg" loading="lazy" alt="" />
                                    </a>
                                </div>
                                <div className="div-block-96 _3" />
                            </div>
                        </div>
                        <div className="div-block-94">
                            <div>
                                <div className="div-block-87 ind">
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
                    <div className="line-break" />
                    <div className="div-block-99">
                        <div className="div-block-101">
                            <div className="div-block-98">
                                <h1 className="heading-24">
                                    Doing agile is not the same as being agile
                                </h1>
                                <p className="paragraph-22 _2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Tristique proin tristique gravida senectus interdum in. Nulla
                                    dictum in pharetra vestibulum. Placerat sed feugiat odio id
                                    aliquet quis magna ornare pharetra.
                                </p>
                                <a href="#" className="button-3 w-button">
                                    Read More
                                </a>
                            </div>
                            <div className="div-block-100">
                                <div
                                    data-delay={4000}
                                    data-animation="slide"
                                    className="slider w-slider"
                                    data-autoplay="false"
                                    data-easing="ease"
                                    data-hide-arrows="false"
                                    data-disable-swipe="false"
                                    data-autoplay-limit={0}
                                    data-nav-spacing={3}
                                    data-duration={500}
                                    data-infinite="true"
                                >
                                    <div className="mask w-slider-mask">
                                        <div className="slide w-slide">
                                            <div className="slider-blog">
                                                <div className="div-block-87 ind">
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
                                                            <div className="text-block-4 new">
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
                                                                    <div className="text-block-5 hz">
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
                                        <div className="slide w-slide">
                                            <div className="slider-blog">
                                                <div className="div-block-87 ind">
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
                                                            <div className="text-block-4 new">
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
                                                                    <div className="text-block-5 hz">
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
                                        <div className="slide w-slide">
                                            <div className="slider-blog">
                                                <div className="div-block-87 ind">
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
                                                            <div className="text-block-4 new">
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
                                                                    <div className="text-block-5 hz">
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
                                        <div className="slide w-slide">
                                            <div className="slider-blog">
                                                <div className="div-block-87 ind">
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
                                                            <div className="text-block-4 new">
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
                                                                    <div className="text-block-5 hz">
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
                                        <div className="slide w-slide">
                                            <div className="slider-blog">
                                                <div className="div-block-87 ind">
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
                                                            <div className="text-block-4 new">
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
                                                                    <div className="text-block-5 hz">
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
                                        <div className="slide w-slide">
                                            <div className="slider-blog">
                                                <div className="div-block-87 ind">
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
                                                            <div className="text-block-4 new">
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
                                                                    <div className="text-block-5 hz">
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
                                        <div className="slide w-slide">
                                            <div className="slider-blog">
                                                <div className="div-block-87 ind">
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
                                                            <div className="text-block-4 new">
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
                                                                    <div className="text-block-5 hz">
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
                                    <div className="left-arrow w-slider-arrow-left">
                                        <img
                                            src="images/Vector-left.svg"
                                            loading="lazy"
                                            alt=""
                                            className="image-17"
                                        />
                                    </div>
                                    <div className="right-arrow w-slider-arrow-right">
                                        <img
                                            src="images/Vector-right.svg"
                                            loading="lazy"
                                            alt=""
                                            className="image-17"
                                        />
                                    </div>
                                    <div className="display-none w-slider-nav w-round" />
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
            <Script id="script-1" src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=605c57757b3ae676ffca1b7b" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></Script>
            <Script id="script-2" src="js/webflow.js" type="text/javascript"></Script>
            {/* [if lte IE 9]><Script id="script-3" src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></Script><![endif] */}
        </div>
    );
};

export const getStaticPaths = async () => {
    const files = fs.readdirSync("public/posts");
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(".md", "")
        }
    }));

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMetadata = fs
        .readFileSync(path.join("public/posts", slug + ".md"))
        .toString();

    const parsedMarkdown = matter(markdownWithMetadata);

    const htmlString = marked(parsedMarkdown.content);

    return {
        props: {
            htmlString,
            data: parsedMarkdown.data
        }
    };
};

export default Blog;