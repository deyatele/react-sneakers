export default function Drawer(props) {
 
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30 ">
          Корзина{' '}
          <img
            className="removeBtn cu-p"
            onClick={props.onClose}
            src="/img/btn-remove-hover.svg"
            alt="Remove"
          />
        </h2>
        <div className="items">
          <div className="cartItem d-flex aling-center mb-20">
            <div
              style={{ backgroundImage: 'url(/img/item/1.jpg)' }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские кросовки</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="removeBtn"
              
              src="/img/btn-remove-hover.svg"
              alt="Close"
            />
          </div>
          <div className="cartItem d-flex aling-center mb-20">
            <div
              style={{ backgroundImage: 'url(/img/item/1.jpg)' }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские кросовки</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="removeBtn"
              src="/img/btn-remove-hover.svg"
              alt="Remove"
            />
          </div>
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
