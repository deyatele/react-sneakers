import React from 'react';
import styles from './Card.module.scss';

function Card(props) {
  // console.log(props);
  const [isAddBasket, setIsAddBasket] = React.useState(false);
  const onClickPlus = () => setIsAddBasket(!isAddBasket);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const onFavorite = () => setIsFavorite(!isFavorite);
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img
          src={isFavorite ? '/img/likeyes.png' : '/img/like-no.svg'}
          alt="Unliked"
        />
      </div>

      <img width={133} height={112} src={props.urlImg} alt="Кросовка" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b> {props.price} руб.</b>
        </div>
        <button className={styles.plus} onClick={onClickPlus}>
          <img src={isAddBasket ? '/img/up.svg' : '/img/plus.svg'} alt="Plus" />
        </button>
      </div>
    </div>
  );
}
export default Card;
