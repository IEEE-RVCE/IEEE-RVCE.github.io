import React from 'react';
import {Divider} from '@material-ui/core';
import GiveMeABreak from './GiveMeABreak';

/**
 * Spaced out divider
 * @param {{num:number}} props 
 * @returns 
 */
export default function SpacyDivider(props){
    let num = props.num??1;

    return (<><GiveMeABreak num={num}/><Divider /><GiveMeABreak num={num}/></>)
}