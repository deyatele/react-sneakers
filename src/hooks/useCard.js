import { useContext } from 'react';
import { Context } from './../context';

export const useCard = () => {
  const { cartItems } = useContext(Context);
  const totalPrice = cartItems.reduce((sum, item) => item.price + sum, 0);
  return { totalPrice };
};
