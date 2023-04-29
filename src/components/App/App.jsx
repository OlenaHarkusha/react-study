import { PokemonForm } from 'components/PokemonForm';
import { Container } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { PokemonInfo } from 'components/PokemonInfo';

export class App extends React.Component {
  state = {
    pokemonName: '',
  };

  handleSubmitForm = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    return (
      <Container>
        <PokemonForm onSubmit={this.handleSubmitForm} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer autoClose={3000} />
      </Container>
    );
  }
}
