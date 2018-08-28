import React from 'react';
import DefaultLayout from '../layout/default';
import '../styles/about.scss';

export default () => {
	return (
		<DefaultLayout>
			<section className="container">
				<div className="row">
					<div className="card horizontal z-depth-0">
						<div className="card-image">
							<img className="responsive-img materialboxed" src="static/head-bg.jpg" />
						</div>
						<div className="card-stacked">
							<div className="card-content">
								<span className="card-title">Card Title</span>
								<p className="hide-on-small-only">
									I am a very simple card. I am good at containing small bits of information.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="card horizontal z-depth-0">
						<div className="card-stacked">
							<div className="card-content">
								<span className="card-title">Card Title</span>
								<p>I am a very simple card. I am good at containing small bits of information.</p>
							</div>
						</div>
						<div className="card-image">
							<img src="static/learn-time.jpg" />
						</div>
					</div>
				</div>

				<div className="row">
					<div className="card horizontal z-depth-0">
						<div className="card-image">
							<img src="static/head-bg.jpg" />
						</div>
						<div className="card-stacked">
							<div className="card-content">
								<span className="card-title">Card Title</span>
								<p>I am a very simple card. I am good at containing small bits of information.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</DefaultLayout>
	);
};
