import { Route, Switch } from "react-router-dom";
// import styles from './App.module.css'
// import './App.css'
import { AppBar } from "./Components/AppBar/AppBar";
import NotFount from "./views/NotFount";
import Container from "./Components/Container/Container";
import FormRegister from "./views/FormRegister";
import FormLogin from "./views/FormLogin";
import HomeView from "./views/HomeView";
// import PhoneBook from './Components/PhoneBook/PhoneBook'
import PhoneBookList from "./Components/PhoneBookList/PhoneBookList";

function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/register">
          <FormRegister />
        </Route>
        <Route path="/login">
          <FormLogin />
        </Route>
        <Route path="/contacts">
          <PhoneBookList />
        </Route>
        <Route>
          <h2>Not found</h2>
        </Route>
        <Route>
          <NotFount />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
