import React from 'react';
import styles from './Card.module.scss';

function Card({ id, title, imageUrl, price, onPlus, isFavoriteItem }) {
  //console.log(props);
  const [isAddBasket, setIsAddBasket] = React.useState(false);
  const onClickPlus = () => {
    onPlus();
    setIsAddBasket(!isAddBasket);
  };
  const [isFavorite, setIsFavorite] = React.useState(
    isFavoriteItem ? isFavoriteItem.isFavorite : false,
  );

  const onFavorite = () => {
    if (!isFavorite) {
      setIsFavorite(!isFavorite);
      let localFavorites = JSON.parse(localStorage.getItem('favorites'))
        ? JSON.parse(localStorage.getItem('favorites'))
        : [];

      const newFavorites = [
        {
          id,
          title,
          price,
          imageUrl,
          isFavorite: true,
        },
      ];

      localFavorites = [...localFavorites, ...newFavorites];

      localStorage.setItem('favorites', JSON.stringify(localFavorites));
    } else {
      setIsFavorite(!isFavorite);
      let localFavorites = JSON.parse(localStorage.getItem('favorites'))
        ? JSON.parse(localStorage.getItem('favorites'))
        : [];

      localFavorites = localFavorites.filter((idx) => idx.id !== id);
      console.log(localFavorites);
      localStorage.setItem('favorites', JSON.stringify(localFavorites));
    }
  };

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
