import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import {Link} from 'react-router-dom';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import firebase from 'firebase/app';
import styles from './styles';

require('firebase/auth')
class SignupComponent extends React.Component{

    constructor(){
        super();
        this.state ={
            email: null,
            password: null,
            passwordConfirmation: null,
            signupError: ''

        };
    }
    render(){

        const { classes } = this.props;


        return(
            <main className={classes.main}>
                <CssBaseline></CssBaseline>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant = 'h5'>
                        Sign Up
                    </Typography>
                    <form onSubmit={(e) =>this.submitSignup(e)} className={classes.form}>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='signup-email-input'>Enter your Email</InputLabel>
                            <Input autoComplete='email' onChange={(e)=> this.userTyping('email',e)} autoFocus id='signup-email-input'></Input>
                        </FormControl>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='signup-password-input'>Create a Password</InputLabel>
                            <Input type='password' id='signup-password-input' onChange={(e)=> this.userTyping('password',e)}></Input>
                        </FormControl>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='signup-password-confirmation-input'>Confirm your Password</InputLabel>
                            <Input type='password' id='signup-password-confirmation-input' onChange={(e)=> this.userTyping('passwordConfirmation',e)}></Input>
                        </FormControl>
                        <Button type='submit' fullWidth className={classes.submit}>Submit</Button>
                    </form>
                    {
                        this.state.signupError ? 
                        <Typography class={classes.errorText} component='h5' variant='h6'>
                            {this.state.signupError}
                        </Typography> :
                        null
                    }
                    <h4 className={classes.hasAccountHeader}>Already have an Acount?</h4>
                    <Link className={classes.logInLink}to='/login'>Log In</Link>
                </Paper>
            </main>
        );
    }
    submitSignup = (e) => {
        e.preventDefault();
        if(!this.formIsValid()){
            this.setState({signupError: 'Passwords do not match'});
            return;
        }
        firebase.auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(authRes =>{
            const userObj ={
                email: authRes.user.email
            };
            firebase.firestore().collection('users')
            .doc(this.state.email)
            .set(userObj).then(()=> {
                this.props.history.push('/login');
            }, dbError =>{
                console.log(dbError);
                this.setState({signupError: 'Failed to add User'});
            })
        }, authError =>{
            console.log(authError);
            this.setState({signupError: 'Failed to add User:('});
        })

    }
    
    formIsValid = () => this.state.password === this.state.passwordConfirmation;

    userTyping = (type,e) =>{
        switch(type){
            case 'email':
                this.setState({email: e.target.value});
                break;

            case 'password':
                this.setState({password: e.target.value});
                break;

            case 'passwordConfirmation':
                this.setState({passwordConfirmation: e.target.value});
                break; 

            default:
                break;
        }

    }
}

export default withStyles(styles)(SignupComponent);