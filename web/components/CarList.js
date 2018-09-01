import React, { Component } from 'react';
import Link from 'next/link';
import styles from '../styles/card.scss';

class CarList extends Component {
	render() {
		return (
			<div className="container">
				<div className={`${styles['course-title']} grey-text text-darken-3`}>
					<span>测试文字</span>
					<Link href={{ pathname: '/list', query: { name: 'Zeit' } }}>
						<i className="small material-icons href-more">more_horiz</i>
					</Link>
				</div>
				<div className="row">
					<div className="col s12 m4 l3">
						<div className="card">
							<div className="card-image">
								<img src="static/title-bg.jpg" />
								<span className="card-title">Card Title</span>
								<a className="btn-small btn-floating halfway-fab waves-effect waves-light  blue-grey">
									<i className="small material-icons">add</i>
								</a>
							</div>
							<div className="card-content course-content">
								<p>markup to use effectively.</p>
							</div>
						</div>
					</div>
					<div className="col s12 m4 l3">
						<div className="card">
							<div className="card-image">
								<img src="static/title-bg.jpg" />

								<span className="card-title">Card Title</span>
								<a className="btn-small btn-floating halfway-fab waves-effect waves-light blue-grey">
									<i className="small material-icons">add</i>
								</a>
							</div>
							<div className="card-content course-content">
								<p>markup to use effectively.</p>
							</div>
						</div>
					</div>
					<div className="col s12 m4 l3">
						<div className="card">
							<div className="card-image">
								<img src="static/title-bg.jpg" />
								<span className="card-title">Card Title</span>
								<a className="btn-small btn-floating halfway-fab waves-effect waves-light blue-grey">
									<i className="small material-icons">add</i>
								</a>
							</div>
							<div className="card-content course-content">
								<p>markup to use effectively.</p>
							</div>
						</div>
					</div>
					<div className="col s12 m4 l3">
						<div className="card">
							<div className="card-image">
								<img src="static/title-bg.jpg" />
								<span className="card-title">Card Title</span>
								<a className="btn-small btn-floating halfway-fab waves-effect waves-light blue-grey">
									<i className="small material-icons">add</i>
								</a>
							</div>
							<div className="card-content course-content">
								<p>markup to use effectively.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CarList;
