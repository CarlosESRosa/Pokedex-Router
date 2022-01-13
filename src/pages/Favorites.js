import React, { Component } from 'react'
import pokemons from '../data';
import Pokemon from '../Pokemon';

export default class Favorites extends Component {
  constructor() {
    super();

    this.state = {
      arrayFavorites: [],
    }
  }

  componentDidMount() {
    this.setState({ arrayFavorites: JSON.parse(localStorage.getItem('pokesFavoritos')) })
  }


  render() {
    const { favoritos } = this.props;
    const { arrayFavorites } = this.state;
    const arr = arrayFavorites.length === 0 ? favoritos : arrayFavorites;
    return (
      <div>
        {pokemons
          .filter((element) => arr.includes(element.name))
          .map((pokes) => <Pokemon pokemon={pokes} favoritos={favoritos} key={pokes.id} />)
        }
      </div>
    )
  }
}
