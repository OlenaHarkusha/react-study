import { Component } from 'react';

export class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      this.setState({ loading: true });
      this.setState({ pokemon: null });
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
        .then(r => {
          if (r.ok) {
            return r.json();
          }
          return Promise.reject(
            new Error(`No pokemon with name ${this.props.pokemonName}`)
          );
        })
        .then(pokemon => {
          console.log(pokemon);
          return this.setState({ pokemon });
        })
        .catch(error => this.setState({ error }))
        .finally(this.setState({ loading: false }));
    }
  }
  render() {
    const { pokemon, loading, error } = this.state;
    const { pokemonName } = this.props;
    return (
      <div>
        <h1>Pokemon Info</h1>
        {error && <div>{error.message}</div>}
        {loading && <div>Pokemon is Loading</div>}
        {!pokemonName && <div>Give me Pokemon Name!</div>}
        {pokemon && (
          <div>
            <h2>{pokemon.name}</h2>
            <img
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt={pokemon.name}
              width="240"
            />
          </div>
        )}
      </div>
    );
  }
}
