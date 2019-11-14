import React, { Component } from "react";

export default class DogsList extends Component {


    render() {
    const {dogBreeds} = this.props
    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>
        {/* if state dogbreeds is null, display 'Loading' */}
        { !dogBreeds && "Loading..." }
        { dogBreeds && <ul>{dogBreeds.map((breed) => <li key={breed}>{breed}</li>) }</ul> }
      </div>
    );


    
  }
}