import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./user/pages/Auth";
// import MainNavigation from "./shared/components/Navigation/MainNavigation";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";
import EventsPage from "./EventsBookingPages/Events";
import BookingsPage from "./EventsBookingPages/Bookings";
import { GraphQLClient, ClientContext } from "graphql-hooks";
import Main from "./shared/layouts/Main";
import Container from "./shared/components/Container";
import Welcome from "./shared/components/Welcome";
import Page from "./shared/components/Page";
import FeedPage from "./Feed/Feed";
import SinglePostPage from "./Feed/SinglePost/SinglePost";

const App = () => {
  const { token, login, logout, userId } = useAuth();
  // const auth = useContext(AuthContext);
  const client = new GraphQLClient({
    url: process.env.REACT_APP_BACKEND_URL + "graphql",
  });
  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Container>
            <Welcome />
          </Container>
          {/*<Users />*/}
        </Route>
        <Route path="/events" component={EventsPage} />
        <Route path="/bookings" component={BookingsPage} />
        <Route path="/feed" exact render={(props) => <FeedPage />} />
        <Route
          path="/feed/:postId"
          render={(props) => <SinglePostPage {...props} />}
        />
        <Route path="/places" exact>
          <Users></Users>
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Route path="/places/:placeId">
          <UpdatePlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Container>
            <Welcome />
          </Container>
        </Route>
        <Route path="/places" exact>
          <Users></Users>
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <ClientContext.Provider value={client}>
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userId: userId,
          login: login,
          logout: logout,
        }}
      >
        <Page>
          <Router>
            <Main>
              {/*<MainNavigation />*/}
              {routes}
            </Main>
          </Router>
        </Page>
      </AuthContext.Provider>
    </ClientContext.Provider>
  );
};

export default App;
