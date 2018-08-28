import React from 'react';
import ExampleLayout from '../layout/example';
import Style from '../styles/example.scss';

const example = () => {
	return (
		<ExampleLayout>
			<div className="row">
				<div className="col s12">
					<ul className="tabs">
						<li className="tab col s3">
							<a href="#basic">Basic</a>
						</li>
						<li className="tab col s3">
							<a className="active" href="#test2">
								Test 2
							</a>
						</li>
						<li className="tab col s3">
							<a href="#test3">Disabled Tab</a>
						</li>
						<li className="tab col s3">
							<a href="#test4">Test 4</a>
						</li>
					</ul>
				</div>
				<div id="basic" className="col s12">
					<div className="container">
						<div className="row">
							<div className="col s6">
								<h1>h1 example text</h1>
								<h2>h2 example text</h2>
								<h3>h3 example text</h3>
								<h4>h4 example text</h4>
								<h5>h5 example text</h5>
								<h6>h6 example text</h6>
								<p>this is p tag</p>
								<p className="flow-text">this is flow p tag</p>
							</div>
							<div className="col s6">
								<h4 className="hide-on-large-only">hide me on large screen</h4>
								<h4 className="hide-on-small-only">hide me on small screen</h4>
								<h4 className="hide-on-med-only">hide me on medium screen</h4>
								<h4 className="hide-on-med-and-down">hide me on medium&small screen</h4>
							</div>
						</div>
						<div className="row">
							<h5 className="indigo-text text-darken-3">font color</h5>
							<h5 className="center-align">center alignment</h5>
							<h5 className="right-align">right alignment</h5>
							<div className="grey lighten-2 vertical-box valign-wrapper">
								<h5>vertical alignment</h5>
							</div>
							<p className="truncate">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita officiis, voluptates
								incidunt praesentium dolorem ab quas voluptatem aliquid saepe, porro sit reprehenderit
								unde dignissimos vel molestiae? Explicabo eaque ipsa consectetur?
							</p>
						</div>
						<div className="row">
							<h4>Buttons</h4>
							<a href="" className="btn">
								Normal button
							</a>
							<a href="" className="btn-small">
								small button
							</a>
							<a href="" className="btn indigo darken-3 waves-effect waves-light">
								indigo button
							</a>
							<a href="" className="btn disabled">
								Disabled button
							</a>
							<h4>floating button</h4>
							<a href="" className="btn-floating pink pulse" />
							<h4>other button</h4>
							<div className="btn">i am a div tag</div>
						</div>
						<div className="row">
							<h4>Icons</h4>
							<i className="material-icons">add</i>
							<i className="material-icons pink-text darken-3">favorite_border</i>
							<h4>Icons on Button</h4>
							<a href="" className="btn-small">
								<span>send</span>
								<i className="material-icons right">send</i>
							</a>
							<a href="" className="btn-small">
								<span>email</span>
								<i className="material-icons left">email</i>
							</a>
							<h4>Icons on Button</h4>
							<a href="" className="btn-floating blue pulse">
								<i className="material-icons">add</i>
							</a>
							<a href="" className="btn-floating red">
								<i className="material-icons">delete</i>
							</a>
						</div>
					</div>
					<div className="container">
						<h4>grid system</h4>
						<div className="row">
							<div className="col s3">content</div>
							<div className="col s3">content</div>
							<div className="col s3">content</div>
							<div className="col s3">content</div>
						</div>
						<div className="row">
							<div className="col s6 m3">content</div>
							<div className="col s6 m3">content</div>
							<div className="col s6 m3">content</div>
							<div className="col s6 m3">content</div>
						</div>
						<div className="row">
							<h4>shadows & depth</h4>
							<div className="row shadow-depth-div">
								<div className="col s2 z-depth-1" />
								<div className="col s2 z-depth-2" />
								<div className="col s2 z-depth-3" />
								<div className="col s2 z-depth-5" />
							</div>
						</div>
					</div>
				</div>
				<div id="test2" className="col s12">
					Test 2
				</div>
				<div id="test3" className="col s12">
					Test 3
				</div>
				<div id="test4" className="col s12">
					Test 4
				</div>
			</div>
		</ExampleLayout>
	);
};

export default example;
