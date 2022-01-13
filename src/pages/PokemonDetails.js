import React, { Component } from 'react'
import pokemons from '../data'
import Pokemon from '../Pokemon';

export default class PokemonDetails extends Component {
  render() {
    const { match, callback, favoritos } = this.props;
    this.pokemon = pokemons.find((element) => element.id == match.params.id)
    return (
      <div>
        <Pokemon pokemon={this.pokemon} favoritos={favoritos} />

        <h1>Summary</h1>
        <p>{this.pokemon.summary}</p>

        {this.pokemon.foundAt.map((mapas) => {
          if (mapas.map) {
            return <img src={mapas.map} className='area-map' key={Math.random()}></img>
          } else {
            alert('ta quebrado')
          }
        })
        }
        <h3>Favoritar Pokemon?</h3>
        <input type='checkbox' onChange={(event) => callback(event, this.pokemon.name)} />
      </div>
    )
  }
}
