import React, { useState } from 'react';
import './Banner.css';
import { Button} from "@material-ui/core";
import Search from './Search';
import { useHistory } from "react-router-dom";

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState (false);


    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search />}
               
                <Button onClick={() => 
                setShowSearch(!showSearch)}
                className='banner__searchButton'
                variant='outlined'
                >
                    {showSearch? "Hide" : "Search Intergalactic Dates"}    
                </Button>
 
            </div>
            <div className='banner__info'>
                <h1>There's a whole galaxy waiting for you beyond this stratosphere 🚀</h1>
                <br></br>
                <h4>
                    Spread your wings and book an exclusive getaway that is out of this world and will blow you away, guaranteed.
                </h4>
                <br></br>
                <Button onClick ={() => history.push('/search')}
                variant='outlined'>Explore The Galaxy
                </Button>
            </div>
        </div>
    )
}

export default Banner