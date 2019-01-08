import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import CatList from '../../containers/cat-list';
import CatSearch from '../../containers/cat-search';
import CatSort from '../../containers/cat-sort';
import CatAdd from '../../containers/cat-add';


class CatsPage extends Component {
	state = {
		text: "Pelmeshki",
	}

  render() {
		const {text} = this.state;
		return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {text}
          </a>
					<CatSort />
					<CatSearch />
					<div>
						<CatList />
		      </div>
					<CatAdd />
        </header>
      </div>
    );
  }
}

export default CatsPage;
