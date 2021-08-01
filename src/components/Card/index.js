import styles from './Card.module.scss';

function Card(props) {
  // console.log(props);
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/likeno.png" alt="Unliked" />
      </div>

      <img width={133} height={112} src={props.urlImg} alt="Кросовка" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b> {props.price} руб.</b>
        </div>
        <button className="button" onClick={() => alert(123)}>
          <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}
export default Card;
