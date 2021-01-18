import React from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core"
import SearchResult from './SearchResult'

import planet1 from './brand/planet1.png';
import planet2 from './brand/planet2.png';
import planet6 from './brand/planet6.png';
import planet3 from './brand/planet3.png';
import planet4 from './brand/planet4.png';
import planet5 from './brand/planet5.png';
import planet7 from './brand/planet7.png';
import planet8 from './brand/planet8.png';

function SearchPage() {
    return (
        <div className='SearchPage'>
            <div className='searchPage__info'>
                <p>62 intergalactic stays · 17 January to 31 January · 2 guest </p>
                <h1>Stays close to Earth</h1>
                <Button 
                variant="outlined">Cancellation Flexibility</Button>
                <Button 
                variant="outlined">Type of place</Button>
                <Button 
                variant="outlined">Price</Button>
                <Button
                variant="outlined">Rooms and beds</Button>
                <Button
                variant="outlined">More filters</Button>
            </div>
            <SearchResult 
                img={planet1}
                location="Venus"
                title="Valentines' Day Suite on Venus"
                description="Enjoy the breath-taking views and vistas from Venus' most scenic location. The vacation of a life-time is one click away."
                star={4.83}
                price="$650/night"
                total="$1,950 total"
            />

            <SearchResult 
                img={planet2}
                location="Saturn"
                title="Penthouse on Saturn"
                description="Saturn is known for two things: the largest planetary rings around a planet and the glorious accomodations at the Saturn Holiday Inn."
                star={4.94}
                price="$450/night"
                total="$3,150 total"
            />

            <SearchResult 
                img={planet6}
                location="Neptune"
                title="1 Bedroom Apartment on Neptune"
                description="Neptune's axis of rotation is similar to Earth's, and its seasons last 40+ years. Come now for a year-round summer."
                star={4.04}
                price="$400/night"
                total="$1,200 total"
            />

            <SearchResult 
                img={planet3}
                location="Earth's Moon"
                title="1 Bedroom Cybercapsul"
                description="Since becomming the most inhabited planetary location, the Moon is known for spectacular views and a great community of space travelers."
                star={4.32}
                price="$350/night"
                total="$2,450 total"
            />
            <SearchResult 
                img={planet4}
                location="Mars"
                title="Spacious Open-Space Loft for 1"
                description="Dubbed the most mysterious planet in the Milkey Way Galaxy. Discover if Martians exist on Mars and enjoy an unforgettable getaway on the most famous planet."
                star={4.76}
                price="$750/night"
                total="$4,190 total"
            />
            <SearchResult 
                img={planet5}
                location="Mercury"
                title="2 Bedroom Residential Housing"
                description="Bathe in the solar goodness that comes with being the planet closest to the sun in the Milkey Way Galaxy. Catch some sun rays and some relaxing waves."
                star={4.89}
                price="$370/night"
                total="$2,050 total"
            />
            <SearchResult 
                img={planet7}
                location="Pluto"
                title="Tiny Suite Experience"
                description="While Pluto may not be considered a planet anymore, this miniature suite experience is known throughout the planetary galaxy. Sign up for a miniaturized experience like no other."
                star={3.92}
                price="$740/night"
                total="$4,210 total"
            />
            <SearchResult 
                img={planet8}
                location="Jupiter"
                title="2 Bed Loft on Jupiter"
                description="Wake up to red skies, solar flares, and rejuvenating glows to nurse yourself back to health in this replenishing environment."
                star={4.12}
                price="$300/night"
                total="$1,800 total"
            />
        </div>
    )
}

export default SearchPage