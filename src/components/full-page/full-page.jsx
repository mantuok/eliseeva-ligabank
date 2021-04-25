import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchRates} from '../../store/api-action';

const FullPage = (props) => {
  const {rates, isDataLoaded, onLoadData} = props;

  useEffect(() => {
      if(!isDataLoaded) {
        onLoadData()
      }
  }, isDataLoaded);

  return (
    <div className="page">
      <header className="page__header header">
        <div className="header__container container">
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
        </div>
      </header>
      <main className="page__main main">
        <section className="main__promo promo">
          <div className="promo__container">
            <h1 className="promo__header">Лига Банк</h1>
            <p className="promo__description">Кредиты на любой случай</p>
            <Link className="promo__link" to="/page-not-found">Рассчитать кредит</Link>
            <img className="promo__cards-image" src="../img/black-and-white-cards.png" alt="Пример карт банка" width="444" height="286" />
          </div>
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
          <div className="history__container">
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
          </div>
        </section>
      </main>
      <footer className="page__footer footer">
        <div className="footer__container">
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
                    <svg className="social__link social__link--facebook" width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9.2H8.14286L9 6H6V4.4C6 3.576 6 2.8 7.71429 2.8H9V0.112C8.72057 0.0776001 7.66543 0 6.55114 0C4.224 0 2.57143 1.3256 2.57143 3.76V6H0V9.2H2.57143V16H6V9.2Z" fill="#1F1E25"/>
                    </svg>
                  </a>
                </li>
                <li className="social__item social__item--instagram">
                  <a className="social__link" href="https://www.instagram.com/" target="_blank">
                    <span className="visually-hidden">Instagram</span>
                    <svg className="social__link social__link--instagram" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C10.1736 0 10.4448 0.00799995 11.2976 0.048C12.1496 0.088 12.7296 0.2216 13.24 0.42C13.768 0.6232 14.2128 0.8984 14.6576 1.3424C15.0644 1.74232 15.3792 2.22607 15.58 2.76C15.7776 3.2696 15.912 3.8504 15.952 4.7024C15.9896 5.5552 16 5.8264 16 8C16 10.1736 15.992 10.4448 15.952 11.2976C15.912 12.1496 15.7776 12.7296 15.58 13.24C15.3797 13.7742 15.0649 14.2581 14.6576 14.6576C14.2576 15.0643 13.7738 15.379 13.24 15.58C12.7304 15.7776 12.1496 15.912 11.2976 15.952C10.4448 15.9896 10.1736 16 8 16C5.8264 16 5.5552 15.992 4.7024 15.952C3.8504 15.912 3.2704 15.7776 2.76 15.58C2.22586 15.3796 1.74202 15.0648 1.3424 14.6576C0.935525 14.2577 0.620745 13.774 0.42 13.24C0.2216 12.7304 0.088 12.1496 0.048 11.2976C0.0104 10.4448 0 10.1736 0 8C0 5.8264 0.00799995 5.5552 0.048 4.7024C0.088 3.8496 0.2216 3.2704 0.42 2.76C0.620189 2.22574 0.935043 1.74186 1.3424 1.3424C1.74214 0.935385 2.22594 0.620583 2.76 0.42C3.2704 0.2216 3.8496 0.088 4.7024 0.048C5.5552 0.0104 5.8264 0 8 0ZM8 4C6.93913 4 5.92172 4.42143 5.17157 5.17157C4.42143 5.92172 4 6.93913 4 8C4 9.06087 4.42143 10.0783 5.17157 10.8284C5.92172 11.5786 6.93913 12 8 12C9.06087 12 10.0783 11.5786 10.8284 10.8284C11.5786 10.0783 12 9.06087 12 8C12 6.93913 11.5786 5.92172 10.8284 5.17157C10.0783 4.42143 9.06087 4 8 4ZM13.2 3.8C13.2 3.53478 13.0946 3.28043 12.9071 3.09289C12.7196 2.90536 12.4652 2.8 12.2 2.8C11.9348 2.8 11.6804 2.90536 11.4929 3.09289C11.3054 3.28043 11.2 3.53478 11.2 3.8C11.2 4.06522 11.3054 4.31957 11.4929 4.50711C11.6804 4.69464 11.9348 4.8 12.2 4.8C12.4652 4.8 12.7196 4.69464 12.9071 4.50711C13.0946 4.31957 13.2 4.06522 13.2 3.8ZM8 5.6C8.63652 5.6 9.24697 5.85286 9.69706 6.30294C10.1471 6.75303 10.4 7.36348 10.4 8C10.4 8.63652 10.1471 9.24697 9.69706 9.69706C9.24697 10.1471 8.63652 10.4 8 10.4C7.36348 10.4 6.75303 10.1471 6.30294 9.69706C5.85286 9.24697 5.6 8.63652 5.6 8C5.6 7.36348 5.85286 6.75303 6.30294 6.30294C6.75303 5.85286 7.36348 5.6 8 5.6Z" fill="#1F1E25"/>
                    </svg>
                  </a>
                </li>
                <li className="social__item social__item--twitter">
                  <a className="social__link" href="https://www.twitter.com/" target="_blank">
                    <span className="visually-hidden">Twitter</span>
                    <svg className="social__link social__link--twitter" width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.9992 1.54324C15.4 1.80812 14.7645 1.98209 14.1138 2.05937C14.7996 1.64947 15.313 1.00438 15.5581 0.244297C14.9144 0.627078 14.2088 0.895338 13.4733 1.04045C12.9793 0.512227 12.3245 0.161908 11.6106 0.0439529C10.8968 -0.0740019 10.164 0.047017 9.52611 0.388195C8.88822 0.729374 8.38099 1.2716 8.08329 1.93057C7.78559 2.58954 7.71409 3.32833 7.87991 4.0321C6.57465 3.96673 5.29775 3.62777 4.13209 3.03724C2.96644 2.4467 1.93809 1.6178 1.11381 0.604331C0.822049 1.10512 0.668725 1.67441 0.669545 2.2539C0.669545 3.39126 1.24882 4.39606 2.12951 4.98435C1.60833 4.96795 1.09861 4.8273 0.642857 4.57411V4.6149C0.643014 5.37238 0.905313 6.1065 1.38528 6.69279C1.86525 7.27907 2.53335 7.68144 3.27629 7.83167C2.79248 7.96269 2.28517 7.98201 1.79278 7.88815C2.00225 8.54016 2.41052 9.11038 2.96043 9.51897C3.51034 9.92757 4.17436 10.1541 4.8595 10.1668C4.17856 10.7012 3.39888 11.0963 2.56506 11.3294C1.73123 11.5625 0.859598 11.6291 0 11.5253C1.50055 12.4897 3.24733 13.0017 5.0314 13C11.0699 13 14.3721 8.0011 14.3721 3.66579C14.3721 3.5246 14.3681 3.38184 14.3619 3.24222C15.0046 2.778 15.5593 2.20293 16 1.54403L15.9992 1.54324Z" fill="#1F1E25"/>
                    </svg>
                  </a>
                </li>
                <li className="social__item social__item--youtube">
                  <a className="social__link" href="https://www.youtube.com/" target="_blank">
                    <span className="visually-hidden">YouTube</span>
                    <svg className="social__link social__link--youtube" width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.6344 2.02963C16 3.4775 16 6.5 16 6.5C16 6.5 16 9.5225 15.6344 10.9704C15.4312 11.7707 14.8368 12.4004 14.084 12.6132C12.7168 13 8 13 8 13C8 13 3.2856 13 1.916 12.6132C1.16 12.3971 0.5664 11.7683 0.3656 10.9704C2.38419e-08 9.5225 0 6.5 0 6.5C0 6.5 2.38419e-08 3.4775 0.3656 2.02963C0.5688 1.22931 1.1632 0.599625 1.916 0.38675C3.2856 -1.45286e-07 8 0 8 0C8 0 12.7168 -1.45286e-07 14.084 0.38675C14.84 0.602875 15.4336 1.23175 15.6344 2.02963ZM6.4 9.34375L11.2 6.5L6.4 3.65625V9.34375Z" fill="#1F1E25"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </section>
          </section>
        </div>
      </footer>
    </div>
  )
};

const mapStateToProps = (state) => ({
  rates: state.rates,
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchRates())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FullPage);
