import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Context } from './context';
import axios from 'axios';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Header from './components/Header';
import Drawer from './components/Drawer';
import { Bascet } from './pages/Bascet';

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [disableBattonAdd, setDiableBattonAdd] = React.useState(false);

  const localFavorites = localStorage.getItem('favorites')
    ? JSON.parse(localStorage.getItem('favorites'))
    : [];
  const [isFavorites, setIsFavorite] = React.useState(localFavorites);
  useEffect(() => {
    axios
      .get('https://61082c6bd73c6400170d3875.mockapi.io/items')
      .then((res) => {
        setItems(res.data);
      })
      .catch((e) => console.log(e));

    try {
      let localItems = localStorage.getItem('bascet')
        ? JSON.parse(localStorage.getItem('bascet'))
        : [];
      setCartItems(localItems);
    } catch (e) {
      console.log(e);
    }
  }, []);
  const onFavorite = (arg) => {
    if (!arg.isFavorite) {
      let localFavorites = localStorage.getItem('favorites')
        ? JSON.parse(localStorage.getItem('favorites'))
        : [];

      const newFavorites = [arg.id];
      localFavorites = [...localFavorites, ...newFavorites];
      setIsFavorite(localFavorites);
      localStorage.setItem('favorites', JSON.stringify(localFavorites));
    } else {
      let localFavorites = localStorage.getItem('favorites')
        ? JSON.parse(localStorage.getItem('favorites'))
        : [];

      localFavorites = localFavorites.filter((idx) => idx !== arg.id);
      setIsFavorite(localFavorites);
      localStorage.setItem('favorites', JSON.stringify(localFavorites));
    }
  };

  const addToCard = (card) => {
    setCartItems((prev) => [...prev, card]);
  };

  useEffect(() => {
    try {
      setDiableBattonAdd(true);
      localStorage.setItem('bascet', JSON.stringify(cartItems));
    } catch (e) {
      console.log(e);
    }
    setDiableBattonAdd(false);
  }, [cartItems]);

  const onSeachInput = (e) => {
    setSearchValue(e.target.value);
  };

  const removeItem = (cart) => {
    setCartItems((prev) => prev.filter((item) => item.id !== cart.id));
  };
  const onClose = () => {
    setCartOpened(false);
  };
  return (
    <Context.Provider
      value={{
        items,
        searchValue,
        setSearchValue,
        onSeachInput,
        isFavorites,
        addToCard,
        onFavorite,
        cartItems,
        disableBattonAdd,
        removeItem,
        onClose,
        setCartItems,
      }}
    >
      <div className="wrapper clear">
        <Drawer cartOpened={cartOpened} />
        <Header
          onClickCard={() => {
            setCartOpened(true);
          }}
        />

        <Route path="/" exact>
          <Home onRemove={(id) => removeItem(id)} />
        </Route>

        <Route path="/favorites">
          <Favorites
            items={items}
            isFavorites={isFavorites}
            addToCard={addToCard}
            cartItems={cartItems}
            onFavorite={onFavorite}
            onRemove={(id) => removeItem(id)}
            disableBattonAdd={disableBattonAdd}
          />
        </Route>
        <Route path="/bascet">
          <Bascet cartOpened={cartOpened} />
        </Route>
      </div>
    </Context.Provider>
  );
}

export default App;