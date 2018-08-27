import React, { Component } from 'react';
import styles from '../styles/card.scss';

class CarList extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col s12 m4">
						<div className="card">
							<div className="card-image">
								<img src="static/title-bg.jpg" />
								<span className="card-title">Card Title</span>
								<a className="btn-floating halfway-fab waves-effect waves-light  blue-grey">
									<i className="material-icons">add</i>
								</a>
							</div>
							<div className="card-content course-content">
								<p>
									I am a very simple card. I am good at containing small bits of information. I am
									convenient because I require little markup to use effectively.
								</p>
							</div>
						</div>
					</div>
					<div className="col s12 m4">
						<div className="card">
							<div className="card-image">
								<img src="static/title-bg.jpg" />
								<span className="card-title">Card Title</span>
								<a className="btn-floating halfway-fab waves-effect waves-light blue-grey">
									<i className="material-icons">add</i>
								</a>
							</div>
							<div className="card-content course-content">
								<p>
									I am a very simple card. I am good at containing small bits of information. I am
									convenient because I require little markup to use effectively.
								</p>
							</div>
						</div>
					</div>
					<div className="col s12 m4">
						<div className="card">
							<div className="card-image">
								<img src="static/title-bg.jpg" />
								<span className="card-title">Card Title</span>
								<a className="btn-floating halfway-fab waves-effect waves-light blue-grey">
									<i className="material-icons">add</i>
								</a>
							</div>
							<div className="card-content course-content">
								<p>
									I am a very simple card. I am good at containing small bits of information. I am
									convenient because I require little markup to use effectively.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CarList;
