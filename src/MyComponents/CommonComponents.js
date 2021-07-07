import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

// Buttons in Navbar

export const NavBtn = withStyles({
    root: {
      borderRadius: '6px',
      textTransform: 'none',
      fontSize: 16,
    //   padding: '6px 12px',
      paddingTop: '15px',
      paddingBottom: '15px',
      paddingRight: '15px',
      paddingLeft: '15px',
    //   lineHeight: 1.5,
      backgroundColor: '#1e1e1e',
      color: '#00aa00',
    //   margin: '15px',
      fontWeight: '500',
      fontFamily: [
        'DM Mono',
      ].join(','),
      '&:hover': {
        backgroundColor: '#2E2E2E',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#1e1e1e',
      },
    },
  })(Button);

// Buttons related to Project

export const ProBtn = withStyles({
    root: {
      borderRadius: '6px',
      textTransform: 'none',
      fontSize: 16,
    //   padding: '6px 12px',
      paddingTop: '15px',
      paddingBottom: '15px',
      paddingRight: '15px',
      paddingLeft: '15px',
    //   lineHeight: 1.5,
      backgroundColor: '#1e1e1e',
      color: '#FFFFFF',
    //   margin: '15px',
      fontWeight: '600',
      fontFamily: [
        'Roboto Mono',
      ].join(','),
      '&:hover': {
        backgroundColor: '#2E2E2E',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#1e1e1e',
      },
    },
  })(Button);
  
// Coming Soon Button

export const ComingSoonBtn = withStyles({
    root: {
      textTransform: 'none',
      fontSize: 16,
    //   padding: '6px 12px',
      paddingTop: '15px',
      paddingBottom: '15px',
      paddingRight: '34px',
      paddingLeft: '34px',
      lineHeight: 1.5,
      backgroundColor: '#1e1e1e',
      color: '#FFFFFF',
      marginTop: '15px',
      fontWeight: '600',
      width: 315,
      borderRadius: '6px',
      fontFamily: [
        'Roboto Mono',
      ].join(','),
      '&:hover': {
        backgroundColor: '#2E2E2E',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#1e1e1e',
      },
    },
  })(Button);

export default function ProductTag() {
  return (
    <>
      <div style={{ backgroundColor: '#1e1e1e',
          display: 'flex',
          flexDirection: 'column',
          color: '#FFFFFF',
          width: 270,
          height: 240,
          borderRadius: '18px',
          textDecoration: 'none',
          paddingTop: '10px',
          paddingBottom: '10px',
          alignItems: 'center',
          justifyContent: 'center', }}>
        
        <ComingSoonBtn 
          className="noselect" 
          style={{backgroundColor: '#2a2a2a',
          width: 230,
          height: 'auto',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '10px',
          borderRadius: '15px',
          display: 'inline block',
          paddingTop: 15,
          paddingBottom: 15,  }}>

          <img alt="logo" draggable="false" unselectable="on" src="../assets/Prism.svg" height="130"/>

        </ComingSoonBtn>
        
        {/* <div style={{backgroundColor: '#2a2a2a',
                width: 230,
                height: 60,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '10px',
                borderRadius: '20px',
                display: 'inline block',
                padding: 2,}}>
        </div> */}

        <ComingSoonBtn 
          style={{backgroundColor: '#2a2a2a',
          width: 230,
          height: 60,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '10px',
          borderRadius: '15px',
          color: '#eee',  }}>
        
          Check Out
          
        </ComingSoonBtn>

      </div>
    </>
  )
}

// ALL CSS

// const TagCss = makeStyles({
//   root: {
   
//   },
//   inner: {
    

//   }
// });