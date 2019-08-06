import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../store/helpers/authenticate';
import '../assets/css/login.scss';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            errors: {}
        }
        this.loginToFacebook = this.loginToFacebook.bind(this);
    }
    loginToFacebook(event){
        console.log('You clicked log in');
        event.preventDefault();
        this.props.loginUser(this.props.history);
    }
    componentWillReceiveProps(nextPrpos){
        if(nextPrpos.errors){
            this.setState({
                errors: nextPrpos.errors
            })
        }
    }
    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/');
        }
    }
    render() { 
        return ( 
            <div className="container">
                <form action="viewArticles.html" method="">
                    <h1>Authors Haven - Log In</h1>
                    <p>Log In below using:</p>
                    <img onClick={ this.loginToFacebook } src="../assets/img/facebook.png"/>
                    <img src="../assets/img/twitter.png"/>
                    <img src="../assets/img/gmail.png"/>
                </form>
            </div>
         );
    }
}

Login.propTypes = {
    loginUser:PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
    errors: state.errors,
    auth: state.auth
})

const loginConnect = connect(mapStateToProps, { loginUser })(Login)
 
export { loginConnect as Login };