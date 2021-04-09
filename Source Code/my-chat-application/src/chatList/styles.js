const styles = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      height: 'calc(100% - 35px)',
      position: 'absolute',
      left: '0',
      width: '300px',
      boxShadow: '0px 0px 2px black',
      //backgroundColor: '#0278ae',
    },
    listItem: {
      cursor: 'pointer',
      //color: 'white'
    },
    newChatBtn: {
      borderRadius: '0px',
      backgroundColor:'#0278ae',
      color:'white',
      '&:hover':{
        backgroundColor:'#151f63'
      }
      
    },
    unreadMessage: {
      color: 'red',
      position: 'absolute',
      top: '0',
      right: '5px'
    },

    messageColor: {
       //color: 'white'
    }
  });
  
  export default styles;