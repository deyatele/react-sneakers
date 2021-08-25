import React, { useContext } from 'react';
import Card from '../components/Card';
import { MoopLoading } from '../components/Loader';
import { Context } from '../context';

export default function Favorites() {
  const { items, isFavorites, cartItems } = useContext(Context);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>
      {items.length === 0 ? (
        <div className="d-flex flex-wrap ">
          {isFavorites.map((_, i) => {
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
                  item={item}
                  isFavorite
                  cartItem={cartItems.find((i) => i.id === item.id)}
                />
              ),
          )}
        </div>
      )}
    </div>
  );
}
