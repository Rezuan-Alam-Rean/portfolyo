import React from 'react';

const Hero = () => {
    return (
        <div>
            <section
                className="lui-section lui-section-hero lui-gradient-top"
                id="started-section"
            >
                <div className="container">
                    {/* Hero Started */}
                    <div className="lui-started v-line v-line-left">
                        <div className="section hero-started">
                            <div
                                className="content scrolla-element-anim-1 scroll-animate"
                                data-animate="active"
                            >
                                <div className="titles">
                                    <div className="lui-subtitle">
                                        <span>
                                            {" "}
                                            Hello, <b>my name is</b>
                                        </span>
                                    </div>
                                    <h1
                                        className="title splitting-text-anim-1 scroll-animate"
                                        data-splitting="chars"
                                        data-animate="active"
                                    >
                                        <span>
                                            {/* <b>{about.name.split(' ')[0]}</b> {about.name.split(' ')[1]}{" "} */}
                                        </span>
                                    </h1>
                                    <div className="label lui-subtitle">
                                        {" "}
                                        {/* I am <strong>{about.title}</strong> */}
                                    </div>
                                </div>
                                <div className="description">
                                    <div>
                                        {/* <p>
                      From {about.address.split(',')[0].trim()}, {about.address.split(',')[1].trim()}.{" "}{about.subTitle}. {" "}
                      {about.description.split('.')[0]}.
                    </p> */}
                                    </div>
                                    <div className="social-links">
                                        {/* adding the social media links  */}

                                    </div>
                                </div>
                                <div className="bts">
                                    <a
                                        target="_blank"
                                        href="https://drive.google.com/"
                                        className="btn"
                                    >
                                        <span>Download CV</span>
                                    </a>
                                    <a href="#skills-section" className="btn-lnk">
                                        {" "}
                                        My Skills{" "}
                                    </a>
                                </div>
                            </div>
                            <div
                                className="slide scrolla-element-anim-1 scroll-animate"
                                data-animate="active"
                            >
                                {/* <img
                  _id={about.avatar._id}
                  public_id={about.avatar.public_id}
                  decoding="async"
                  src={about.avatar.url}
                  alt={`<b>${about.name.split(' ')[0]}</b> ${about.name.split(' ')[1]}`}
                /> */}
                                <span className="circle circle-1" />
                                <span
                                    className="circle img-1"
                                    style={{
                                        backgroundImage: "url(assets/images/pat-1.png)",
                                    }}
                                />
                                <span
                                    className="circle img-2"
                                    style={{
                                        backgroundImage: "url(assets/images/pat-2.png)",
                                    }}
                                />
                                <span
                                    className="circle img-3"
                                    style={{
                                        backgroundImage: "url(assets/images/pat-2.png)",
                                    }}
                                />
                                <div className="info-list">
                                    <ul>
                                        <li>
                                            <span className="num">
                                                {/* {about.exp_year} <strong>+</strong> */}
                                            </span>
                                            <span className="value">
                                                Years of <strong>Experience</strong>
                                            </span>
                                        </li>
                                        <li>
                                            {/* <span className="num">{about.some_total}</span> */}
                                            <span className="value">
                                                Completed <strong>Projects</strong>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="lui-bgtitle">
                            {/* <span>{about.title}</span> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;