//Main component
import React, { useState, useEffect, useMemo } from "react";
import Navi from "./Navi";
import SidebarMenu from "./Sides";
import Footer from "./Footer";
import ScrollProgressBar from "./ScrollProgressBar";
import { bucketList } from "../data/bucketList";

function Template({ darkMode, toggleMode }) {
    // Calculate counts directly from data
    const counts = useMemo(() => {
        const total = bucketList.length;
        const completed = bucketList.filter(item => item.completed).length;
        const active = total - completed;
        return { total, completed, active };
    }, []);

    // Scroll fade effect for hero section
    useEffect(() => {
        const handleScroll = () => {
            const heroTitle = document.querySelector('.hero-title');
            const heroSubtitle = document.querySelector('.hero-subtitle');

            if (heroTitle && heroSubtitle) {
                const scrollPosition = window.scrollY;
                const windowHeight = window.innerHeight;

                // Calculate opacity based on scroll position
                // Fades out completely by the time you scroll 70% of viewport height
                const opacity = Math.max(0, 1 - (scrollPosition / (windowHeight * 0.7)));

                // Add slight upward movement for polish
                const translateY = scrollPosition * 0.5;

                heroTitle.style.opacity = opacity;
                heroTitle.style.transform = `translateY(-${translateY}px)`;

                heroSubtitle.style.opacity = opacity;
                heroSubtitle.style.transform = `translateY(-${translateY}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <ScrollProgressBar darkMode={darkMode} />
            <Navi darkMode={darkMode} toggleMode={toggleMode} />
            <SidebarMenu />
            <div className="page-container">
                {/* Hero with background image */}
                <section className="hero-section">
                    <h1 className="hero-title">Welcome to My Journey: The Ultimate Quest</h1>
                    <p className="hero-subtitle">Exploring the world, one adventure at a time</p>

                </section>
            </div>
            <div className="bucket-intro">
                <div className="homepage-content">
                    <h3>Why a Bucket List?</h3>

                    <p>
                        I started writing this list back when I was feeling the kind of stress that comes from just observing life, not living it. Before I knew it, a simple list of "things to do" exploded into a constantly evolving document of goals.
                    </p>
                    <div className="story-image-homepage">
                        <img src="/IMG_945151.jpg" alt="Posing looking towards the waterfalls" className="hero-image-intro"
                            height="250px" width="100%" />
                    </div>
                    <p>
                        This is my living document of dreams, adventures, and experiences I want to collect throughout my lifetime.
                        Each item represents a commitment to living fully, exploring boldly, and creating memories that matter.
                    </p>
                    <p>
                        Crossing off a goal is a feeling like no other.
                        While I always strive to capture that moment with a picture,
                        sometimes the experience is too good to pause for the camera, and I simply choose to savor the moment instead.
                    </p>
                </div>
            </div>
            <section id="bucket-list">
                <h2>The Journey So Far..</h2>
                {/* COUNTER DISPLAY */}
                <div className="home-banner">
                    <div className="stat-item total">
                        <span className="count">{counts.total}</span>
                        <span className="label"> Total Goals</span>
                    </div>
                    <div className="counter-stats">
                        <div className="stat-item completed">
                            <span className="count">{counts.completed}</span>
                            <span className="label"> Completed</span>
                        </div>
                        <div className="stat-item active">
                            <span className="count">{counts.active}</span>
                            <span className="label"> Active</span>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{
                                width: `${counts.total > 0 ? (counts.completed / counts.total) * 100 : 0}%`
                            }}
                        ></div>
                    </div>
                    <div className="progress-text">
                        {counts.total > 0 ? Math.round((counts.completed / counts.total) * 100) : 0}% Completed
                    </div>
                </div>


                <ul id="list">
                    {bucketList.map((item) => (
                        <React.Fragment key={item.id}>
                            {item.isPhilosophy ? (
                                <li className="about-philosophy">
                                    {item.text}
                                    <blockquote>
                                        {item.quote}
                                    </blockquote>
                                </li>
                            ) : item.image ? (
                                <div className="img-container-square">
                                    <div className="img-details">
                                        <li className={item.completed ? "strikethrough" : ""}>
                                            {item.text}
                                        </li>
                                        <img src={item.image} alt={item.alt} />
                                        <p><mark>{item.caption}</mark></p>
                                    </div>
                                </div>
                            ) : item.spotifyEmbed ? (
                                <li className={item.completed ? "strikethrough" : ""}>
                                    {item.text}
                                    <blockquote className="spotify-block">
                                        <iframe
                                            data-testid="embed-iframe"
                                            style={{ borderRadius: "12px", transition: "all 0.5s ease-in-out" }}
                                            src={item.spotifyEmbed}
                                            width="100%"
                                            height="152"
                                            frameBorder="0"
                                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                            loading="lazy"
                                            title="Spotify Playlist"
                                            className="spotify-embed"
                                        ></iframe>
                                    </blockquote>
                                </li>
                            ) : (
                                <li className={item.completed ? "strikethrough" : ""}>
                                    {item.text}
                                </li>
                            )}
                        </React.Fragment>
                    ))}
                </ul>
            </section>
            <Footer />
        </>
    )
}
export default Template