import React from 'react';
import Society from '../components/Society';
// import SocietyHeader from '../components/SocietyHeader';
import SocietyFooter from '../components/SocietyFooter';

export default function SocietyPage(){

    const thePath = window.location.href;
    const lastItem = thePath.substring(thePath.lastIndexOf('/') + 1);

    return(
        <React.Fragment>
            {/* <SocietyHeader/> */}
            <Society sname ={lastItem}/>
            <SocietyFooter/>
        </React.Fragment>
    )
}