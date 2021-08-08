import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  const [isLoader, setIsLoader] = React.useState(false);
  const [cartOpened, setCartOpened] = React.useState(false);

  const openCart = () => {
    setIsLoader(true);
    axios
      .get('https://61082c6bd73c6400170d3875.mockapi.io/basket')
      .then((res) => {
        setCartItems(res.data);
      })
      .then(() => {
        setIsLoader(false);
      })
      .catch((e) => console.log(e));
  };
  const removeItem = (id) => {
    axios.delete(`https://61082c6bd73c6400170d3875.mockapi.io/basket/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          onClose={() => {
            setCartOpened(false);
          }}
          cartItems={cartItems}
          onRemove={(id) => removeItem(id)}
          isLoader={isLoader}
        />
      )}
      <Header
        onClickCard={() => {
          setCartOpened(true);
          openCart();
        }}
      />
      <Route path="/favorites">
        <h2>Мои закладки</h2>
      </Route>
      <Route path="/" exact>
        <Home setCartItems={() => setCartItems()} />
      </Route>
    </div>
  );
}

export default App;
