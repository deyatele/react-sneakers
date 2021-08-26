import React from 'react';
import { Link } from 'react-router-dom';
export default function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="Logo" />

          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <div>
        <ul className="d-flex">
          <li className="mr-15 cu-p" onClick={props.onClickCard}>
            <img width={18} height={18} src="/img/basket.svg" alt="Корзина" />
            <span>1205 руб.</span>
          </li>
          <li className="mr-30 cu-p">
            <Link to="/favorites">
              <img
                width={18}
                height={18}
                src="/img/favorite.svg"
                alt="Закладки"
              />
            </Link>
          </li>
          <li>
            <img
              width={18}
              height={18}
              src="/img/union.svg"
              alt="Пользователь"
            />
          </li>
        </ul>
      </div>
    </header>
  );
}
