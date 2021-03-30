
import React from 'react';

/**
 * Produce a number of br tags
 * @param {{num:number}} props 
 */
export default function GiveMeABreak(props) {
    const { num } = props;
    return <>{new Array(num).fill(0).map((e,i) => <br key={i} />)}</>;
}