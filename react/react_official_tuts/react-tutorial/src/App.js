import React from "react"
import Table from "./Table"

class App extends React.Component {
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ],
  }

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, id) => {
        return index !== id;
      })
    })
  }

  render() {
    const { characters } = this.state;

    return (
      <React.StrictMode>
        <div className="container">
          <Table characterData={characters} removeCharacter={this.removeCharacter} />
        </div>
      </React.StrictMode>
    )
  }
}

export default App
