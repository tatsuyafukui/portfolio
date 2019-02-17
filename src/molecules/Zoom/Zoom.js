import React, { Component } from 'react';
import classes from './Zoom.css';

class Zoom extends Component {



		overHandler(index){
				document.querySelectorAll(`.${classes.ProductText}`)[index].style.display = 'block';
		}

		outHandler = (index) => {
				document.querySelectorAll(`.${classes.ProductText}`)[index].style.display = 'none';
		};

		render() {

				const id = parseInt(this.props.id);

				return (
						<div
								className={classes.Zoom}
								onMouseOver={() => this.overHandler(id)}
								onMouseOut={() => this.outHandler(id)}
						>
										<div className={classes.ProductText}>
												<h2>{this.props.title}</h2>
												<p>{this.props.content}</p>
										</div>
						</div>
				);
		}
}

export default Zoom;
