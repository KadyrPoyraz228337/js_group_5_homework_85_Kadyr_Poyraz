import React from 'react';
import './App.css';
import Navigation from "./components/navigation/navigation";
import {Container} from "reactstrap";
import {Route, Switch} from "react-router";
import Artists from "./components/artists/artists";
import Artist from "./components/artist/artist";
import AlbumPage from "./components/albumPage/albumPage";
import Register from "./components/register/register";
import Login from "./components/login/login";
import TrackHistory from "./components/trackHistory/trackHistory";

function App() {
  return (
    <div>
      <Navigation/>
      <Container>
        <Switch>
          <Route path='/' exact component={Artists}/>
          <Route path='/trackHistory' exact component={TrackHistory}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/register' exact component={Register}/>
          <Route path='/:id' exact component={Artist}/>
          <Route path='/albums/:id' exact component={AlbumPage}/>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
