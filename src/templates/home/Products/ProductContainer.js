import React, { Component } from 'react';
import Product from '../../../organisms/Product/Product';
import lunchImage from '../../../assetts/images/lunch.png';
import letterImage from '../../../assetts/images/letter.png';
import bomImage from '../../../assetts/images/bom.png';
import stampImage from '../../../assetts/images/stamp.png';

import SectionTitle from '../../../atoms/Title/SectionTitle';

import classes from './ProductContainer.css';

class ProductContainer extends Component {

		state = {
				products: [
						{
								id: '0',
								title: 'letterletterletter',
								content: 'メッセージを簡単に手書き風の手紙にして送れるサービスです。',
								use: 'Ruby on Rails',
								url: 'https://letterletterletter.herokuapp.com/',
								image: letterImage
						},
						{
								id: '1',
								title: 'treetmeet',
								content: 'ビズネスランチマッチングサイトです。リニューアル作業中です。',
								use: 'Node express',
								url: 'https://www.treetmeet.com/',
								image: lunchImage
						},
						{
								id: '2',
								title: '1/2 Bom',
								content: '1/2でお酒が飲めるiosアプリです。僕のスマホでのみ使えます。',
								use: 'swift',
								url: '#',
								image: bomImage
						},
						{
								id: '3',
								title: 'Line Stamp',
								content: 'イラレ使い始めたのでLINEスタンプを作ってみました',
								use: 'Adobe illustrator',
								url: 'https://store.line.me/stickershop/product/6212496',
								image: stampImage
						}
				]
		};

		render() {
				const Products = this.state.products.map(item => {
						return (
								<li key={item.id}>
										<Product
												id={item.id}
												title={item.title}
												content={item.content}
												language={item.use}
												url={item.url}
												image={item.image}
										/>
								</li>
						);
				});

				return (
						<div className={classes.ProductContainer}>
								<h2 id={'Products'}>Products</h2>
								<ul>
										{Products}
								</ul>
						</div>
				);
		}
}

export default ProductContainer;
