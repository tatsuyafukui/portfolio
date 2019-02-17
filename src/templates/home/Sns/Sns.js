import React, { Component } from 'react';
import classes from './Sns.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faFacebookSquare, faTwitterSquare, faGithub} from '@fortawesome/free-brands-svg-icons';
class Sns extends Component {
		state = {
				sns: [
						{id: '1', media: 'Twitter', link: 'https://twitter.com/ingtaTsuya_0801', logo:	<FontAwesomeIcon icon={faTwitterSquare} />},
						{id: '5', media: 'Facebook', link: 'https://www.facebook.com/tatsuya.fukui.980', logo:	<FontAwesomeIcon icon={faFacebookSquare} />},
						{id: '3', media: 'github', link: 'https://github.com/tatsuyafukui', logo: <FontAwesomeIcon icon={faGithub} />},
						{id: '2', media: 'note', link: 'https://note.mu/tatsuya6', logo: null},
						{id: '4', media: 'Qiita', link: 'https://qiita.com/tatsuyafukui', logo: null}

				]
		};


		render(){


				const snsList = this.state.sns.map(item => {
						return (
								<li key={item.id}>
										<a href={item.link}><span>{item.logo}</span>{item.media}</a>
								</li>
						);
				});


				return (
						<div className={classes.Sns} id={'SNS'}>
								<ul className={classes.Ul}>
										{snsList}
								</ul>
						</div>
				);
		}
}

export default Sns;
