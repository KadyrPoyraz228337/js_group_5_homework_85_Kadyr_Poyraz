import React from 'react';
import './App.css';
import Navigation from "./components/navigation/navigation";
import {Container} from "reactstrap";
import {Route, Switch} from "react-router";
import Artists from "./components/artists/artists";
import Artist from "./components/artist/artist";
import AlbumPage from "./components/albumPage/albumPage";

function App() {
  return (
    <div>
      <Navigation/>
      <Container>
        <Switch>
          <Route path='/' exact component={Artists}/>
          <Route path='/:id' exact component={Artist}/>
          <Route path='/albums/:id' exact component={AlbumPage}/>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
