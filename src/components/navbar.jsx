import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../store/helpers/authenticate';
import { withRouter } from 'react-router-dom';

class NavBar extends Component {
	onLogout(event) {
		event.preventDefault();
		this.props.logoutUser();
		this.props.history.push('/login')
	}
	render() {
		const { isAuthenticated, user } = this.props.auth;
		const authLinks = (
			<ul>
				<li>
					<Link to="/">Welcome to Author Haven {user.username}</Link>
				</li>
				<li onClick={this.onLogout.bind(this)}><a href="#">Logout</a></li>
			</ul>
		);
		const unAuthLinks = (
			<ul>
				<li>
					<Link to="/login">Login</Link>
				</li>
			</ul>
		);
		return (
			<div className="menu-header">
				<img src="../assets/img/writing.png" id="logo" />
				<a href="#" id="menu-icon" />
				<div className="menu-left">{isAuthenticated ? authLinks : unAuthLinks}</div>
			</div>
		);
	}
}

NavBar.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
	auth: state.auth
})

const navBarConnect = connect(mapStateToProps, {logoutUser})(withRouter(NavBar));

export { navBarConnect as NavBar };
