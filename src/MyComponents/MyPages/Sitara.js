import React from 'react'

import { ComingSoonBtn, ProBtn } from '../CommonComponents'
// import { Link } from 'react-router-dom';

import '../css/Sitara.css';

export default function Sitara() {
    return (
        <>
           <div style={{
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // fontWeight: '500',
            fontFamily: 'Inconsolata, monospace',
            }}>

                <span style={{marginTop: '50px', fontSize: '1.3em'}}>
                    🚧 Under Construction!
                </span>
                <br/>
                <span style={{width: 'auto', marginBottom: '40px'}}>
                    <div style=
                    {{display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'}}>
                        <ComingSoonBtn style={{textDecoration: 'none'}}>⌛️ Coming Soon Here!</ComingSoonBtn>
                    </div>
                </span>

                {/* CUBE ANIMATION CONTAINER */}
                <div className="ani-container">

                    {/* Add another layer of cubes by just replicating the div with "ani-flex" className, and the cubes inside.*/}

                    {/* LAYER 1 */}
                    <div className="ani-flex">
                      <div className="cube">
                        <div className="wall front"></div>
                        <div className="wall back"></div>
                        <div className="wall left"></div>
                        <div className="wall right"></div>
                        <div className="wall top"></div>
                        <div className="wall bottom"></div>
                      </div>
                      <div className="cube">
                        <div className="wall front"></div>
                        <div className="wall back"></div>
                        <div className="wall left"></div>
                        <div className="wall right"></div>
                        <div className="wall top"></div>
                        <div className="wall bottom"></div>
                      </div>
                      <div className="cube">
                        <div className="wall front"></div>
                        <div className="wall back"></div>
                        <div className="wall left"></div>
                        <div className="wall right"></div>
                        <div className="wall top"></div>
                        <div className="wall bottom"></div>
                      </div>
                    </div>

                    {/* LAYER 2 */}
                    <div className="ani-flex">
                      <div className="cube">
                        <div className="wall front"></div>
                        <div className="wall back"></div>
                        <div className="wall left"></div>
                        <div className="wall right"></div>
                        <div className="wall top"></div>
                        <div className="wall bottom"></div>
                      </div>
                      <div className="cube">
                        <div className="wall front"></div>
                        <div className="wall back"></div>
                        <div className="wall left"></div>
                        <div className="wall right"></div>
                        <div className="wall top"></div>
                        <div className="wall bottom"></div>
                      </div>
                      <div className="cube">
                        <div className="wall front"></div>
                        <div className="wall back"></div>
                        <div className="wall left"></div>
                        <div className="wall right"></div>
                        <div className="wall top"></div>
                        <div className="wall bottom"></div>
                      </div>
                    </div>

                    {/* LAYER 3 */}
                    <div className="ani-flex">
                      <div className="cube">
                        <div className="wall front"></div>
                        <div className="wall back"></div>
                        <div className="wall left"></div>
                        <div className="wall right"></div>
                        <div className="wall top"></div>
                        <div className="wall bottom"></div>
                      </div>
                      <div className="cube">
                        <div className="wall front"></div>
                        <div className="wall back"></div>
                        <div className="wall left"></div>
                        <div className="wall right"></div>
                        <div className="wall top"></div>
                        <div className="wall bottom"></div>
                      </div>
                      <div className="cube">
                        <div className="wall front"></div>
                        <div className="wall back"></div>
                        <div className="wall left"></div>
                        <div className="wall right"></div>
                        <div className="wall top"></div>
                        <div className="wall bottom"></div>
                      </div>
                    </div>
                </div>

                <span style={{width: 'auto', marginTop: '50px'}}>
                    <div style={{display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'}}>
                            <ProBtn href="/" className="pro-btn-goback"
                            style={{textDecoration: 'none', color: '#FFF'}}>
                            👈🏻 Go Back
                            </ProBtn>
                    </div>
                </span>

            </div> 
        </>
    )
}
