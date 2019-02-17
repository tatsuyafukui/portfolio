import React from 'react';
import classes from './Product.css';
import Zoom from "../../molecules/Zoom/Zoom";

const Product = (props) => {
		return (
				<div className={classes.Product}>
						<a href={props.url}>
								<div className={classes.ProductImage} style={{backgroundImage: `url(${props.image})`}}>
										<Zoom
												id={props.id}
												title={props.title}
												content={props.content}
										>
										</Zoom>
								</div>
								<div className={classes.Device}>
										<h2>{props.title}</h2>
										<p>{props.content}</p>
								</div>
						</a>
				</div>
		);
};

export default Product;
