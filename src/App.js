import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import styles from './App.module.css'
// import './App.css'
import { AppBar } from './Components/AppBar/AppBar';
import NotFount from './views/NotFount';
import Container from './Components/Container/Container';
import FormRegister from './views/FormRegister';
import FormLogin from './views/FormLogin';
import HomeView from './views/HomeView';
// import PhoneBook from './Components/PhoneBook/PhoneBook'
import PhoneBookList from './Components/PhoneBookList/PhoneBookList';
import ContactsView from './views/ContactsView';
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
        {/* <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/register">
          <FormRegister />
        </Route>
        <Route path="/login">
          <FormLogin />
        </Route>
        <Route path="/contacts">
          <ContactsView />
        </Route>
        <Route>
          <h2>Not found</h2>
        </Route>
        <Route>
          <NotFount />
        </Route> */}
      </Switch>
    </Container>
  );
}

export default App;
