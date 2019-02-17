import React, { Component } from 'react';
import classes from './Challenge.css';
import SectionTitle from '../../../atoms/Title/SectionTitle';


class Challenge extends Component {

		state = {
				challenge: [
						{id: '1', name: 'Alexa Skill'},
						{id: '2', name: 'Illustrator'},
						{id: '3', name: 'react&redux'},
						{id: '4', name: 'TypeScript'},
						{id: '5', name: 'react native'},
						{id: '6', name: 'Piano'}
				]
		};

		render() {


				const list = this.state.challenge.map(item => {
						return (
								<li key={item.id}>
										<h3>{item.name}</h3>
								</li>
						);
				});


				return (
						<div className={classes.Challenge}>
								<h2 id={'Interested'}>Interested</h2>
								<ul className={classes.Flex}>
										{list}
								</ul>
						</div>
				);
		}
}

export default Challenge;
