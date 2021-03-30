import React from 'react';
import { achievementsText } from "../data/FrontPage/Text"

/**
 * Display a list of achievements
 * @returns 
 */
export default function Achievements() {
    return (
        <ul>
            {achievementsText.map(e => (<li key={e}>{e}</li>))}
        </ul>
    )
}