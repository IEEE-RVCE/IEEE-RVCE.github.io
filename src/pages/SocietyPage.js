import React from 'react';
import Society from '../components/Society';

export default function SocietyPage(){

    const thePath = window.location.href;
    const lastItem = thePath.substring(thePath.lastIndexOf('/') + 1);

    return(
        <React.Fragment>
            <Society sname ={lastItem}/>
        </React.Fragment>
    )
}