import React, { useContext } from 'react';
import styles from './Card.module.scss';
import { Context } from './../../context';

function Card({ item, cartItem, isFavorite }) {
  const { addToCard, onFavorite, disableBattonAdd, removeItem } =
    useContext(Context);
  const isBasket = !!cartItem;
  let { id, price, title, imageUrl } = item;

  return (
    <div id={id} className={styles.card}>
      <div
        className={styles.favorite}
        onClick={() => onFavorite({ id, title, imageUrl, isFavorite })}
      >
        <img
          src={isFavorite ? '/img/likeyes.png' : '/img/like-no.svg'}
          alt="Unliked"
        />
      </div>

      <img width={133} height={112} src={imageUrl} alt="Кроссовка" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>
            {' '}
            {price.toLocaleString('ru-RU', {
              style: 'currency',
              currency: 'RUB',
              minimumFractionDigits: 0,
            })}{' '}
          </b>
        </div>
        <button
          className={styles.plus}
          onClick={
            isBasket ? () => removeItem(cartItem) : () => addToCard(item)
          }
          disabled={disableBattonAdd}
        >
          <img src={isBasket ? '/img/up.svg' : '/img/plus.svg'} alt="Plus" />
        </button>
      </div>
    </div>
  );
}
export default Card;
