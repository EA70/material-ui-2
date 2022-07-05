import React from 'react';
import Musician from './Musician';

// Material UI
import Grid from '@mui/material/Grid';



const Musicians = ( {musiciensSelect} ) => {

    return (
        <div className="musiciens">

            <Grid container spacing={3}>
                {musiciensSelect
                    ?.map((element) => { 
                        return < Musician musicien={element} />
                    })
                }
            </Grid>
        </div>
    );
};

export default Musicians;