import React from 'react';
import classes from './DropMenu.css';

const DropDetail = (props) => {

		const items = props.items.map(item => {
				return <li key={item.id}><a href={item.link}>{item.menu}</a></li>
		});

		return (
				<ul className={classes.Menu}>
						{items}
				</ul>
		);
};

export default DropDetail;
