import React from "react";
import { SbachievementsText } from "../data/FrontPage/Text";

/**
 * Display a list of achievements
 * @returns
 */
export default function Achievements() {
  return (
    <ul>
      {SbachievementsText.map((e) => (
        <li key={e}>{e}</li>
      ))}
    </ul>
  );
}
