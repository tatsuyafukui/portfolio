import React from 'react';
import classes from './Profile.css';
import image from '../../assetts/images/profile.jpg';

const Profile = (props) => (
		<>
				<img className={classes.Image} src={image} />
		</>
);

export default Profile;
