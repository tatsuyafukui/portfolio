import React from 'react';
import classes from './SectionTitle.css';

const SectionTitle = (props) => (
		<h1 className={classes.SectionTitle}>
				{props.title}
		</h1>
);

export default SectionTitle;