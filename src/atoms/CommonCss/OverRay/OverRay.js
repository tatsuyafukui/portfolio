import React from 'react';
import classes from './OverRay.css'

const OverRay = (props) => (
				<div className={classes.OverRay}>
						{props.children}
				</div>
);

export default OverRay;
