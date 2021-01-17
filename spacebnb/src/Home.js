import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card'
import space1 from './brand/space1.png';
import space2 from './brand/space2.png';
import space3 from './brand/space3.png';

import planet1 from './brand/planet1.png';
import planet2 from './brand/planet2.png';
import planet6 from './brand/planet6.png';

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
                <Card 
                    src={space1}
                    title="Interplanetary Experiences"
                    description="Interplanetary travel is the #1 source of tourism in today's globalized world. Don't feel tethered to one planet when you can explore an entire galaxy"
                />
                <Card 
                    src={space2}
                    title="One-In-A-Lifetime Thrills"
                    description="Spacebnb provides you with the ultimate getaway package. You have another world to explore while you are there."
                />
                <Card 
                    src={space3}
                    title="Travel Is Included"
                    description="Is your spaceship still at the shop being serviced? Don't fret...let Spacebnb's team of intergalactic advisors assist you on your travels with round-trip fare."
                />
            </div>
            
            <div className='home__section'>
                <Card 
                        src={planet1}
                        title="Valentines' Day Suite on Venus"
                        description="Enjoy the breath-taking views and vistas from Venus' most scenic location. The vacation of a life-time is one click away."
                        price="$650/night"
                    />
                <Card 
                    src={planet2}
                    title="Penthouse on Saturn"
                    description="Saturn is known for two things: the largest planetary rings around a planet and the glorious accomodations at the Saturn Holiday Inn"
                    price="$450/night"
                />
                <Card 
                    src={planet6}
                    title="1 Bedroom Apartment on Neptune"
                    description="Neptune's axis of rotation is similar to Earth's, and its seasons last 40+ years. Come now for a  year-round summer."
                    price="$400/night"
                />
            </div>
        </div>
    )
}

export default Home