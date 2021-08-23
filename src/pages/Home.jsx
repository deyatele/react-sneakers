import React from 'react';
import Card from '../components/Card';
import Loader from '../components/Loader';

export default function Home({
  items,
  searchValue,
  setSearchValue,
  onSeachInput,
  isFavorites,
  addToCard,
  onFavorite,
  cartItems,
  onRemove,
  disableBattonAdd
}) {
  
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
                addToCard={() => addToCard(arg)}
                isFavorite={isFavorites.includes(arg.id) ? true : false}
                id={arg.id}
                onFavorite={onFavorite}
                cartItem={cartItems.find((i)=>i.id===arg.id)}
                onRemove={onRemove}
                disableBattonAdd={disableBattonAdd}
              />
            ))}
        </div>
      )}
    </div>
  );
}
