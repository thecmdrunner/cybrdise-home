import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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