import { Container } from './App.styled';
import * as API from '../Services/api';

import React from 'react';
import { MaterialEditor } from 'components/MaterialEditor/MaterialEfitor';
import { Materials } from 'components/Materials/Materials';
import { async } from 'q';

export class App extends React.Component {
  state = {
    materials: [],
    isLoading: false,
    error: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterials();
      this.setState({ materials, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  }

  addMaterials = async values => {
    try {
      this.setState({ isLoading: true });
      const material = await API.addMaterial(values);
      this.setState(prevState => ({
        materials: [...prevState.materials, material],
        isLoading: false,
      }));
      console.log(material);
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  deleteMaterial = async id => {
    try {
      await API.deleteMaterial(id);
      this.setState(prevState => ({
        materials: prevState.materials.filter(material => material.id !== id),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  updateMaterial = async fields => {
    try {
      const updatedMaterial = await API.updateMaterial(fields);
      this.setState(prevState => ({
        materials: prevState.materials.map(material =>
          material.id === fields.id ? updatedMaterial : material
        ),
      }));
    } catch (error) {}
  };

  render() {
    const { isLoading, materials, error } = this.state;
    return (
      <Container>
        {error && <div>Error happens</div>}
        <MaterialEditor onSubmit={this.addMaterials} />
        {isLoading && <div>Loading</div>}
        {isLoading ? (
          'LOADING'
        ) : (
          <Materials
            items={materials}
            onDelete={this.deleteMaterial}
            onUpdate={this.updateMaterial}
          />
        )}
      </Container>
    );
  }
}
