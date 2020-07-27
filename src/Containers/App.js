import React, { Fragment, Component } from 'react';
import './App.css';
import CardList from '../Components/CardList';
import ErrorBoundary from '../Components/ErrorBoundary';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';

class App extends Component {
  constructor() {
      super();
      this.state = {
          pokemons: [],
          searchfield:''
      }
  }
  
  componentDidMount() {
    const interval = {
      limit: 150,
      offset: 1
    }
    const Pokedex = require('pokedex-promise-v2');
    const P = new Pokedex();
    P.getPokemonsList(interval)
    //.then(response => this.setState({ pokemons: response.results }));
    .then(response => {
        const urls = response.results.map(result => result.url);
        
        Promise.all(urls.map(u => fetch(u)))
        .then(responses => Promise.all(responses.map(res => res.json())))
        .then(monsters => {
            this.setState({ pokemons: monsters });
        });
    });
  }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { pokemons, searchfield } = this.state;
        const filteredPokemons = pokemons.filter(pokemon => pokemon.forms[0].name.toLowerCase().includes(searchfield.toLowerCase()));
      
      if (!pokemons.length) {
          return <h1 className='tc pv7'>Loading...</h1>
      } else {
          return (
              <Fragment>
                  <div className='tc'>
                      <h1 className='f1'>PokeWebDex</h1>
                      <SearchBox searchChange={this.onSearchChange}/>
                      <Scroll>
                          <ErrorBoundary>
                              <CardList pokemons={filteredPokemons}/>
                          </ErrorBoundary>
                      </Scroll>
                  </div>
              </Fragment>
          );
      }
  }
}

export default App;
