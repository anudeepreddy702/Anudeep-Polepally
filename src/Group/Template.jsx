//Main component

import React, { useState, useEffect } from "react";
import Navi from "./Navi";
import SidebarMenu from "./Sides";
import Footer from "./Footer";

function Template({ darkMode, toggleMode }) {
    const [counts, setCounts] = useState({
        completed: 0,
        active: 0,
        total: 0
    });

    // Count strikethrough items from your existing JSX
    useEffect(() => {
        // This runs after component mounts and updates
        const countItems = () => {
            // Count all li elements
            const allItems = document.querySelectorAll('#list li');
            const completedItems = document.querySelectorAll('#list li.strikethrough');

            const total = allItems.length;
            const completed = completedItems.length;
            const active = total - completed;

            setCounts({
                completed,
                active,
                total
            });
        };

        const timer = setTimeout(countItems, 0);
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
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
                    <li>Attend a masterclass on photography and editing.</li>
                    <li>Visit London, United Kingdom.</li>
                    <li>Drive a muscle car in the U.S.</li>
                    <li>Drive an ATV in the dessert.</li>
                    <li className="strikethrough">Own a collectible watch.</li>
                    <li>Travel an unknown distance without navigation.</li>
                    <li>Try Belgian waffles in Belgium.</li>
                    <li>Reconnect with an old school friend.</li>
                    <li>Explore India.</li>
                    <div className="img-container-square">
                        <li className="strikethrough">Pose like a model for a brand.</li>
                        <div className="img-details">
                            <img src="/DSC_0311 Edited.jpg" alt="Posing listening to music on skull candy earphones" />
                            <p><mark>Tried to pose while listening to music.</mark></p>
                        </div>
                    </div>
                    <li>Run a Marathon.</li>
                    <li>Attend a Martin Garrix live concert.</li>
                    <li>Go to Amsterdam, Netherlands.</li>
                    <li className="strikethrough">Help a friend achieve one of their dreams.</li>
                    <li>Meet your favorite artist backstage.</li>
                    <li>Take your sibling on a surprise trip.</li>
                    <li>Attend a chocolate-making workshop in Belgium.</li>
                    <li className="strikethrough">Visit a hidden waterfall in your state.</li>
                    <li>Go to Ultra Music Festival in Miami.</li>
                    <li>Spend a silent day reflecting on your goals.</li>
                    <li className="strikethrough">Take a solo trip abroad.</li>
                    <li>Trek to Valley of Flowers, Uttarakhand.</li>
                    <li>Visit Niagara Falls, NY, United States.</li>
                    <div className="img-container-square">
                        <li>Attend an F1 Race.</li>
                        <div className="img-details">
                            <img src="/2025-f1-wallpapers-2-2.jpg" alt="Lando_Norris F1_Car_2025" />
                            <p><mark>Lando Norris F1 Car 2025 - my dream team I support.</mark></p>
                        </div>
                    </div>
                    <li>Run my own business.</li>
                    <li>Visit Las Vegas, NV, United States.</li>
                    <li>Go Camping in my own SUV.</li>
                    <li className="strikethrough">Say “no” to something that doesn’t feel right.</li>
                    <li>See Grand Canyon, AZ, United States.</li>
                    <li>Visit Hawaii, HI, United States.</li>
                    <li>Attend a Tomorrowland festival.</li>
                    <li>Plant a tree</li>
                    <li className="strikethrough">Spend a full day without social media.</li>
                    <li>Go wine tasting</li>
                    <li>Drive a bus</li>
                    <li className="strikethrough">Make my own icecream.</li>
                    <li>Compliment a stranger genuinely.</li>
                    <li>Visit Alaska, AK, United States.</li>
                    <div className="img-container-square">
                        <li className="strikethrough">Visit the Statue of Liberty, NY, United States.</li>
                        <div className="img-details">
                            <img src="/44072.jpg" alt="Statue of liFberty" height="250px" width="100%" />
                            <p><mark>That's me, the guy in the Finisher Winter Hat, clicking pictures!</mark></p>
                        </div>
                    </div>
                    <li>Visit Yellowstone National Park, United States.</li>
                    <li>Visit the Maldives.</li>
                    <li>Visit all 50 US states (7  done).</li>
                    <li>Capture a time-lapse of a city from dawn to dusk.</li>
                    <li>Learn a new language and talk fluently with a native person.</li>
                    <li>Buy a car.</li>
                    <li>Create a cinematic travel short film from drone footage.</li>
                    <li>Attend an anonymous wedding in India.</li>
                    <li>Visit Ferrari World, Abu Dhabi.</li>
                    <li>Travel to Canada.</li>
                    <li>Learn swimming.</li>
                    <li>Fly in a Helicopter.</li>
                    <li>Build a farmhouse with plantations and a Swimming Pool.</li>
                    <div className="img-container-square">
                        <li className="strikethrough">Visit Times Square, NY, United States.</li>
                        <div className="img-details">
                            <img src="/44150_times_square.jpg" alt="Times Square at Night" height="250px" width="100%" />
                            <p><mark>Yeah, that's me in the jacket. I witnessed Times Square.</mark></p>
                        </div>
                    </div>
                    <li className="strikethrough">Write a letter to your future self.</li>
                    <li>Meet old friends whom I had a fight with and apologize.</li>
                    <li>Make a calendar with my own pics & achievements.</li>
                    <li className="strikethrough">Inspire someone to start their own bucket list.</li>
                    <li>Visit Andaman & Nicobar Islands in India and explore the coral reefs.</li>
                    <li>Go off-roading.</li>
                    <li>Visit Goa beaches, India.</li>
                    <li>Restore a bike to its old glory.</li>
                    <li>Buy a property on my own.</li>
                    <li className="strikethrough">Visit Ramappa Temple, UNESCO World Heritage Site, India.</li>
                    <li>Climb to Tirumala Tirupati Temple, Andhra Pradesh, India.</li>
                    <li>Learn to speak Spanish fluently.</li>
                    <div className="img-container-square">
                        <li className="strikethrough">Experience Sensitive hydraulic lever Operations of Excavator.</li>
                        <div className="img-details">
                            <img src="/FB_IMG_1494518369546.jpg" alt="Excavator Driving" height="250px" width="100%" />
                            <p><mark>pose after driving, exhausted! (vintage edit).</mark></p>
                        </div>
                    </div>
                    <li>Witness the Taj Mahal at sunrise.</li>
                    <li>Explore a ghost town.</li>
                    <li className="strikethrough">Make a handmade gift.</li>
                    <li>Visit Thailand.</li>
                    <li>Achieve my ideal weight according to BMI</li>
                    <li>Learn to do a Wheelie on a bike.</li>
                    <li>Walk through the old Delhi lanes of Chandni Chowk, India.</li>
                    <li className="about-philosophy">
                        Visit Dhanushkodi, Tamilnadu.
                        <blockquote>
                            “The last road of India isn’t just a destination, it’s a journey to infinity.”
                        </blockquote>
                    </li>
                    <li>Visit the Gateway of India.</li>
                    <li className="strikethrough">Try street food in Delhi, India.</li>
                    <li>Own a second property of land on my own.</li>
                    <div className="img-container-square">
                        <li className="strikethrough">Learn to play guitar.</li>
                        <img src="/IMG-20200114-WA0019.jpg" alt="Guitar poster style pose" height="250px" width="100%" />
                        <div className="img-details">
                            <p><mark>Guiter Poster - old poster style picture after learing some lessons.</mark></p>
                        </div>
                    </div>
                    <li>Visit Lakshadweep Islands, India.</li>
                    <li className="strikethrough">Take a long walk listening music.</li>
                    <li>Buy a drone and learn how to fly.</li>
                    <li>Learn and try snow skiing on real mountain slopes.</li>
                    <li>Retire early and live off investments.</li>
                    <li className="strikethrough">Watch fireworks from a rooftop.</li>
                    <li>Surprise someone with flowers.</li>
                    <li>Attend a traditional Indian wedding in a different state.</li>
                    <li>Visit a lighthouse at night</li>
                    <li>Stay in a cozy Airbnb for one night.</li>
                    <li>Walk through the foggy streets early in the morning.</li>
                    <li>Make a vision board of my life inspired by movies.</li>
                    <li className="strikethrough">Make a Greeting Card Handmade.</li>
                    <li>Visit Yosemite National Park, United states.</li>
                    <li>Travel across the Golden Gate Bridge, San Francisco, United States.</li>
                    <li>Make a DIY scrapbook.</li>
                    <li className="strikethrough">Try to capture professional landscape photos.</li>
                    <div className="img-container-square">
                        <img src="/45817.jpeg" alt="Mountains fall colours photo" height="250px" width="100%" />
                        <div className="img-details">
                            <p><mark>Mountains with fall colors - Stowe Mountain Resort, Stowe, VT 05672.</mark></p>
                        </div>
                    </div>
                    <li>Visit the Charminar in Hyderabad, Telangana, India.</li>
                    <li>Visit Golden Temple, Amritsar, India.</li>
                    <li>Visit a new city solo and talk to a stranger.</li>
                    <li className="strikethrough">Visit a nearby waterfall or lake.</li>
                    <li>Attend a workshop or webinar.</li>
                    <li>Create my own film script from all the films I’ve seen.</li>
                    <li>Trip to a country for 30 days.</li>
                    <li className="strikethrough">Walk in rain and listen to rain sounds.</li>
                    <li>Try digital art or doodling.</li>
                    <li>Stay in a forest for one night alone.</li>
                    <li>Go to a movie theatre alone and enjoy watching a movie.</li>
                    <li>Have a candlelight dinner.</li>
                    <li>Brew my own beer or cider.</li>
                    <div className="img-container-square">
                        <li className="strikethrough">Hike Mount Washington, New Hampshire, USA.</li>
                        <img src="/47354.jpeg" alt="Mount Washington photo" height="250px" width="100%" />
                        <div className="img-details">
                            <p><mark>View from top of Mount Washington, NH - Live Free or Die.</mark></p>
                        </div>
                    </div>
                    <li>Learn calligraphy or hand lettering and design a quote poster.</li>
                    <li>Explore the tea gardens of Darjeeling, West Bengal.</li>
                    <li>Watch sunrise and sunset on the same day at two coasts.</li>
                    <li>Visit Sri Lanka.</li>
                    <li className="strikethrough">Be a mentor to a young person outside of a professional setting.</li>
                    <li>Buy a suit that is custom-tailored for me.</li>
                    <li>Own rental properties in multiple cities.</li>
                    <li>Host a dinner for 10 close friends.</li>
                    <li>Witness the sunrise at Kanyakumari, India.</li>
                    <li>Get married.</li>
                    <li>Plant 100 trees in your lifetime.</li>
                    <div className="img-container-square">
                        <li className="strikethrough">Explore Singareni Collieries, Telangana, India.</li>
                        <img src="/IMG-20200216-WA0017.jpg" alt="Me and My friends looking the mining sites" height="250px" width="100%" />
                        <div className="img-details">
                            <p><mark>My friends and I are looking at the mining sites.</mark></p>
                        </div>
                    </div>
                    <li>Visit Nallamala Forest, Telangana, India.</li>
                    <li className="strikethrough">Try Bamboo Chicken at Araku Valley, Andhra Pradesh, India.</li>
                    <li>Watch a live cricket match in a Stadium.</li>
                    <li>Camp under the stars in Ladakh, India.</li>
                    <li>Witness the cherry blossom festival in Japan.</li>
                    <li>Visit Mount Rushmore National Memorial, SD, United States.</li>
                    <li>Drive a tractor.</li>
                    <li className="strikethrough">Trek to Pandavula Gutta caves, Telangana, India.</li>
                    <li>Try and learn Skateboarding.</li>
                    <li>Explore the Grand Palace, Bangkok.</li>
                    <li>Explore mountain roads of Colorado, USA.</li>
                    <li>Explore wildlife sanctuaries in Madhya Pradesh, India.</li>
                    <li className="strikethrough">Try chicken shawarma.</li>
                    <li>Attend Bonalu festival in Telangana, India.</li>
                    <li>Relax on Bali beaches, Indonesia.</li>
                    <div className="img-container-square">
                        <li className="strikethrough">Watch the rain from a beach or mountain.</li>
                        <img src="/IMG_3975.jpg" alt="Rain and beach picture" height="250px" width="100%" />
                        <div className="img-details">
                            <p><mark>I witnessed the rain from a beach, it was phenomenal.</mark></p>
                        </div>
                    </div>
                    <li className="strikethrough">Learn coding and build a personal website.</li>
                    <li>Visit Marina Bay Sands SkyPark, Singapore.</li>
                    <li>Explore Jaipur’s Pink City, India.</li>
                    <li>Take a houseboat ride in Alleppey, Kerala, India.</li>
                    <li>Visit the IT capital of India, Bengaluru,India.</li>
                    <li className="strikethrough">Visit the Thousand Pillar Temple, Telangana, India.</li>
                    <li>Visit the Lepakshi temple in Andhra Pradesh, India.</li>
                    <li>Drive a Tesla.</li>
                    <li>Stay in a 5-star hotel.</li>
                    <li className="strikethrough">Drink palm water.</li>
                    <li>Skydiving over Dubai, UAE.</li>
                    <li>Ride the world’s fastest roller coaster in Abu Dhabi, UAE.</li>
                    <li className="strikethrough">Enjoy Hyderabadi biryani at paradise hotel.</li>
                    <li>Develop a private party hub on one of the properties I own.</li>
                    <li>Own my own bus.</li>
                    <li>Go dessert safari in Jaisalmer, India.</li>
                    <div className="img-container-square">
                        <li className="strikethrough">Try Octopus.</li>
                        <img src="/IMG_3492_copy.jpg" alt="Eating octopus picture" height="250px" width="100%" />
                        <div className="img-details">
                            <p><mark>I cannot hold it but I still tried it with chopsticks.</mark></p>
                        </div>
                    </div>
                    <li>Climb Mount Fuji, Japan.</li>
                    <li>Learn to bake bread.</li>
                    <li>Explore the ruins of Hampi, Karnataka.</li>
                    <li>Fly business class.</li>
                    <li>Visit the Pyramids of Giza, Egypt.</li>
                    <li className="strikethrough">Visit Chilkur Balaji Temple, Hyderabad, India.</li>
                    <li>Visit Sabarimala Temple, Kerala, India.</li>
                    <li>Go off-roading in Rajasthan dessert.</li>
                    <li>Have a whiskey collection.</li>
                    <li>Go on a cruise.</li>
                    <li>Camp under the Northern Lights in Iceland.</li>
                    <li>Learn to make jalebi in a traditional Indian sweet shop.</li>
                    <li className="strikethrough">
                        Make a playlist that represents your mood or year.
                        <blockquote className="spotify-block">
                            <iframe
                                data-testid="embed-iframe"
                                style={{ borderRadius: "12px", transition: "all 0.5s ease-in-out" }}
                                src="https://open.spotify.com/embed/playlist/6WGk3xkJty6tmCow7zJl7v?utm_source=generator&theme=0"
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
                </ul>
            </section>
            <Footer />
        </>
    )

}
export default Template