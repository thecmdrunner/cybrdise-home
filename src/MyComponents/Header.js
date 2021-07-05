import React from 'react'
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


import { NavBtn } from './CommonComponents'


export default function Header() {
    return (
        <div className="container">
        <div className="nav-card" style={{marginTop: '20px', marginBottom: '40px'}}>
          <span className="d-flex flex-row aboutButton nav-theme">
            {/* <div class="nav-btn">$ about</div> */}
            <NavBtn style={{marginRight: '10px'}} id="aboutButton">$ about</NavBtn>
          </span>
          <span className="d-flex flex-row contactButton nav-theme">
            {/* <div class="nav-btn">$ contact</div> */}
            <NavBtn style={{marginLeft: '10px'}} id="contactButton">$ contact</NavBtn>
          </span>
        </div>

        </div>
    )
}

