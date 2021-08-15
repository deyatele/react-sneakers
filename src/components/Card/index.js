import React from 'react';
import styles from './Card.module.scss';

function Card({
  id,
  title,
  imageUrl,
  price,
  isFavorite,
  addToCard,
  onFavorite,
  isAddBasket = false,
}) {
  //console.log(isFavoriteItem);

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
          <b> {price} руб.</b>
        </div>
        <button className={styles.plus} onClick={addToCard}>
          <img src={isAddBasket ? '/img/up.svg' : '/img/plus.svg'} alt="Plus" />
        </button>
      </div>
    </div>
  );
}
export default Card;
