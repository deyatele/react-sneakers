import React, { useContext } from 'react';
import Card from '../components/Card';
import { MoopLoading } from '../components/Loader';
import { Context } from '../context';

export default function Home() {
  const {
    items,
    searchValue,
    setSearchValue,
    onSeachInput,
    isFavorites,
    cartItems,
  } = useContext(Context);
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}
        </h1>
        <div className="search-block d-flex">
          <img src="img/search.svg" alt="Search" />
          {searchValue && (
            <img
              className="clear cu-p"
              onClick={() => setSearchValue('')}
              src="img/btn-remove-hover.svg"
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
        <div className="d-flex justify-between flex-wrap ">
          {[...Array(8)].map((_, i) => {
            return (
              <div key={i} className="mt-10 mb-20 mr-30">
                <MoopLoading />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="d-flex flex-wrap ">
          {items
            .filter((filterItem) =>
              filterItem.title
                .toLowerCase()
                .includes(searchValue.toLowerCase()),
            )
            .map((item) => (
              <Card
                key={item.id}
                item={item}
                isFavorite={isFavorites.includes(item.id) ? true : false}
                cartItem={cartItems.find((i) => i.id === item.id)}
              />
            ))}
        </div>
      )}
    </div>
  );
}
