import React from 'react';
import classes from './HomeMain.css';
import OverRay from '../../../atoms/CommonCss/OverRay/OverRay';
import Profile from '../../../atoms/ProfileImage/Profile';
import Header from '../../../organisms/Header/Header';
import DropMenu from '../../../organisms/Menu/DropMenu/DropMenu';


const clickHandler = () => {

		const text = document.querySelector(`.${classes.DetailButton}`);

		if (text.textContent === 'Get In Touch') {
				text.textContent = 'Welcome!!';
				document.querySelector(`.${classes.Home} img`).style.display = 'block';
		}

};

const HomeComponent = () => {
				return (
						<div className={classes.Home}>
								<OverRay>
										<Header />
										<div className={classes.Container}>
												<Profile image={classes.Image} />
												<h1 className={classes.HomeTitle}>Tatsuya's Portfolio Site</h1>
												<p className={classes.DetailButton} onClick={clickHandler}>Get In Touch</p>
												<div className={classes.Box}>
														<DropMenu />
												</div>
										</div>
								</OverRay>
						</div>
				);
};

export default HomeComponent;
