import React, { Component } from 'react';

class Contact extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col s12 l6">
						<h5>Contact us</h5>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, maiores explicabo! Et
							harum repellendus reiciendis deserunt iste voluptatum facilis minima ea quae possimus,
							beatae magnam recusandae labore animi eveniet distinctio. Porro velit, iure aperiam corrupti
							ratione sapiente optio fugiat! Nisi, facere, voluptatem itaque dolores quam laborum
							blanditiis minus nemo
						</p>
					</div>
					<div className="col s12 l6">
						<form action="">
							<div className="input-field">
								<i className="small material-icons prefix">email</i>
								<input type="email" id="email" />
								<label htmlFor="email">your email</label>
							</div>
							<div className="input-field">
								<i className="small material-icons prefix">message</i>
								<input type="text" id="message" className="materialize-textarea" />
								<label htmlFor="message">your message</label>
							</div>
							<div className="input-field">
								<i className="small material-icons prefix">timer</i>
								<input type="text" id="date" className="datepicker" />
								<label htmlFor="date">choose date</label>
							</div>
							<a class="waves-effect waves-light btn grey darken-4 right">
								<i class="material-icons right">send</i>send
							</a>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
