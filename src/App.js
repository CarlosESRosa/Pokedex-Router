import React, { Component } from 'react'
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import PokemonDetails from './pages/PokemonDetails';
import About from './pages/About';
import Error404 from './pages/Error404';
import Favorites from './pages/Favorites';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      arrayFavorites: [],
    }
  }

  handleChange = ({ target }, pokeName) => {
    if (target.checked) {
      this.setState((prevState) => ({ arrayFavorites: [...prevState.arrayFavorites, pokeName] }),
        () => localStorage.setItem('pokesFavoritos', JSON.stringify(this.state.arrayFavorites)))
    } else {
      this.setState((prevState) => ({ arrayFavorites: prevState.arrayFavorites.filter((element) => element !== pokeName) }),
        () => localStorage.setItem('pokesFavoritos', JSON.stringify(this.state.arrayFavorites)))
    }
  }

  render() {
    const { arrayFavorites } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <h1> Pokedex </h1>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/favorite-pokemon'>Favorite Pokemon</Link>
          <Switch>
            <Route
              path={`/pokemons/:id`}
              render={(props) => (<PokemonDetails {...props} callback={this.handleChange} favoritos={arrayFavorites} />)}
            />
            <Route exact path="/" ><Pokedex pokemons={pokemons} favoritos={arrayFavorites} /></Route>
            <Route path="/about" component={About} />
            <Route path="/favorite-pokemon"><Favorites favoritos={arrayFavorites} /></Route>
            <Route path="*" component={Error404} />
          </Switch>
          {/* <Pokedex pokemons={pokemons} />*/}
        </div>
      </BrowserRouter>
    )
  }
}
