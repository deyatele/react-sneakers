import React from 'react';
import { Link } from 'react-router-dom';

export const NotItem = ({
  title,
  description,
  image,
  imageDescription,
  onClose,
}) => {
  return (
    <div className={'d-flex justify-center flex-column align-center' }>
      <img
        src={image}
        alt={imageDescription}
        width={70} height={70}
      />

      <h2>{title}</h2>
      <div className="no-item opacity-6 " >{description}</div>
      <Link to="/">
      <button  className="greenButton">
        <img  src="img/arrow.svg" alt="Arrow" />
        Вернутся назад
      </button></Link>
    </div>
  );
};
