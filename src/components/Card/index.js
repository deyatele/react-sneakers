import React from 'react';
import styles from './Card.module.scss';

function Card({ id, title, imageUrl, price, onPlus }) {
  //console.log(props);
  const [isAddBasket, setIsAddBasket] = React.useState(false);
  const onClickPlus = () => {
    onPlus();
    setIsAddBasket(!isAddBasket);
  };
  const [isFavorite, setIsFavorite] = React.useState(false);
  const onFavorite = () => setIsFavorite(!isFavorite);
  return (
    <div id={id} className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img
          src={isFavorite ? '/img/likeyes.png' : '/img/like-no.svg'}
          alt="Unliked"
        />
      </div>

      <img width={133} height={112} src={imageUrl} alt="Кросовка" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b> {price} руб.</b>
        </div>
        <button className={styles.plus} onClick={onClickPlus}>
          <img src={isAddBasket ? '/img/up.svg' : '/img/plus.svg'} alt="Plus" />
        </button>
      </div>
    </div>
  );
}
export default Card;
