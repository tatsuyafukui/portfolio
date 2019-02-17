import React from 'react';
import classes from './Header.css';
import DropMenu from '../Menu/DropMenu/DropMenu'

const Header = (props) => (
		<div className={classes.Header}>
				<DropMenu />
		</div>
);

export default Header;
