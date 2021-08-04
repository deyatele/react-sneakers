import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Loader from './components/Loader';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  let isLoader = false;
  const openCart = () => {
    console.log(isLoader);
    axios
      .get('https://61082c6bd73c6400170d3875.mockapi.io/basket')
      .then((res) => {
        setTimeout(() => {
          isLoader = false;
          console.log(isLoader);
          setCartItems(res.data);
        }, 1000);
      })

      .catch((e) => console.log(e));
  };

  React.useEffect(() => {
    axios
      .get('https://61082c6bd73c6400170d3875.mockapi.io/items')
      .then((res) => {
        setItems(res.data);
      })
      .catch((e) => console.log(e));
  }, []);
  const addToCard = (card) => {
    axios.post('https://61082c6bd73c6400170d3875.mockapi.io/basket', card);
    setCartItems((prev) => [...prev, card]);
  };
  const removeItem = (id) => {
    axios.delete(`https://61082c6bd73c6400170d3875.mockapi.io/basket/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  const onSeachInput = (e) => {
    setSearchValue(e.target.value);
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
          isLoader = true;
          setCartOpened(true);

          openCart();
        }}
      />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>
            {searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}
          </h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && (
              <img
                className="clear cu-p"
                onClick={() => setSearchValue('')}
                src="/img/btn-remove-hover.svg"
                alt="Clear"
              />
            )}
            <input
              onChange={onSeachInput}
              value={searchValue}
              placeholder="Поиск"
            />
          </div>
        </div>
        {items.length === 0 ? (
          <div className="d-flex justify-center mt-50 mb-50">
            <Loader />
          </div>
        ) : (
          <div className="d-flex flex-wrap">
            {items
              .filter((item) =>
                item.title.toLowerCase().includes(searchValue.toLowerCase()),
              )
              .map((arg) => (
                <Card key={arg.id} {...arg} onPlus={() => addToCard(arg)} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
