import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';

class App extends Component {

  constructor(){
    super();

    this.state = {
      pokemonList: [],
      searchString:''
    }
  }

  componentDidMount() {

    fetch('https://localhost:7213/Pokedex')
    .then(response => response.json())
    .then(pokemonList => {
      this.setState({pokemonList});
    });

  }

  onSearhChange = (event) => {      
    const searchString = event.target.value.toLocaleLowerCase();   
    this.setState(() =>{ return {searchString} })
  }

  render(){

    const { pokemonList, searchString } = this.state;
    const { onSearhChange } = this;
    const filteredPokemon = pokemonList.filter( pokemon => pokemon.name.toLocaleLowerCase().includes(searchString));

    return (
      <div className="App">
        
        <input className='search-box' type='search' placeholder='search pokemon' onChange= {onSearhChange}/>

        <CardList pokemonList={filteredPokemon} />
                     
      </div>
    );
  }
}


export default App;
