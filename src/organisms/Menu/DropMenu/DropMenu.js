import React from 'react';
import classes from './DropMenu.css';
import DropDetail from './DropDetail';

const DropMenu = () => {

		const items = [
				{id: '0', menu: 'About', link: '/#About'},
				{id: '1', menu: 'Products', link: '/#Products'},
				{id: '2', menu: 'Skills', link: '/#Skills'},
				{id: '3', menu: 'Interested', link: '/#Interested'},
				{id: '4', menu: 'SNS', link: '/#SNS'}
		];


		return (
				<div className={classes.Menu}>

						<DropDetail
								items={items}
						/>
				</div>
		);
};

export default DropMenu;
