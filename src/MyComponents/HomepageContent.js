import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

import './HomepageContent.css'

// import { ReactComponent as PrismLogo } from '../assets/PrismCard.svg';

import { ComingSoonBtn, ProBtn } from './CommonComponents'

const useStyles = makeStyles({
  root: {
    background: '#1e1e1e',
    color: '#FFFFFF',
    width: 315,
    borderRadius: '7px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
    color: '#FFFFFF'
  },
  title: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  pos: {
    color: '#FFFFFF',
    marginBottom: 12,
  },
  media: {
    height: 140,
  },
  prism: {
      maxWidth: '192px',
  }
});

export default function HomepageContent() {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
    <>

    <div style={{
        // display: 'flex', 
        // flexWrap: 'wrap', 
        // flexDirection: 'Row', 
        // maxWidth: 700,
        marginLeft: 'auto',
        marginRight: 'auto',
    }}>

    {/* SITARA */}

    <div className="pro-card">
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image="../assets/vm-logo.svg"
                />
                <CardContent>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                {/* <img width="90"
                    src="../assets/vm-logo.svg"
                    style=
                {{marginBottom: 'auto',
                  marginTop: '10px',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                  maxWidth: '192px'}}
                alt="project-logo"/> */}
                </div>
                <div style=
                    {{display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    marginTop: '20px',
                    marginRight: '20px', 
                    marginLeft: '30px', 
                    maxWidth: '270px',
                    marginBottom: '20px',
                    color: '#00aa00',
                    fontFamily: 'DM Mono, monospace',
                    fontWeight: '600'
                }}
                >
                    <div style=
                        {{fontSize: '36px'}}
                    >Optimize</div>
                    <div style=
                        {{fontSize: '40px',}}
                    >Your PC</div>
                </div>
                </CardContent>
            </CardActionArea>
        </Card>

        <span style={{width: 'auto', marginBottom: '20px'}}>
            <div style=
                {{display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'}}>
                <ComingSoonBtn>⌛️ Coming Soon Here!</ComingSoonBtn>
            </div>
        </span>

        </div>

    {/* QUICK VM */}

    <div className="pro-card">
        <Card className={classes.root}>
            <CardActionArea>
                {/* <CardMedia
                className={classes.media}
                image="../assets/graphics.svg"
                /> */}
                <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
                <img width="90"
                    src="../assets/PrismCard.svg"
                    style=
                {{margin: 'auto',
                  marginTop: '30px',
                  maxWidth: '192px'}}
                alt="project-logo"/>
                </div>
                <CardContent>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                
                </div>
                <div style=
                    {{display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    marginTop: '20px',
                    marginRight: '20px', 
                    marginLeft: '30px', 
                    maxWidth: '270px',
                    marginBottom: '20px',
                    color: '#00aa00',
                    fontFamily: 'DM Mono, monospace',
                    }}>

                    {/* <div style={{fontSize: '40px', fontWeight: '600'}}>
                        Quick VM
                    </div> */}
                    <div style={{fontSize: 21}}>
                        Have a Windows VM ready-to-use in under 100 seconds!
                    </div>
                </div>
                </CardContent>
            </CardActionArea>
        </Card>


        <span style={{width: 'auto', marginBottom: '20px'}}>
            <div style=
                {{display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'}}>
                <a href="https://blog.cybrdise.com/quick-vm-setup/" style={{textDecoration: 'none', border: 'none'}}>
                <ProBtn style={{marginTop: '15px', marginRight: '5px'}}>
                    📑 Read More
                </ProBtn></a>
                <a href="https://github.com/thegamerhat/quick-vm/" style={{textDecoration: 'none'}}>
                <ProBtn style={{marginTop: '15px', marginLeft: '5px'}}>
                    <img alt="github-icon"
                    style={{verticalAlign: '-4px', marginRight: 5}} 
                    width="19" src="../assets/github-icon.svg" />
                    Check Out!
                </ProBtn></a>
            </div>
        </span>

        </div>

    {/* PRISM */}

    <div className="pro-card">
        <Card className={classes.root}>
            <CardActionArea>
            <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
                <img width="90"
                    src="./PrismCard.png"
                    style=
                {{margin: 'auto',
                  marginTop: '30px',
                  maxWidth: '192px'}}
                alt="project-logo"></img>
                </div>
                <CardContent>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                {/* <img width="90"
                    src="../assets/vm-logo.svg"
                    style=
                {{marginBottom: 'auto',
                  marginTop: '10px',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                  maxWidth: '192px'}}
                alt="project-logo"/> */}
                </div>
                <div style=
                    {{display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    marginTop: '20px',
                    marginRight: '20px', 
                    marginLeft: '30px', 
                    maxWidth: '270px',
                    marginBottom: '20px',
                    color: '#00aa00',
                    fontFamily: 'DM Mono, monospace',
                    }}>

                    {/* <div style={{fontSize: '40px', fontWeight: '600'}}>
                        Quick VM
                    </div> */}
                    <div style={{fontSize: 20}}>
                    The ultimate Containerization for Proprietary software!
                    </div>
                </div>
                </CardContent>
            </CardActionArea>
        </Card>


        <span style={{width: 'auto', marginBottom: '20px'}}>
            <div style=
                {{display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'}}>
                <ComingSoonBtn>⌛️ Coming Soon Here!</ComingSoonBtn>
            </div>
        </span>

           
        </div>
    
    </div>
    
    </>
    )
}
