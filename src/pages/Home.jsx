import React from 'react';
import Card from '../components/Card';
import axios from 'axios';
import Loader from '../components/Loader';

export default function Home({setCartItems}) {
    const [items, setItems] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    
   
    const isFavorites = localStorage.getItem('favorites')
    ? JSON.parse(localStorage.getItem('favorites'))
    : [];

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
      
      const onSeachInput = (e) => {
        setSearchValue(e.target.value);
      };
    

  
  return (
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
              <Card
                key={arg.id}
                {...arg}
                onPlus={() => addToCard(arg)}
                isFavoriteItem={
                  isFavorites.filter((idx) => idx.id === arg.id)[0]
                }
              />
            ))}
        </div>
      )}
    </div>
  );
}
