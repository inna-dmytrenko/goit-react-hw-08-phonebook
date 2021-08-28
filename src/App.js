import { Switch } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AppBar } from './Components/AppBar/AppBar';
import NotFount from './views/NotFount';
import Container from './Components/Container/Container.jsx';
import FormRegister from './views/FormRegister';
import FormLogin from './views/FormLogin';
import HomeView from './views/HomeView';

import PhoneBookList from './Components/PhoneBookList/PhoneBookList';

import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import authOperations from './redux/auth/auth-operations';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <Container>
      <AppBar />
      <Switch>
        <Suspense fallback={<p>Loading...</p>}>
          <PublicRoute path="/" exact component={HomeView} />
          <PrivateRoute
            path="/contacts"
            redirectTo="/login"
            component={PhoneBookList}
          />
          <PublicRoute
            restricted
            path="/login"
            redirectTo="/contacts"
            component={FormLogin}
          />
          <PublicRoute
            redirectTo="/contacts"
            restricted
            path="/register"
            exact
            component={FormRegister}
          />
          {/* <PrivateRoute redirectTo="/login" component={NotFount} /> */}
        </Suspense>
      </Switch>
    </Container>
  );
}

export default App;
