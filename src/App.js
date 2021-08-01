import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    urlImg: '/img/item/1.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 15999,
    urlImg: '/img/item/2.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 13999,
    urlImg: '/img/item/3.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 13999,
    urlImg: '/img/item/5.jpg',
  },
];

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
      <Header onClickCard={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск" />
          </div>
        </div>
        <div className="d-flex">
          {arr.map((arg) => (
            <Card title={arg.title} price={arg.price} urlImg={arg.urlImg} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
