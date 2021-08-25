import React from 'react';
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
  const [isLoader, setIsLoader] = React.useState(false);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [disableBattonAdd, setDiableBattonAdd] = React.useState(false);

  const localFavorites = localStorage.getItem('favorites')
    ? JSON.parse(localStorage.getItem('favorites'))
    : [];
  const [isFavorites, setIsFavorite] = React.useState(localFavorites);

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

  const openCart = () => {
    setIsLoader(true);
    try {
      axios
        .get('https://61082c6bd73c6400170d3875.mockapi.io/basket')
        .then((res) => {
          setCartItems(res.data);
        })
        .then(() => {
          setIsLoader(false);
        });
    } catch (e) {
      setIsLoader(false);
      console.log(e);
    }
  };

  const addToCard = (card) => {
    setDiableBattonAdd(true);
    try {
      axios
        .post('https://61082c6bd73c6400170d3875.mockapi.io/basket', card)
        .then((res) => {
          setCartItems((prev) => [...prev, res.data]);
          setDiableBattonAdd(false);
        });
    } catch (e) {
      setDiableBattonAdd(false);
      console.log(e);
    }
  };

  React.useEffect(() => {
    axios
      .get('https://61082c6bd73c6400170d3875.mockapi.io/items')
      .then((res) => {
        setItems(res.data);
      })
      .catch((e) => console.log(e));
    axios
      .get('https://61082c6bd73c6400170d3875.mockapi.io/basket')
      .then((res) => {
        setCartItems(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const onSeachInput = (e) => {
    setSearchValue(e.target.value);
  };

  const removeItem = (cart) => {
    setDiableBattonAdd(true);
    try {
      axios
        .delete(
          `https://61082c6bd73c6400170d3875.mockapi.io/basket/${cart.id_mok}`,
        )
        .then(() => {
          setCartItems((prev) => prev.filter((item) => item.id !== cart.id));
          setDiableBattonAdd(false);
        });
    } catch (e) {
      setDiableBattonAdd(false);
    }
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
        removeItem
      }}
    >
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

        <Route path="/" exact>
          <Home            
            onRemove={(id) => removeItem(id)}
            
          />
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
          <Bascet
            items={items}
            isFavorites={isFavorites}
            addToCard={addToCard}
            cartItems={cartItems}
            onFavorite={onFavorite}
            onRemove={(id) => removeItem(id)}
            disableBattonAdd={disableBattonAdd}
          />
        </Route>
      </div>
    </Context.Provider>
  );
}

export default App;
