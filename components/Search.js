import React, { Component } from 'react';
import styles from '../styles/search.scss';

class Search extends Component {
	render() {
		return (
			<div className="search-bg">
				<div className="row">
					<form className="col s12">
						<div className="input-field col s6">
							<input id="search" type="search" required />
							<label htmlFor="icon_telephone">Search</label>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Search;
