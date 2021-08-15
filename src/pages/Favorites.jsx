import React from 'react';
import Card from '../components/Card';
import Loader from '../components/Loader';

export default function Favorites({
  items,
  addToCard,
  onFavorite,
  isFavorites,
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
            (arg) =>
              isFavorites.includes(arg.id) && (
                <Card
                  key={arg.id}
                  {...arg}
                  addToCard={() => addToCard(arg)}
                  isFavorite={true}
                  onFavorite={onFavorite}
                />
              ),
          )}
        </div>
      )}
    </div>
  );
}
