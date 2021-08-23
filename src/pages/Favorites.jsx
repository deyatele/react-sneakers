import React from 'react';
import Card from '../components/Card';
import Loader from '../components/Loader';

export default function Favorites({
  items,
  addToCard,
  onFavorite,
  isFavorites,
  cartItems,
  onRemove,
  disableBattonAdd
}) {
  

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>
      {items.length === 0 ? (
        <div className="d-flex justify-center mt-50 mb-50">
          <Loader />
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
