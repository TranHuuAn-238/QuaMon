import { Link } from 'react-router-dom';
import React from 'react';
import styles from './styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import firebase from 'firebase/app';
import { colors } from '@material-ui/core';
require('firebase/auth')

class LoginComponent extends React.Component{
constructor(){
    super();
    this.state ={
        email: null,
        password: null,
        loginError:''
    }; 
}

    render(){
        const {classes} = this.props;
        return(
            <main className={classes.main}>
                <CssBaseline></CssBaseline>
                <Paper className={classes.paper}>
                    <Typography component='h1' variant='h5'>
                        Welcome
                    </Typography>
                    <form className={classes.form} onSubmit={(e)=>this.submitLogin(e)}>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='login-email-input'>Enter your Email</InputLabel>
                            <Input className={classes.labelColor} autoComplete='email' autoFocus id='login-email-input' onChange={(e)=>this.userTyping('email',e)}></Input>
                        </FormControl>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='login-password-input'>Enter your Password</InputLabel>
                            <Input  type='password' id='login-password-input' onChange={(e)=>this.userTyping('password',e)}></Input>
                        </FormControl>
                        <Button type='submit' fullWidth className={classes.submit}>Log In</Button>
                    </form>
                    {
                        this.state.loginError?
                        <Typography className={classes.errorText} componet='h5' variant='h6'>
                            Incorrect Login information
                        </Typography>: null
                    }
                    <h5 className={classes.noAccountHeader}>Don't have an Account?</h5>
                    <Link className={classes.signUpLink} to='/signup'>Sign Up</Link>
                </Paper>

            </main>
        );
    }
    userTyping = (type,e) => {
        switch(type){
            case 'email':
                this.setState({email: e.target.value});
                break;
            case 'password':
                this.setState({password: e.target.value});
                break;

            default:
                break;
        }
    }
    
    submitLogin = (e) => {
        e.preventDefault();
        
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(()=>{
            this.props.history.push('/dashboard');
        }, err =>{
             this.setState({loginError:'Server error'});
             console.log(err);
        });
        
    }
}


export default withStyles(styles)(LoginComponent);