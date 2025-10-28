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
                    <h1 className="hero-title">Welcome to My Journey</h1>
                    <p className="hero-subtitle">Exploring the world, one adventure at a time</p>

                </section>
            </div>
            <div className="bucket-intro">
                <p className="intro-text">
                    This is my living document of dreams, adventures, and experiences I want to collect throughout my lifetime.
                    Each item represents a commitment to living fully, exploring boldly, and creating memories that matter.
                </p>
                <div className="intro-stats">
                    <div className="stat-box">
                        <h3>Why a Bucket List?</h3>
                        <p>
                            Life is meant to be experienced, not just observed. This list keeps me accountable,
                            motivated, and constantly seeking new horizons. Every checked item is a story worth telling.
                        </p>
                    </div>
                    <div className="stat-box">
                        <h3>The Journey</h3>
                        <p>
                            From tasting exotic foods to exploring ancient temples, from learning new skills to
                            conquering fears - this list represents who I am and who I'm becoming.
                        </p>
                    </div>
                </div>
            </div>
            <section id="bucket-list">
                <h2>My Bucket List</h2>

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
                    <li>Visit London, United Kingdom</li>
                    <li>Travel an unknown distance without navigation</li>
                    <li>Explore India</li>
                    <div className="img-container-square">
                        <li className="strikethrough">Pose like a model for a brand</li>
                        <div className="img-details">
                            <img src="/DSC_0311 Edited.jpg" alt="Posing listening to music on skull candy earphones" />
                            <p><mark>Tried to pose while listening to music.</mark></p>
                        </div>
                    </div>
                    <li>Run a Marathon</li>
                    <li>Attend a Martin Garrix live concert</li>
                    <li>Go to Amsterdam, Netherlands</li>
                    <li>Visit Niagara Falls, NY, United States</li>
                    <div className="img-container-square">
                        <li>Attend an F1 Race</li>
                        <div className="img-details">
                            <img src="/2025-f1-wallpapers-2-2.jpg" alt="Lando_Norris F1_Car_2025" />
                            <p><mark>Lando Norris F1 Car 2025 - my dream team I support</mark></p>
                        </div>
                    </div>
                    <li>Run my own business</li>
                    <li>Visit Las Vegas, NV, United States</li>
                    <li>Go Camping in my own SUV</li>
                    <li className="strikethrough">Say “no” to something that doesn’t feel right.</li>
                    <li>See Grand Canyon, AZ, United States</li>
                    <li>Visit Hawaii, HI, United States</li>
                    <li>Attend a Tomorrowland festival</li>
                    <li>Plant a tree</li>
                    <li className="strikethrough">Spend a full day without social media.</li>
                    <li>Go wine tasting</li>
                    <li>Drive a bus</li>
                    <li className="strikethrough">Make my own icecream</li>
                    <li>Compliment a stranger genuinely.</li>
                    <li>Visit Alaska, AK, United States</li>
                    <div className="img-container-square">
                        <li className="strikethrough">Visit the Statue of Liberty, NY, United States</li>
                        <div className="img-details">
                            <img src="/44072.jpg" alt="Statue of liFberty" height="250px" width="100%" />
                            <p><mark>That's me, the guy in the Finisher Winter Hat, clicking pictures!</mark></p>
                        </div>
                    </div>
                    <li>Visit Yellowstone National Park, United States</li>
                    <li>Visit the Maldives</li>
                    <li>Visit all 50 US states (7  done)</li>
                    <li>Attend a masterclass on photography and editing</li>
                    <li>Learn a new language and talk fluently with a native person</li>
                    <li>Buy a car</li>
                    <li>Attend an anonymous wedding in India</li>
                    <li>Travel to Canada</li>
                    <li>Learn swimming</li>
                    <li>Fly in a Helicopter</li>
                    <li>Build a farmhouse with plantations and a Swimming Pool</li>
                    <div className="img-container-square">
                        <li className="strikethrough">Visit Times Square, NY, United States</li>
                        <div className="img-details">
                            <img src="/44150_times_square.jpg" alt="Times Square at Night" height="250px" width="100%" />
                            <p><mark>Yeah, that's me in the jacket. I witnessed Times Square.</mark></p>
                        </div>
                    </div>
                    <li>Meet old friends whom I had a fight with and apologize</li>
                    <li>Make a calendar with my own pics & achievements</li>
                    <li>Visit Andaman & Nicobar Islands in India and explore the coral reefs</li>
                    <li>Go off-roading</li>
                    <li>Visit Goa beaches, India</li>
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
                    <li>Restore a bike to its old glory</li>
                    <li>Buy a property on my own</li>
                    <li className="strikethrough">Visit Ramappa Temple, UNESCO World Heritage Site, India</li>
                    <li>Climb to Tirumala Tirupati Temple, Andhra Pradesh, India</li>
                    <div className="img-container-square">
                        <li className="strikethrough">Experience Sensitive hydraulic lever Operations of Excavator</li>
                        <div className="img-details">
                            <img src="/FB_IMG_1494518369546.jpg" alt="Excavator Driving" height="250px" width="100%" />
                            <p><mark>pose after driving, exhausted! (vintage edit)</mark></p>
                        </div>
                    </div>
                    <li>Witness the Taj Mahal at sunrise</li>
                    <li>Explore a ghost town</li>
                    <li>Walk through the old Delhi lanes of Chandni Chowk, India.</li>
                    <li className="about-philosophy">
                        Visit Dhanushkodi, Tamilnadu.
                        <blockquote>
                            “The last road of India isn’t just a destination, it’s a journey to infinity.”
                        </blockquote>
                    </li>
                    <li>Visit the Gateway of India.</li>
                    <li className="strikethrough">Try street food in Delhi, India</li>
                    <li>Own a second property of land on my own</li>
                    <div className="img-container-square">
                        <li className="strikethrough">Learn to play guitar</li>
                        <img src="/IMG-20200114-WA0019.jpg" alt="Guitar poster style pose" height="250px" width="100%" />
                        <div className="img-details">
                            <p><mark>Guiter Poster - old poster style picture after learing some lessons</mark></p>
                        </div>
                    </div>
                    <li>Visit Lakshadweep Islands, India.</li>
                    <li>Buy a drone</li>
                    <li>Visit Yosemite National Park, United states</li>
                    <li>Travel across the Golden Gate Bridge, San Francisco, United States</li>
                    <li className="strikethrough">Try to capture professional landscape photos</li>
                    <div className="img-container-square">
                        <img src="/45817.jpeg" alt="Mountains fall colours photo" height="250px" width="100%" />
                        <div className="img-details">
                            <p><mark>Mountains with fall colors - Stowe Mountain Resort, Stowe, VT 05672</mark></p>
                        </div>
                    </div>
                    <li>Visit the Charminar in Hyderabad, Telangana, India.</li>
                    <li>Visit Golden Temple, Amritsar, India.</li>
                    <li>Have a candlelight dinner</li>
                    <li>Visit Mt. Washington, NH</li>
                    <div className="img-container-square">
                    <li className="strikethrough">Hike Mount Washington, New Hampshire, USA</li>
                        <img src="/47354.jpeg" alt="Mount Washington photo" height="250px" width="100%" />
                        <div className="img-details">
                            <p><mark>View from top of Mount Washington, NH - Live Free or Die</mark></p>
                        </div>
                    </div>
                    <li>Visit Sri Lanka</li>
                    <li>Witness the sunrise at Kanyakumari, India.</li>
                    <li>Get married</li>
                    <div className="img-container-square">
                        <li className="strikethrough">Explore Singareni Collieries, Telangana, India</li>
                        <img src="/IMG-20200216-WA0017.jpg" alt="Me and My friends looking the mining sites" height="250px" width="100%" />
                        <div className="img-details">
                            <p><mark>My friends and I are looking at the mining sites.</mark></p>
                        </div>
                    </div>
                    <li>Visit Nallamala Forest</li>
                    <li className="strikethrough">Try Bamboo Chicken at Araku Valley, Andhra Pradesh, India</li>
                    <li>Watch a live cricket match in a Stadium</li>
                    <li>Camp under the stars in Ladakh, India</li>
                    <li>Witness the cherry blossom festival in Japan</li>
                    <li>Visit Mount Rushmore National Memorial, SD, United States</li>
                    <li>Drive a tractor</li>
                    <li className="strikethrough">Trek to Pandavula Gutta caves, Telangana, India</li>
                    <li>Try and learn Skateboarding</li>
                    <li>Explore the Grand Palace, Bangkok</li>
                    <li>Explore mountain roads of Colorado, USA</li>
                    <li>Explore wildlife sanctuaries in Madhya Pradesh, India</li>
                    <li className="strikethrough">Try chicken shawarma</li>
                    <li>Attend Bonalu festival in Telangana, India.</li>
                    <li>Relax on Bali beaches, Indonesia</li>
                    <div className="img-container-square">
                        <li className="strikethrough">Watch the rain from a beach or mountain.</li>
                        <img src="/IMG_3975.jpg" alt="Rain and beach picture" height="250px" width="100%" />
                        <div className="img-details">
                            <p><mark>I witnessed the rain from a beach, it was phenomenal.</mark></p>
                        </div>
                    </div>
                    <li>Learn coding and build a personal website</li>
                    <li>Visit Marina Bay Sands SkyPark, Singapore</li>
                    <li>Explore Jaipur’s Pink City, India</li>
                    <li>Take a houseboat ride in Alleppey, Kerala, India</li>
                    <li>Visit the IT capital of India, Bengaluru,India.</li>
                    <li className="strikethrough">Visit the Thousand Pillar Temple, Telangana, India</li>
                    <li>Visit the Lepakshi temple in Andhra Pradesh, India.</li>
                    <li>Drive a Tesla</li>
                    <div className="img-container-square">
                        <li className="strikethrough">Try Octopus</li>
                        <img src="/IMG_3492_copy.jpg" alt="Eating octopus picture" height="250px" width="100%" />
                        <div className="img-details">
                            <p><mark>I cannot hold it but I still tried it with chopsticks.</mark></p>
                        </div>
                    </div>
                    <li>Stay in a 5-star hotel</li>
                    <li className="strikethrough">Drink palm water</li>
                    <li>Skydiving over Dubai, UAE</li>
                    <li>Ride the world’s fastest roller coaster in Abu Dhabi, UAE</li>
                    <li className="strikethrough">Enjoy Hyderabadi biryani at paradise hotel</li>
                    <li>Develop a private party hub on one of the properties I own</li>
                    <li>Own my own bus</li>
                    <li>Go desert safari in Jaisalmer, India</li>
                    <li>Climb Mount Fuji, Japan</li>
                    <li>Learn to bake bread</li>
                    <li className="strikethrough">Visit Chilkur Balaji Temple, Hyderabad, India</li>
                    <li>Fly business class</li>
                    <li>Visit the Pyramids of Giza, Egypt</li>
                    <li>Visit Sabarimala Temple, Kerala, India</li>
                    <li>Go off-roading in Rajasthan desert</li>
                    <li>Have a whiskey collection</li>
                    <li>Go on a cruise</li>
                    <li>Camp under the Northern Lights in Iceland</li>
                    <li>Learn to make jalebi in a traditional Indian sweet shop</li>
                </ul>
            </section>
            <Footer />
        </>
    )

}
export default Template