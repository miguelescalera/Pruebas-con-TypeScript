import React,{ useState } from 'react'
import './App.css'
import AddPersonList from './components/AddPersonList'
import List from './components/List'

export interface IState {
  people:{
    name: string
    age: number
    url: string
    note: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name:"LeBron James",
      age: 36,
      url:"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png",
      note:"the best of the best"
    }
  ])


  return (
    <div className="App">
      <h1>Lista de typeScript</h1>
      <List people={people}/>
      <AddPersonList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
