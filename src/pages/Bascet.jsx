import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { MoopLoading } from '../components/Loader';

import axios from 'axios';
import { NotItem } from '../components/NotItem';

export const Bascet = ({ cartOpened }) => {
  const [orders, setOrders] = useState([]);
  const [isloader, setIsLoader] = useState(false);

  useEffect(() => {
    if (!cartOpened) {
      setIsLoader(true);
      getOrders();
    }
  }, [cartOpened]);
  const remove = (cart) => {
    axios.delete(
      `https://61082c6bd73c6400170d3875.mockapi.io/orders/${cart.id}`,
    );
    setOrders((prev) => prev.filter((item) => item.id !== cart.id));
  };

  const getOrders = () => {
    axios
      .get('https://61082c6bd73c6400170d3875.mockapi.io/orders')
      .then((res) => {
        setOrders(res.data);
        setIsLoader(false);
      })
      .catch((e) => {
        setIsLoader(false);
        console.log(e);
      });
  };

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои покупки</h1>
      </div>
      {isloader ? (
        <div className="d-flex flex-wrap ">
          {[...Array(4)].map((_, i) => {
            return (
              <div key={i} className="mt-20 mb-20 mr-30">
                <MoopLoading />
              </div>
            );
          })}
        </div>
      ) : orders.length === 0 ? (
        <div className="d-flex justify-center flex-wrap ">
          <NotItem
            title={'У вас нет заказов'}
            description={(<p>Вы нищеброд? <br/>Оформите хотя бы один заказ.</p>)}
            image={'img/smile-sad.svg'}
            imageDescription={'Грустит'}
          />
        </div>
      ) : (
        <div className="d-flex flex-wrap flex-column">
          {orders.map((arg) => (
            <div key={arg.id}>
              <h2 className="mt-10 d-flex justify-between pl-10 pr-10">
                Заказ #{arg.id}
                <span className="cp" onClick={() => remove(arg)}>
                  x
                </span>
              </h2>
              <div className="d-flex flex-wrap">
                {arg.order.map((item) => (
                  <Card key={item.id} item={item} cartItem={item} isBay />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
