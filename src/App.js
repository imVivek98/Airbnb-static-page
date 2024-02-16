import Cardcomponent from "./components/cardcomponent";
import Herocomponent from "./components/herocomponent";
import Navbarcomponent from "./components/navbarcomponent";
import React from 'react';
import data from './Data';
import './styles.css'

const Data = data.map((items) => {
  return <Cardcomponent 
          key={items.id} 
          {...items}
          />
})

function App() {
  return (
    <div className="App">
      <Navbarcomponent />
      <Herocomponent />
      <div className="places-card"> 
        {Data}
      </div>
    </div>
  );
}

export default App;
