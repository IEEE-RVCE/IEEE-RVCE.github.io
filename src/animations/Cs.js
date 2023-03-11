import { Container } from '@material-ui/core';
import React from 'react';
import './cs.css';

function cs() {
  return (
    <React.Fragment>
      <Container>
        <div className="container">
          <h3 className="head">Connecting to server</h3>
          <div className="component PC">
            <div className="flare" />
          </div>
          <div className="component signals">
            <div className="dot first" />
            <div className="dot second" />
            <div className="dot third" />
          </div>
          <div className="component server">
            <div className="slot" />
            <div className="slot" />
            <div className="button" />
            <div className="button" />
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default cs;
