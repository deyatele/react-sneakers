import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  React.useEffect(() => {
    fetch('https://61082c6bd73c6400170d3875.mockapi.io/items')
      .then((res) => res.json())
      .then((json) => setItems(json))
      .catch((e) => console.log(e));
  }, []);
  const addToCard = (card) => {
    setCartItems(prev => [...prev, card])
  }
  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer onClose={() => setCartOpened(false)} cartItems={cartItems} />
      )}
      <Header onClickCard={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск" />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((arg) => (
            <Card key={arg.id} {...arg} onPlus={() => addToCard(arg)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
