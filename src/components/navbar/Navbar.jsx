import React from 'react'
import { useState } from 'react';
import "./Navbar.scss"
import Search from '@material-ui/icons/Search';
import { Notifications } from '@material-ui/icons';
import {ArrowDropDown} from '@material-ui/icons';

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	window.onScroll = () => {
		setIsScrolled(window.pageYOffset === 0 ? false : true);
		return () => (window.onScroll = null);
	};
	return (
		<div className={isScrolled ? "navbar scrolled" : "navbar"}>
			<div className="container">
				<div className="left">
					<img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="netflix"/>
					<span>Homepage</span>
					<span>Series</span>
					<span>Movies</span>
					<span>New & Popular</span>
					<span>My List</span>
				</div>
				<div className="right">
					<Search className="icon"/>
					<span>KID</span>
					<Notifications className="icon"/>
					<img 
						src="https://www.freepnglogos.com/uploads/people-png/people-png-student-sitting-png-transparent-student-sitting-images-14.png" 
						alt="_"
					/>
					<div className="profile">
						<ArrowDropDown className="icon"/>
						<div className="options">
							<span>Settings</span>
							<span>Logout</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar