import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.components';
import './App.css';

//functional component
const App = () => {
  // inicialize the state
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([]); 
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  // takes two arguments, the first is a callback function and the second is an array that contains props or states
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []); 
  
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>  {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);

  }, [monsters, searchField]); 

  const onSearchChange = (event) => {
    // Saving each value in serachField 
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
    
    };
    
  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      
      <SearchBox
        className='monsters-search-box' 
        onChangeHandler={onSearchChange} 
        placeholder={'search monsters'}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

// class App extends Component {
//   constructor(){ // first thing executed
//     super();
//     this.state = {
//       monsters: [], // inicialiting state
//       searchField: '' 
//     };
//   }

//   componentDidMount(){ //mounting is the first time a component get place on the top, it only happens once through a components life
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => 
//         this.setState(() => {
//           return {monsters: users}
//         },
//         () => {
//           console.log(this.state);
//           }
//         )
//       );
//   }

//   onSearchChange = (event) => {
//     // Saving each value in serachField 
//     console.log(event.target.value);
//     const searchField = event.target.value.toLocaleLowerCase();

//     // monster update in our page
//     this.setState(() => {
//       return { searchField }; 
//     });
//   };


//   render(){ // this is the second thing executed, represents UI
  
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredmonsters = monsters.filter((monster) =>  {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monsters Rolodex</h1>

//         <SearchBox
//         className='monsters-search-box' 
//         onChangeHandler={onSearchChange} 
//         placeholder={'search monsters'}
//         />
//         <CardList monsters={filteredmonsters} />
//       </div>
//     );
//   }
// }

export default App;
