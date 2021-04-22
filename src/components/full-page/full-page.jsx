import React from 'react';
import {Link} from 'react-router-dom';

const FullPage = () => {
  return (
    <body className="page">
      <header className="page__header header">
        <img className="header__logo" alt="ЛИГА Банк" src="../img/ligabank-logo.svg" width="149" height="25" />
        <nav className="header__navigation header-navigation">
          <ul className="header-navigation__list">
            <li className="header-navigation__item">
                <Link className="header-navigation__link" to="/page-not-found">Услуги</Link>
            </li>
            <li className="header-navigation__item">
                <Link className="header-navigation__link" to="/page-not-found">Рассчитать кредит</Link>
            </li>
            <li className="header-navigation__item header-navigation__item--active">
                <Link className="header-navigation__link header-navigation__link--active">Конвертер валют</Link>
            </li>
            <li className="header-navigation__item">
                <Link className="header-navigation__link" to="/page-not-found">Контакты</Link>
            </li>
            <li className="header-navigation__item">
                <Link className="header-navigation__link" to="/page-not-found">Задать вопрос</Link>
            </li>
          </ul>
        </nav>
        <Link className="header__user-login user-login" to="/page-not-found">
          <span className="user-login__text">Войти в Интернет-банк</span>
        </Link>
      </header>
      <main className="page__main main">
        <section className="main__promo promo">
            <h1 className="promo__header">Лига Банк</h1>
            <p className="promo__description">Кредиты на любой случай</p>
            <Link className="promo__link" to="/page-not-found">Рассчитать кредит</Link>
            <img className="promo__cards-image" src="../img/black-and-white-cards.png" alt="Пример карт банка" width="398" height="240" />
        </section>
        <section className="main__converter converter">
          <h2 className="converter__heading">Конвертер валют</h2>
          <form className="coverter__covert-form covert-form" method="#">
            <div className="covert-form__source-container source">
              <label className="source__label" htmlFor="source-value" >У меня есть</label>
              <input className="source__value" id="source-value" name="source-value" type="number" />
              <label className="source__currency-label visually-hidden" htmlFor="source-currency">Выбрать текущую валюту</label>
              <select className="source__currency" id="source-currency" name="source-currency">
                <option value="RUB">RUB</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
            <div className="covert-form__target-container taget">
              <label className="target__value-label" htmlFor="target-value" >У меня есть</label>
              <input className="target__value" id="target-value" name="target-value" type="number" />
              <label className="target__currency-label visually-hidden" fohtmlForr="target-currency">Выбрать целевую валюту</label>
              <select className="target__currency" id="target-currency" name="target-currency">
                <option value="RUB">RUB</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
            <label className="convert-form__date-label visually-hidden" htmlFor="covert-form-date">Выбрать дату</label>
            <input className="convert-form__date" id="covert-form-date" name="covert-form-date" type="date" />
            <button className="convet-form__submit" type="submit">Сохранить результат</button>
          </form>
        </section>
        <section className="main__history history">
          <h3 className="history__heading">История конвертация</h3>
          <ul className="history__list">
            <li className="history__item history-item">
                <span className="history-item__date">25.11.2020</span>
                <span className="history-item__source-value">1000</span>
                <span className="history-item__source-currency">RUB</span>
                <span className="history-item__target-value">13,1234</span>
                <span className="history-item__target-currency">USD</span>
            </li>
            <li className="history__item history-item">
                <span className="history-item__date">24.11.2020</span>
                <span className="history-item__source-value">900</span>
                <span className="history-item__source-currency">RUB</span>
                <span className="history-item__target-value">10,1234</span>
                <span className="history-item__target-currency">USD</span>
            </li>
            <li className="history__item history-item">
                <span className="history-item__date">23.11.2020</span>
                <span className="history-item__source-value">800</span>
                <span className="history-item__source-currency">RUB</span>
                <span className="history-item__target-value">9,1234</span>
                <span className="history-item__target-currency">USD</span>
            </li>
            <li className="history__item history-item">
                <span className="history-item__date">22.11.2020</span>
                <span className="history-item__source-value">700</span>
                <span className="history-item__source-currency">RUB</span>
                <span className="history-item__target-value">8,1234</span>
                <span className="history-item__target-currency">USD</span>
            </li>
            <li className="history__item history-item">
                <span className="history-item__date">21.11.2020</span>
                <span className="history-item__source-value">500</span>
                <span className="history-item__source-currency">RUB</span>
                <span className="history-item__target-value">7,1234</span>
                <span className="history-item__target-currency">USD</span>
            </li>
            <li className="history__item history-item">
                <span className="history-item__date">20.11.2020</span>
                <span className="history-item__source-value">400</span>
                <span className="history-item__source-currency">RUB</span>
                <span className="history-item__target-value">6,1234</span>
                <span className="history-item__target-currency">USD</span>
            </li>
            <li className="history__item history-item">
                <span className="history-item__date">19.11.2020</span>
                <span className="history-item__source-value">300</span>
                <span className="history-item__source-currency">RUB</span>
                <span className="history-item__target-value">5,1234</span>
                <span className="history-item__target-currency">USD</span>
            </li>
          </ul>
          <button className="history__reset" type="button">Очистить историю</button>
        </section>
      </main>
      <footer className="page__footer footer">
        <section className="footer__company company">
          <img className="company__logo" alt="ЛИГА Банк" src="../img/ligabank-logo.svg" width="149" height="25" />
          <section className="company__about">
            <p className="company__about--address">150015, г. Москва, ул. Московская, д. 32</p>
            <p className="company__about--license">Генеральная лицензия Банка России №1050</p>
            <p className="company__about--copyright">Ⓒ Лига Банк, 2019</p>
          </section>
        </section>
        <nav className="footer_navigation footer-navigation">
          <ul className="footer-navigation__list">
            <li className="footer-navigation__item">
              <Link className="footer-navigation__link" to="/page-not-found">Услуги</Link>
            </li>
            <li className="footer-navigation__item">
              <Link className="footer-navigation__link" to="/page-not-found">Рассчитать кредит</Link>
            </li>
            <li className="footer-navigation__item">
              <Link className="footer-navigation__link" to="/page-not-found">Контакты</Link>
            </li>
            <li className="footer-navigation__item">
              <Link className="footer-navigation__link" to="/page-not-found">Задать вопрос</Link>
            </li>
          </ul>
        </nav>
        <section className="footer__contacts contacts">
          <section className="contacts__short-number short-number">
            <a className="short-number__tel" href="tel:*0904">*0904</a>
            <p className="short-number__description">Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
          </section>
          <section className="contacts__full-number full-number">
            <a className="full-number__tel" href="tel:88001112233">8 800 111 22 33</a>
            <p className="full-number__description">Бесплатный для всех городов России</p>
          </section>
          <section className="contacts__social social">
            <ul className="social__list">
              <li className="social__item social__item--facebook">
              <a className="social__link" href="https://www.facebook.com/" target="_blank">
                  <span className="visually-hidden">Facebook</span>
              </a>
              </li>
              <li className="social__item social__item--instagram">
              <a className="social__link" href="https://www.instagram.com/" target="_blank">
                  <span className="visually-hidden">Instagram</span>
              </a>
              </li>
              <li className="social__item social__item--twitter">
              <a className="social__link" href="https://www.twitter.com/" target="_blank">
                  <span className="visually-hidden">Twitter</span>
              </a>
              </li>
              <li className="social__item social__item--youtube">
              <a className="social__link" href="https://www.youtube.com/" target="_blank">
                  <span className="visually-hidden">YouTube</span>
              </a>
              </li>
            </ul>
          </section>
        </section>
      </footer>
    </body>
  )
};

export default FullPage;
