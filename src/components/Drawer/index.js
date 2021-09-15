import React, { useState, useContext } from 'react';
import { AddToDrawer } from './AddToDrawer';
import { EmptyCard } from './EmptyCard';
import { Context } from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom';
const BASE_URL = process.env.REACT_APP_BASE_URL

export default function Drawer({ cartOpened }) {
  const { onClose, setCartItems, cartItems = [] } = useContext(Context);
  const [isOrder, setIsOrder] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const onOrder = async () => {
    try {
      setDisabled(true);
      const { data } = await axios.post(
        `https://${BASE_URL}.mockapi.io/orders`,
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
      className={cartOpened ? 'overlay visible' : 'overlay'}
      onClick={(e) => e.target.className === 'overlay visible' && onClose()}
    >
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30 ">
          Корзина{' '}
          <img
            className="removeBtn cu-p"
            onClick={onClose}
            src="img/btn-remove-hover.svg"
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
            buttonLink={
              isOrder ? (
                <Link to="bascet">Перейти в мои покупки</Link>
              ) : (
                'Вернутся назад'
              )
            }
            image={isOrder ? 'img/order.svg' : 'img/empty-cart.jpg'}
          />
        )}
      </div>
    </div>
  );
}
