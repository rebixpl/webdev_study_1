import React from "react"
import Table from "./Table"
import Form from "./From"

class App extends React.Component {
  state = {
    characters: [],
  }

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, id) => {
        return index !== id;
      })
    })
  }

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  }

  render() {
    const { characters } = this.state;

    return (
      <React.StrictMode>
        <div className="container">
          <Table characterData={characters} removeCharacter={this.removeCharacter} />
          <Form handleSubmit={this.handleSubmit} />
        </div>
      </React.StrictMode>
    )
  }
}

export default App
