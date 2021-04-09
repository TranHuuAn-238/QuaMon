const styles = theme => ({

    content: {
      height: 'calc(100vh - 100px)',
      overflow: 'auto',
      padding: '25px',
      marginLeft: '300px',
      boxSizing: 'border-box',
      overflowY: 'scroll',
      top: '50px',
      width: 'calc(100% - 300px)',
      position: 'absolute'
    },
  
    userSent: {
      float: 'right',
      clear: 'both',
      padding: '20px',
      boxSizing: 'border-box',
      wordWrap: 'break-word',
      marginTop: '10px',
      backgroundColor: '#eff0f1',
      //color: 'white',
      width: '300px',
      borderRadius: '10px'
    },

  
    friendSent: {
      float: 'left',
      clear: 'both',
      padding: '20px',
      boxSizing: 'border-box',
      wordWrap: 'break-word',
      marginTop: '10px',
      backgroundColor: '#0278ae',
      color: 'white',
      width: '300px',
      borderRadius: '10px'
    },

  
    chatHeader: {
      width: 'calc(100% - 301px)',
      height: '50px',
      backgroundColor: '#0278ae',
      position: 'fixed',
      marginLeft: '301px',
      fontSize: '18px',
      textAlign: 'center',
      color: 'white',
      paddingTop: '10px',
      boxSizing: 'border-box'
    },

    sendDateUser: {
      fontSize: 11,
      color: 'gray'
    },
    sendDateFriend: {
      fontSize: 11,
      //color: 'white'
    }
  
  });
  
  export default styles;