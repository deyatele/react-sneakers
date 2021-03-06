import React, { useContext } from 'react';
import { Context } from '../../context';

export const EmptyCard = ({
  title,
  description,
  image,
  buttonLink,
  isOrder,
}) => {
  let { onClose } = useContext(Context);

  return (
    <>
      <div className="cartEmpty">
        <img
          className="mb-20"
          width="120px"
          height="120px"
          src={image}
          alt="Basket"
        />
        <h2>{title}</h2>
        <p className="opacity-6">{description}</p>
        <button onClick={onClose} className="greenButton">
          <img src="img/arrow.svg" alt="Arrow" />
          {buttonLink}
        </button>
      </div>
    </>
  );
};
