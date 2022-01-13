import React from 'react';
import './pokemon.css';
import { Link } from 'react-router-dom';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image, id } = this.props.pokemon;
    const { favoritos } = this.props;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={image} alt={`${name} sprite`} />
        <Link to={`pokemons/${id}`}>More infos</Link>
        {favoritos.some((element) => element === name) && <i className="fas fa-star"></i>}
        {/*<i className=''></i>*/}
      </div>
    );
  }
}

export default Pokemon;