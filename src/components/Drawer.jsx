import React, { useState } from 'react';
import { AddToDrawer } from './AddToDrawer';
import { EmptyCard } from './EmptyCard';
import { useContext } from 'react';
import { Context } from './../context';
import axios from 'axios';

export default function Drawer() {
  const {
    onClose,
    setCartItems,
    removeItem,
    cartItems = [],
  } = useContext(Context);
  const [isOrder, setIsOrder] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [disabled, setDibled] = useState(false);
  const delay = (ms) => {
    new Promise((res) => setTimeout(res, ms));
  };
  const onOrder = async () => {
    try {
      setDibled(true);
      const { data } = await axios.post(
        'https://61082c6bd73c6400170d3875.mockapi.io/orders',
        { order: cartItems },
      );
      setOrderId(data.id);
      setIsOrder(true);
      setCartItems([]);
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        console.log(item);
        await axios.delete(
          `https://61082c6bd73c6400170d3875.mockapi.io/basket/${item.id_mok}`,
        );
        await delay(1000);
      }
    } catch (error) {
      alert(
        'Ваш заказ не слздан :(. Перезагрузите страницу и попробуйте еще раз',
      );
    }
    setDibled(false);
  };
  return (
    <div
      className="overlay"
      onClick={(e) => e.target.className === 'overlay' && onClose()}
    >
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30 ">
          Корзина{' '}
          <img
            className="removeBtn cu-p"
            onClick={onClose}
            src="/img/btn-remove-hover.svg"
            alt="Закрыть"
          />
        </h2>

        {cartItems.length > 0 ? (
          <AddToDrawer onOrder={onOrder} disabled={disabled} />
        ) : (
          <EmptyCard
            title={isOrder ? 'Заказ оформлен' : 'Корзина пуста'}
            description={
              isOrder
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }
            image={isOrder ? '/img/order.svg' : '/img/empty-cart.jpg'}
          />
        )}
      </div>
    </div>
  );
}
