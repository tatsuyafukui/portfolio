import React from 'react';
import classes from './DropMenu.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const DropDetail = (props) => {

		const items = props.items.map(item => {
				return <li key={item.id}><AnchorLink href={item.link}>{item.menu}</AnchorLink></li>
		});

		return (
				<ul className={classes.Menu}>
						{items}
				</ul>
		);
};

export default DropDetail;
