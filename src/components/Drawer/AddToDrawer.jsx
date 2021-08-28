import React, { useContext } from 'react';
import { Context } from '../../context';
import { useCard } from './../../hooks/useCard';
export const AddToDrawer = ({ onOrder, disabled }) => {
  const { removeItem, cartItems } = useContext(Context);
  const { totalPrice } = useCard();

  return (
    <>
      <div className="items">
        {cartItems.map((item) => (
          <div className="cartItem d-flex aling-center mb-20" key={item.id}>
            <div
              style={{ backgroundImage: `url(${item.imageUrl})` }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">{item.title}</p>
              <b>
                {item.price.toLocaleString('ru-RU', {
                  style: 'currency',
                  currency: 'RUB',
                  minimumFractionDigits: 0,
                })}
              </b>
            </div>
            <img
              onClick={() => removeItem(item)}
              className="removeBtn"
              src="/img/btn-remove-hover.svg"
              alt="Close"
            />
          </div>
        ))}
      </div>
      <div className="cartTotalBlock">
        <ul>
          <li>
            <span>Итого:</span>
            <div></div>
            <b>
              {totalPrice.toLocaleString('ru-RU', {
                style: 'currency',
                currency: 'RUB',
              })}
            </b>
          </li>
          <li>
            <span>Налог 5%:</span>
            <div></div>
            <b>
              {(totalPrice * 0.05).toLocaleString('ru-RU', {
                style: 'currency',
                currency: 'RUB',
              })}
            </b>
          </li>
        </ul>
        <button className="greenButton" onClick={onOrder} disabled={disabled}>
          Оформить заказ <img src="/img/arrow.svg" alt="arrow" />{' '}
        </button>
      </div>
    </>
  );
};
