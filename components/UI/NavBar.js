import React, { Component } from 'react';
import Link from 'next/link';

class NavBar extends Component {
	componentDidMount() {
		let elems = document.querySelectorAll('.sidenav');
		let instances = M.Sidenav.init(elems, {});
		instances.isOpen = true;
	}
	render() {
		return (
			<div className="navbar-fixed">
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
				</ul>
			</div>
		);
	}
}

export default NavBar;
