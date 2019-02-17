import React from 'react';
import classes from './HomeMain.css';
import OverRay from '../../../atoms/CommonCss/OverRay/OverRay';
import Profile from '../../../atoms/ProfileImage/Profile';
import Header from '../../../organisms/Header/Header'


const HomeComponent = () => {
				return (
						<div className={classes.Home}>
								<OverRay>
										<Header />
										<div className={classes.Container}>
												<Profile />
												<h1 className={classes.HomeTitle}>Tatsuya's Portfolio Site</h1>
												<p className={classes.DetailButton}>Get In Touch</p>
										</div>
								</OverRay>
						</div>
				);
};

export default HomeComponent;
