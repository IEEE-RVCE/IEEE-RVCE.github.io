import React from 'react';
import { Divider } from '@material-ui/core';
import GiveMeABreak from './GiveMeABreak';

/**
 * Spaced out divider
 * @param {{num:number}} props
 * @returns
 */
export default function SpacyDivider(props) {
  let num = props.num ?? 1;
  let height = props.height ?? 1;
  let color = props.color ?? '#222';

  return (
    <>
      <GiveMeABreak num={num} />
      <Divider style={{ backgroundColor: color, height: height + 'px' }} />
      <GiveMeABreak num={num} />
    </>
  );
}
