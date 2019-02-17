import React, { Component } from 'react';
import classes from './SkillsContainer.css';
import Skill from '../../../organisms/Skill/Skill';
import SectionTitle from '../../../atoms/Title/SectionTitle';


class SkillContainer extends Component {
		state = {
				skills: {
						frontend: [
								{id: '1', language: 'HTML'},
								{id: '2', language: 'CSS'},
								{id: '3', language: 'JavaScript'},
								{id: '4', language: 'Bootstrap'},
								{id: '5', language: 'JQuery'},
								{id: '6', language: 'React'}
						],
						server: [
								{id: '1', language: 'Node'},
								{id: '2', language: 'Express'},
								{id: '3', language: 'Ruby'},
								{id: '4', language: 'Ruby on Rails'},
								{id: '5', language: 'Java'},
								{id: '6', language: 'Spring Boot'}
						],
						infrastructure: [
								{id: '1', language: 'Heroku'},
								{id: '2', language: 'Firebase'},
								{id: '3', language: 'AWS'},
								{id: '4', language: 'Webpack'},
								{id: '5', language: 'Gulp'},
								{id: '6', language: 'Git'}
						],
						database: [
								{id: '1', language: 'MySQL'},
								{id: '2', language: 'MongoDB'}
						]
				}
		};

		render() {
				const frontend = this.state.skills.frontend.map(item => {
							return <li key={item.id}><Skill language={item.language} /></li>
				});
				const server = this.state.skills.server.map(item => {
						return <li key={item.id}><Skill language={item.language} /></li>
				});
				const infrastructure = this.state.skills.infrastructure.map(item => {
						return <li key={item.id}><Skill language={item.language} /></li>
				});
				const database = this.state.skills.database.map(item => {
						return <li key={item.id}><Skill language={item.language} /></li>
				});

				return (
						<div className={classes.SkillsContainer}>
								<h1 className={classes.SectionTitle}>Skills</h1>
								<div className={classes.Flex}>
										<div className={classes.List}>
												<h2>Front End</h2>
													<ul>
															{frontend}
													</ul>
										</div>
										<div className={classes.List}>
												<h2>Server Side</h2>
												<ul>
														{server}
												</ul>
										</div>
										<div className={classes.List}>
												<h2>Infrastructure</h2>
												<ul>
														{infrastructure}
												</ul>
										</div>
										<div className={classes.List}>
												<h2>Database</h2>
												<ul>
														{database}
												</ul>
										</div>
								</div>
						</div>
				);
		}
}

export default SkillContainer;
