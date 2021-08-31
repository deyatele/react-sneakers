import React from 'react';
import { Link } from 'react-router-dom';

import { useCard } from './../hooks/useCard';
export default function Header(props) {
  const { totalPrice } = useCard();
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="">
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/logo.png" alt="Logo" />

          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <div>
        <ul className="d-flex">
          <li className="mr-15 cu-p" onClick={props.onClickCard}>
            <img width={18} height={18} src="img/basket.svg" alt="Корзина" />
            <span>
              {totalPrice.toLocaleString('ru-RU', {
                style: 'currency',
                currency: 'RUB',
                minimumFractionDigits: 0,
              })}
            </span>
          </li>
          <li className="mr-30 cu-p">
            <Link to="favorites">
              <img
                width={18}
                height={18}
                src="img/favorite.svg"
                alt="Закладки"
              />
            </Link>
          </li>
          <li>
            <Link to="bascet">
              <img
                width={18}
                height={18}
                src="img/union.svg"
                alt="Пользователь"
              />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
