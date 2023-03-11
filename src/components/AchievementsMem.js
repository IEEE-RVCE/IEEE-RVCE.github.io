import React from 'react';
import { MemAchivementText } from '../data/FrontPage/Text';

/**
 * Display a list of achievements
 * @returns
 */
export default function AchievementsMem() {
  return (
    <ul>
      {MemAchivementText.map(e => (
        <li key={e}>{e}</li>
      ))}
    </ul>
  );
}
