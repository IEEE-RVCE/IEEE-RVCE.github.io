import React, { Component } from 'react';
import './sps.css';

export class SpsLoad extends Component {

    componentDidMount () {
        const script = document.createElement("script");
        script.src = "./sps.js";
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
        return (
            <div>
                <svg>
                    <g>
                        <line id="line" x1="0" x2="100%" />
                        <polyline id="wave" />
                    </g>
                </svg>
            </div>
        )
    }
}

export default SpsLoad;
