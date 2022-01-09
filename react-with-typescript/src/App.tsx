import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

export interface IState {
  people: {
    name: string
    // age: number | string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  // const [number, setNumber] = useState<number | string | boolean>(5)  
  // const changeNumber = () => {
  //   setNumber(10)
  //   setNumber("10")
  //   setNumber(true)
  // }

  const [people, setPeople] = useState<IState["people"]>([
  {
    name: "아키",
    url: "https://img.sbs.co.kr/newsnet/etv/upload/2019/03/11/30000624395_1280.jpg",
    age: 18,
    note: "우주초특급미녀"
  },
  {
    name: "두유",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Song_Joong-ki_at_Style_Icon_Asia_2016.jpg/345px-Song_Joong-ki_at_Style_Icon_Asia_2016.jpg",
    age: 17,
    note: "노력의천재"
  },
  ])

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
