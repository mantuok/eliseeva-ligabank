import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import FullPage from '../full-page/full-page';
import PageNotFound from '../page-not-found/page-not-found';

// import {Switch, Route} from 'react-router-dom';
// import PrivateRoute from '../private-route/private-route';
// import MainScreen from '../main-screen/main-screen';
// import OfferScreen from '../offer-screen/offer-screen';
// import FavoritesScreen from '../favorites-screen/favorites-screen';
// import SignInScreen from '../sign-in-screen/sign-in-screen';
// import PageNotFoundScreen from '../page-not-found-screen/page-not-found-screen';
// import {AppRoute} from '../../const';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <FullPage />
        </Route>
        <Route exact path="/page-not-found">
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
    // <Switch>
    //   <Route exact path={AppRoute.MAIN}>
    //     <MainScreen />
    //   </Route>
    //   <Route
    //     exact
    //     path={AppRoute.LOGIN}
    //     render={({history}) => {
    //       return (
    //         <SignInScreen
    //           onLoginSuccess={() => history.push(AppRoute.MAIN)}
    //         />
    //       );
    //     }}
    //   />
    //   <PrivateRoute
    //     exact
    //     path={AppRoute.FAVORITES}
    //     render={() => <FavoritesScreen />}
    //   />
    //   <Route exact path={AppRoute.OFFER}>
    //     <OfferScreen />
    //   </Route>
    //   <Route>
    //     <PageNotFoundScreen />
    //   </Route>
    // </Switch>
  );
};

export default App;
