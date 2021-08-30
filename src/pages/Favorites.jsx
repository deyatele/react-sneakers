import React, { useContext } from 'react';
import Card from '../components/Card';
//import { MoopLoading } from '../components/Loader';
import { NotItem } from '../components/NotItem';
import { Context } from '../context';

export default function Favorites() {
  const { items, isFavorites, cartItems } = useContext(Context);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>
      {isFavorites.length === 0 ? (
        <div className="d-flex justify-center flex-wrap ">
          <NotItem
            title={'Закладок нет :('}
            description={'Вы ничего не добавляли в закладки'}
            image={'img/smile-amaze.svg'}
            imageDescription={'Удивлен'}
          />
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
