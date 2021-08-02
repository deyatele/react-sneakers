export default function Drawer({ onClose, cartItems = [] }) {
  //console.log(cartItems);
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
        <div className="items">
          {/* {console.log(cartItems)} */}
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
      </div>
    </div>
  );
}
