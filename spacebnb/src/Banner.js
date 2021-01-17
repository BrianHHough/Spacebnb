import React from 'react';
import './Banner.css';
import { Button} from "@material-ui/core";

function Banner() {
    return (
        <div className='banner'>
            <div className='banner__search'>
                <Button 
                className='banner__searchButton'
                variant='outlined'>Search Dates
                </Button>
            </div>
            <div className='banner__info'>
                <h1>There's a whole galaxy waiting for you beyond this stratosphere 🚀</h1>
                <br></br>
                <h4>
                    Spread your wings and book an exclusive getaway that is out of this world and will blow you away, guaranteed.
                </h4>
                <br></br>
                <Button
                variant='outlined'>Explore Your Galaxy
                </Button>
            </div>
        </div>
    )
}

export default Banner