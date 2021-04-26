import React from 'react';
import {Link} from 'react-router-dom';

const Promo = () => {
  return (
    <section className="main__promo promo">
      <div className="promo__container">
        <h1 className="promo__header">Лига Банк</h1>
        <p className="promo__description">Кредиты на любой случай</p>
        <Link className="promo__link" to="/page-not-found">Рассчитать кредит</Link>
        <img className="promo__cards-image" src="../img/black-and-white-cards.png" alt="Пример карт банка" width="444" height="286" />
      </div>
    </section>
  )
};

export default Promo;