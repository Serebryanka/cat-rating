import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import TextField from '@material-ui/core/TextField';
import './App.css';
import CatList from './components/cat-list';
import CatSearch from './components/cat-search';

/*const cats = [
	{
		id: 1,
		name: "Kisa",
		icon: "https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1770700/1160/772/m1/fpnw/wm0/black-cat-icon-flat-01-.jpg?1476726021&s=c956a64f60cd25e39dcd353c52e188a1",
	},
	{
		id: 2,
		name: "Kotya",
		icon: "https://cdn3.iconfinder.com/data/icons/cat-force/256/cat_hungry.png",
	},
];*/

class App extends Component {
	state = {
		text: "Pelmeshki",
		icon: "Tefteli",
		name: "Gribochki",
		nextID: 3,
		cats: [
			{
				id: 1,
				name: "Kisa",
				icon: "https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1770700/1160/772/m1/fpnw/wm0/black-cat-icon-flat-01-.jpg?1476726021&s=c956a64f60cd25e39dcd353c52e188a1",
				like: true,
			},
			{
				id: 2,
				name: "Kotya",
				icon: "https://cdn3.iconfinder.com/data/icons/cat-force/256/cat_hungry.png",
				like: true,
			},
		],
		filteredName: '',
	}
	handleButtonClick = () => {
		const {icon, name, cats, nextID} = this.state;
		const newCat = {
			id: nextID,
			name: name,
			icon: icon,
			like: true,
		};
		this.setState({
			cats: cats.concat(newCat),
			nextID: nextID + 1,
			text: "Vareniki",
		})
	};
	handleCatDelete = (id) => {
		const {cats} = this.state;
		this.setState({
			cats: cats.filter(cat => cat.id !== id),
		})
	};
	handleIconChange = event => {
    this.setState({
      icon: event.target.value,
    });
  };
	handleNameChange = event => {
    this.setState({
      name: event.target.value,
    });
  };
	handleLikeChange = (id) => {
		const {cats} = this.state;
		this.setState({
			cats: cats.map(cat => {
				return cat.id === id ? {
						...cat,
						like: !cat.like,
					} : cat;
			}),
		})
  };
	handleFilteredNameChange = name => {
		this.setState({
      filteredName: name,
    });
  };
  render() {
		const {text, icon, name, cats, filteredName} = this.state;
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
					<CatSearch
						onSearchChanged={this.handleFilteredNameChange}
					/>
					<div>
						<CatList
							cats={cats.filter(cat => cat.name.toLowerCase().indexOf(filteredName.toLowerCase()) !== -1)}
							onDelete={this.handleCatDelete}
							onLikeChanged={this.handleLikeChange}
						/>
		      </div>
					<TextField
	          id="outlined-icon"
	          label="Icon"
						value={icon}
          	onChange={this.handleIconChange}
	          margin="normal"
	          variant="outlined"
	        />
					<TextField
	          id="outlined-name"
						label="Name"
	          value={name}
          	onChange={this.handleNameChange}
	          margin="normal"
	          variant="outlined"
	        />
					<Button
						variant="contained"
						color="secondary"
						onClick={this.handleButtonClick}
					>
		        Add Kotik
		      </Button>
        </header>
      </div>
    );
  }
}

export default App;
