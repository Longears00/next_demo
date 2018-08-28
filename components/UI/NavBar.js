import React, { Component } from 'react';
import Link from 'next/link';

class NavBar extends Component {
	componentDidMount() {
		console.log('111');
		let elems = document.querySelectorAll('.sidenav');
	}
	render() {
		return (
			<div>
				<nav>
					<div className="nav-wrapper grey darken-3">
						<div className="container">
							<a href="#" className="brand-logo">
								Logo
							</a>
							<a href="#" data-target="slide-out" className="sidenav-trigger hide-on-large-only">
								<i className="material-icons">menu</i>
							</a>
							<ul id="nav-mobile" className="right hide-on-med-and-down">
								<li>
									<Link href={{ pathname: '/' }}>
										<a>Home</a>
									</Link>
								</li>
								<li>
									<a href="#contact">Contact</a>
								</li>
								<li>
									<Link href={{ pathname: '/about' }}>
										<a>About</a>
									</Link>
								</li>
								<li>1</li>
								<li>
									<a href="" className="btn-floating grey darken-4 z-depth-0">
										<i className="material-icons">notifications</i>
									</a>
									<span className="badge white-text  blue-grey darken-2 new">5</span>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<ul id="slide-out" ref={(e) => (this.sidenav = e)} className="sidenav">
					<li>
						<a href="sass.html">Sass</a>
					</li>
					<li>
						<a href="badges.html">Components</a>
					</li>
					<li>
						<a href="collapsible.html">JavaScript</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default NavBar;
