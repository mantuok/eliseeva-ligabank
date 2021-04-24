import React from 'react';
import {Link} from 'react-router-dom';

const FullPage = () => {
  return (
    <div className="page">
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
                <a className="header-navigation__link header-navigation__link--active">Конвертер валют</a>
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
          <form className="converter__convert-form convert-form" method="#">
            <div className="convert-form__source-container convert-container">
              <label className="convert-container__label" htmlFor="source-value" >У меня есть</label>
              <input className="convert-container__value" id="source-value" name="source-value" type="number" />
              <label className="convert-container__currency-label visually-hidden" htmlFor="source-currency">Выбрать текущую валюту</label>
              <select className="convert-container__currency" id="source-currency" name="source-currency">
                <option value="RUB">RUB</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
            <div className="convert-form__target-container convert-container">
              <label className="convert-container__label" htmlFor="target-value" >Хочу приобрести</label>
              <input className="convert-container__value" id="target-value" name="target-value" type="number" />
              <label className="convert-container__currency-label visually-hidden" htmlFor="target-currency">Выбрать целевую валюту</label>
              <select className="convert-container__currency" id="target-currency" name="target-currency">
                <option value="RUB">RUB</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
            <label className="convert-form__date-label visually-hidden" htmlFor="convert-form-date">Выбрать дату</label>
            <input className="convert-form__date" id="convert-form-date" name="convert-form-date" type="date" />
            <button className="convert-form__submit" type="submit">Сохранить результат</button>
          </form>
        </section>
        <section className="main__history history">
          <h3 className="history__heading">История конвертаций</h3>
          <ul className="history__list">
            <li className="history__item history-item">
                <span className="history-item__date">25.11.2020</span>
                <div className="history-item__source history-amount">
                  <span className="history-amount__value">1000</span>
                  <span className="history-amount__currency">RUB</span>
                </div>
                <div className="history-item__target history-amount">
                  <span className="history-amount__value">13,1234</span>
                  <span className="history-amount__currency">USD</span>
                </div>
            </li>
            <li className="history__item history-item">
                <span className="history-item__date">24.11.2020</span>
                <div className="history-item__source history-amount">
                  <span className="history-amount__value">1000</span>
                  <span className="history-amount__currency">RUB</span>
                </div>
                <div className="history-item__target history-amount">
                  <span className="history-amount__value">13,1234</span>
                  <span className="history-amount__currency">USD</span>
                </div>
            </li>
            <li className="history__item history-item">
                <span className="history-item__date">23.11.2020</span>
                <div className="history-item__source history-amount">
                  <span className="history-amount__value">1000</span>
                  <span className="history-amount__currency">RUB</span>
                </div>
                <div className="history-item__target history-amount">
                  <span className="history-amount__value">13,1234</span>
                  <span className="history-amount__currency">USD</span>
                </div>
            </li>
            <li className="history__item history-item">
                <span className="history-item__date">22.11.2020</span>
                <div className="history-item__source history-amount">
                  <span className="history-amount__value">1000</span>
                  <span className="history-amount__currency">RUB</span>
                </div>
                <div className="history-item__target history-amount">
                  <span className="history-amount__value">13,1234</span>
                  <span className="history-amount__currency">USD</span>
                </div>
            </li>
            <li className="history__item history-item">
                <span className="history-item__date">21.11.2020</span>
                <div className="history-item__source history-amount">
                  <span className="history-amount__value">1000</span>
                  <span className="history-amount__currency">RUB</span>
                </div>
                <div className="history-item__target history-amount">
                  <span className="history-amount__value">13,1234</span>
                  <span className="history-amount__currency">USD</span>
                </div>
            </li>
            <li className="history__item history-item">
                <span className="history-item__date">20.11.2020</span>
                <div className="history-item__source history-amount">
                  <span className="history-amount__value">1000</span>
                  <span className="history-amount__currency">RUB</span>
                </div>
                <div className="history-item__target history-amount">
                  <span className="history-amount__value">13,1234</span>
                  <span className="history-amount__currency">USD</span>
                </div>
            </li>
            <li className="history__item history-item">
                <span className="history-item__date">19.11.2020</span>
                <div className="history-item__source history-amount">
                  <span className="history-amount__value">50</span>
                  <span className="history-amount__currency">RUB</span>
                </div>
                <div className="history-item__target history-amount">
                  <span className="history-amount__value">1234</span>
                  <span className="history-amount__currency">USD</span>
                </div>
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
        <nav className="footer__navigation footer-navigation">
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
          <section className="contacts__short-number number">
            <a className="number__tel" href="tel:*0904">*0904</a>
            <p className="number__description">Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
          </section>
          <section className="contacts__full-number number">
            <a className="number__tel" href="tel:88001112233">8 800 111 22 33</a>
            <p className="number__description">Бесплатный для всех городов России</p>
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
    </div>
  )
};

export default FullPage;
