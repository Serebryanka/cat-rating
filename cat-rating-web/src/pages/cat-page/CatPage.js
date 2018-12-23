import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import CatList from '../../containers/cat-list';
import CatSearch from '../../components/cat-search';
import CatSort from '../../components/cat-sort';
import CatAdd from '../../containers/cat-add';


class CatPage extends Component {
	state = {
		text: "Pelmeshki",
		filteredName: '',
		sortField: '',
	}
	handleFilteredNameChange = name => {
		this.setState({
      filteredName: name,
    });
  };
	handleSortChange = sortBy => {
		this.setState({
			sortField: sortBy,
		})
	}
  render() {
		const {text, filteredName, sortField} = this.state;
		/*const sortedCats = cats;
		sortedCats.sort((catA, catB) => {
			if (sortField === 'Name') {
				if (catA.name.toLowerCase() < catB.name.toLowerCase())
			    return -1;
			  if (catA.name.toLowerCase() > catB.name.toLowerCase())
			    return 1;
			  return 0;
			} else if (sortField === 'Like') {
				if (catA.like < catB.like)
			    return -1;
			  if (catA.like > catB.like)
			    return 1;
			  return 0;
			}
			return 0;
		});

		cats={(sortField === '' ? sortedCats : cats)
		  .filter(cat => cat.name.toLowerCase().indexOf(filteredName.toLowerCase()) !== -1)}
		*/
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
					<CatSort
						onSortChange={this.handleSortChange}
					/>
					<CatSearch
						onSearchChanged={this.handleFilteredNameChange}
					/>
					<div>
						<CatList />
		      </div>
					<CatAdd />
        </header>
      </div>
    );
  }
}

export default CatPage;
