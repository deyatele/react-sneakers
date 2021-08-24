import React from 'react';
import Card from '../components/Card';
import {MoopLoading} from '../components/Loader';

export default function Favorites({
  items,
  addToCard,
  onFavorite,
  isFavorites,
  cartItems,
  onRemove,
  disableBattonAdd
}) {
  
  console.log(isFavorites)

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>
      {items.length === 0 ? (
        <div className="d-flex flex-wrap ">
        {isFavorites.map((_,i) => {
          return (
            <div key={i} className="mt-20 mb-20 mr-30">
              <MoopLoading />
            </div>
          );
        })}
      </div>
      ) : (
        <div className="d-flex flex-wrap">
          {items.map(
            (item) =>
              isFavorites.includes(item.id) && (
                <Card
                  key={item.id}
                  {...item}
                  addToCard={() => addToCard(item)}
                  id={item.id}
                  isFavorite={true}
                  onFavorite={onFavorite}
                  cartItem={cartItems.find((i) => i.id === item.id)}
                  onRemove={onRemove}
                  disableBattonAdd={disableBattonAdd}
                />
              ),
          )}
        </div>
      )}
    </div>
  );
}
