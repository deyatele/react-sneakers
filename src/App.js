import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  const [isLoader, setIsLoader] = React.useState(false);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [isAddBasket, setIsAddBasket] = React.useState(false);
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

  const onClickPlus = () => {
    setIsAddBasket(!isAddBasket);
  };

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
  const addToCard = (card) => {
    console.log(card);
    onClickPlus();
    axios.post('https://61082c6bd73c6400170d3875.mockapi.io/basket', card);
    setCartItems((prev) => [...prev, card]);
  };

  React.useEffect(() => {
    axios
      .get('https://61082c6bd73c6400170d3875.mockapi.io/items')
      .then((res) => {
        setItems(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const onSeachInput = (e) => {
    setSearchValue(e.target.value);
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

      <Route path="/" exact>
        <Home
          setCartItems={setCartItems}
          items={items}
          setItems={setItems}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onSeachInput={onSeachInput}
          setIsFavorite={setIsFavorite}
          isFavorites={isFavorites}
          addToCard={addToCard}
          //isAddBaskets={isAddBaskets}
          onFavorite={onFavorite}
        />
      </Route>
      <Route path="/favorites">
        <Favorites
          setCartItems={setCartItems}
          items={items}
          setItems={setItems}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onSeachInput={onSeachInput}
          setIsFavorite={setIsFavorite}
          isFavorites={isFavorites}
          addToCard={addToCard}
          //isAddBaskets={isAddBaskets}
          onFavorite={onFavorite}
        />
      </Route>
    </div>
  );
}

export default App;
