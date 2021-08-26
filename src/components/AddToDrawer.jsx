import React, { useContext } from 'react';
import { Context } from '../context';
import { Loader } from './Loader';
export const AddToDrawer = ({ onOrder, disabled }) => {
  const { removeItem, isLoader, cartItems } = useContext(Context);
  if (isLoader) {
    return (
      <div className="d-flex justify-center align-center flex">
        <Loader />
      </div>
    );
  }
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
              <b>{item.price} руб.</b>
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
            <b>21 498 руб.</b>
          </li>
          <li>
            <span>Налог 5%:</span>
            <div></div>
            <b>1074 руб.</b>
          </li>
        </ul>
        <button className="greenButton" onClick={onOrder} disabled={disabled}>
          Оформить заказ <img src="/img/arrow.svg" alt="arrow" />{' '}
        </button>
      </div>
    </>
  );
};
