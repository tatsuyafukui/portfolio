import React, { Component } from 'react';
import classes from './Challenge.css';
import SectionTitle from '../../../atoms/Title/SectionTitle';


class Challenge extends Component {

		state = {
				challenge: [
						{id: '1', name: 'Alexa Skill', content: '現状チュートリアルレベル'},
						{id: '2', name: 'Illustlator', content: 'イラスト・アイコンなど'},
						{id: '3', name: 'react&redux', content: 'フロントをもっと高めたい！'},
						{id: '4', name: 'TypeScript', content: 'react安定したら'},
						{id: '5', name: 'react native', content: '少しだけ触ってます'},
						{id: '6', name: 'Piano', content: '少しだけ触ってます'}
				]
		};

		render() {


				const list = this.state.challenge.map(item => {
						return (
								<li key={item.id}>
										<h3>{item.name}</h3>
										<p>{item.content}</p>
								</li>
						);
				});


				return (
						<div className={classes.Challenge}>
								<SectionTitle title={'Interested'} />
								<ul className={classes.Flex}>
										{list}
								</ul>
						</div>
				);
		}
}

export default Challenge;
