import { Component } from "react";

class CardList extends Component {

  render() {

    const { pokemonList } = this.props

    
    return (
      <div>
        {
          pokemonList?.map( pokemon => {
            return(
              <div key={pokemon.id}>
                <h1>{pokemon.name}</h1>
              </div>
            )
          })
        }
      </div>
    
    )
  }

}

export default CardList