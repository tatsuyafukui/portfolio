import React, { Component } from 'react';
import classes from './HomeContainer.css';

import Top from './Top/HomeMain';
import ProductContainer from './Products/ProductContainer';
import SkillContainer from "./Skills/SkillsContainer";
import Challenge from "./Challenges/Challenge";

class HomeContainer extends Component {

		render() {
				return (
						<div className={classes.ProductContainer}>
								<Top />
								<ProductContainer />
								<SkillContainer />
								<Challenge />
						</div>
				);
		}
}

export default HomeContainer;
