import React from 'react';
import classes from './Product.css';
import Zoom from "../../molecules/Zoom/Zoom";

const Product = (props) => {
		return (
				<div className={classes.Product}>
						<a href={props.url} className={classes.parent}>
								<div className={classes.ProductImage} style={{backgroundImage: `url(${props.image})`}}>
										<Zoom
												id={props.id}
												title={props.title}
												content={props.content}
												language={props.language}
										>
										</Zoom>
								</div>
						</a>
						<div className={classes.Device}>
								<h2>{props.title}</h2>
								<p>{props.content}</p>
								<p>{props.language}</p>
						</div>
				</div>
		);
};

export default Product;
