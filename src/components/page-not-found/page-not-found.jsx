import React from 'react';
import {Link} from 'react-router-dom';

const PageNotFound = () => {
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
                <Link className="header-navigation__link header-navigation__link--active" to="/full-page">Конвертер валют</Link>
            </li>
            <li className="header-navigation__item">
                <Link className="header-navigation__link" to="/page-not-found">Контакты</Link>
            </li>
            <li className="header-navigation__item">
                <Link className="header-navigation__link" to="/page-not-found">Задать вопрос</Link>
            </li>
          </ul>
        </nav>
        <Link className="header__user-login user-login" to="/">
          <span className="user-login__text">Войти в Интернет-банк</span>
        </Link>
      </header>
      <p class="page__not-found">К сожалению, страница не найдена</p>
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
              <Link className="footer-navigation__link" to="/">Услуги</Link>
            </li>
            <li className="footer-navigation__item">
              <Link className="footer-navigation__link" to="/">Рассчитать кредит</Link>
            </li>
            <li className="footer-navigation__item">
              <Link className="footer-navigation__link" to="/">Контакты</Link>
            </li>
            <li className="footer-navigation__item">
              <Link className="footer-navigation__link" href="#">Задать вопрос</Link>
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
    </div>
  )
};

export default PageNotFound;
