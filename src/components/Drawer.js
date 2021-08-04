import Loader from './Loader';

export default function Drawer({
  onClose,
  onRemove,
  cartItems = [],
  isLoader,
}) {
  console.log(isLoader);
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30 ">
          Корзина{' '}
          <img
            className="removeBtn cu-p"
            onClick={onClose}
            src="/img/btn-remove-hover.svg"
            alt="Remove"
          />
        </h2>
        {isLoader ? (
          <Loader />
        ) : cartItems.length > 0 ? (
          <>
            <div className="items">
              {/* {console.log(cartItems)} */}
              {cartItems.map((item) => (
                <div
                  className="cartItem d-flex aling-center mb-20"
                  key={item.id}
                >
                  <div
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{item.title}</p>
                    <b>{item.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemove(item.id)}
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
              <button className="greenButton">
                Оформить заказ <img src="/img/arrow.svg" alt="arrow" />{' '}
              </button>
            </div>
          </>
        ) : (
          <div className="cartEmpty aling-center">
            <img
              className="mb-20"
              width="120px"
              height="120px"
              src="/img/empty-cart.jpg"
              alt="BasketNo"
            />
            <h2>Корзина пустая</h2>
            <p className="opacity-6">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button onClick={onClose} className="greenButton">
              <img src="/img/arrow.svg" alt="Arrow" />
              Вернутся назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
