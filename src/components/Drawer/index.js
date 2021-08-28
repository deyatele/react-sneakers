import React, { useState } from 'react';
import { AddToDrawer } from './AddToDrawer';
import { EmptyCard } from './EmptyCard';
import { useContext } from 'react';
import { Context } from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function Drawer() {
  const { onClose, setCartItems, cartItems = [] } = useContext(Context);
  const [isOrder, setIsOrder] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const onOrder = async () => {
    try {
      setDisabled(true);
      const { data } = await axios.post(
        'https://61082c6bd73c6400170d3875.mockapi.io/orders',
        { order: cartItems },
      );
      setOrderId(data.id);
      setIsOrder(true);
      setCartItems([]);
    } catch (error) {
      alert(
        'Ваш заказ не создан :(. Перезагрузите страницу и попробуйте еще раз',
      );
    }
    setDisabled(false);
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
          isOrder={isOrder}
            title={isOrder ? 'Заказ оформлен' : 'Корзина пуста'}
            description={
              isOrder
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }
            buttonLink={isOrder ? <Link to="/bascet">Перейти в мои покупки</Link> : 'Вернутся назад'}
            image={isOrder ? '/img/order.svg' : '/img/empty-cart.jpg'}
          />
        )}
      </div>
    </div>
  );
}
