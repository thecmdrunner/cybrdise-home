import React from 'react';
// import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

import './css/HomepageContent.css'

// import { ReactComponent as PrismLogo } from '../assets/PrismCard.svg';

import { ComingSoonBtn } from './CommonComponents'

import OptimizeLogo from '../assets/pcard.svg';
import QuickVMLogo from '../assets/QuickVMCard.svg'
import PrismLogo from '../assets/PrismCard.svg'

const useStyles = makeStyles({
  root: {
    background: '#1e1e1e',
    color: '#FFFFFF',
    width: 315,
    borderRadius: '7px',
    textDecoration: 'none',
  },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//     color: '#FFFFFF'
//   },
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
    // const bull = <span className={classes.bullet}>•</span>;

    return (
    <>

    <div style={{
        display: 'flex', 
        flexWrap: 'wrap', 
        flexDirection: 'Row', 
        maxWidth: 700,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 30,
        border: 'none !important',

    }}>

{/* SITARA */}

    <div className="pro-card">
        <Card className={classes.root}>
            <CardActionArea>
            <img style={{marginLeft: 45, marginTop: 25  }} 
            alt="logo" 
            draggable="false" 
            unselectable="on" 
            src={OptimizeLogo} 
            height="140"/>
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
                    textDecoration: 'none',
                    textAlign: 'center',
                    marginRight: '20px', 
                    marginLeft: '30px', 
                    maxWidth: '270px',
                    marginBottom: '20px',
                    color: '#FFF',
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

        
        {/* <span style={{width: 'auto', marginBottom: '20px'}}>
            <div style=
                {{display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'}}>
                <Link to="/optimize">
                    <ComingSoonBtn style={{textDecoration: 'none'}}>⌛️ Coming Soon Here!</ComingSoonBtn>
                </Link>
            </div>
        </span> */}

    </div>
    
{/* QUICK VM */}

    <div className="pro-card">
        <Card className={classes.root}>
            <CardActionArea>
            {/* <CardMedia
                className={classes.media}
                image={"../assets/vm-logo.svg"}
                /> */}

          <img style={{marginTop: 10}}
          alt="logo" 
          draggable="false" 
          unselectable="on" 
          src={QuickVMLogo} 
          height="95"/>
         
                <CardContent>
                <div style=
                    {{display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    marginRight: '20px', 
                    marginLeft: '30px', 
                    maxWidth: '270px',
                    marginBottom: '20px',
                    color: '#FFF',
                    fontFamily: 'DM Mono, monospace',
                    }}>

                    {/* <div style={{fontSize: '40px', fontWeight: '600'}}>
                        Quick VM
                    </div> */}
                    <div style={{fontSize: 21}}>
                        Have a VM
                    </div>
                    <div style={{fontSize: 21}}>
                        ready to use in
                    </div>
                    <div style={{fontSize: 21}}>
                        under 100 seconds!
                    </div>
                </div>
                </CardContent>
            </CardActionArea>
        </Card>

        {/* <span style={{width: 'auto', marginBottom: '20px'}}>
            <div style=
                {{display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'}}>
                <ProBtn href="https://blog.cybrdise.com/quick-vm-setup/" 
                style={{marginTop: '15px', marginRight: '5px'}}>
                    📑 Read More
                </ProBtn>
                <ProBtn href="https://github.com/thegamerhat/quick-vm/"
                style={{marginTop: '15px', marginLeft: '5px'}}>
                    <img alt="github-icon"
                    style={{verticalAlign: '-4px', marginRight: 5}} 
                    width="19" src="../assets/github-icon.svg" />
                    Check Out!
                </ProBtn>
            </div>
        </span> */}

    </div>

{/* PRISM */}

    <div className="pro-card">
        <Card className={classes.root}>
            <CardActionArea>
            <img 
          alt="logo" 
          draggable="false" 
          unselectable="on" 
          src={PrismLogo} 
          height="120"/>
                <CardContent>
                {/* <div style={{display: 'flex', flexDirection: 'column'}}>
                <img width="90"
                    src="../assets/vm-logo.svg"
                    style=
                {{marginBottom: 'auto',
                  marginTop: '10px',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                  maxWidth: '192px'}}
                alt="project-logo"/>
                </div> */}
                <div style=
                    {{display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    marginRight: '20px', 
                    marginLeft: '30px', 
                    maxWidth: '270px',
                    marginBottom: '20px',
                    color: '#FFF',
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

        <div style=
                {{display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'}}>
                <span style={{width: 'auto', margin: 'auto'}}>
                    <ComingSoonBtn>⌛️ More Coming Soon!</ComingSoonBtn>
                </span>
            </div>
        
        </div>

    </div>
    
    </>
    )
}
