import './App.css';
import './index.css'
import { ApolloProvider } from '@apollo/client'
import { client } from './apollo/client'
import {   BrowserRouter,
  Routes,
  Route } from "react-router-dom";

import SideNav from './components/SideNav'
import { ChakraProvider } from '@chakra-ui/react'

import Home from './pages/Home'
import Films from './pages/Films'
import Characters from './pages/Characters'
import FilmDetail from './pages/FilmDetail'
import CharacterDetail from './pages/CharacterDetail'

const LayoutWrapScreen = ({ children }) => {
  return (
    <>
      <div class="flex container mx-auto flex-row">
        <SideNav />
        <div class="container mx-auto px-4">{children}</div>
      </div>
    </>
  )
}

function App() {
  return (
    <ChakraProvider>
      <ApolloProvider client={client}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route exacts path="/" element={(
                  <LayoutWrapScreen>
                  <Home />
                  </LayoutWrapScreen>
                )
              }/>
              <Route exacts path="/films" element={(
                  <LayoutWrapScreen>
                  <Films />
                  </LayoutWrapScreen>
                )
              }/>
              <Route exacts path="/characters" element={(
                  <LayoutWrapScreen>
                  <Characters />
                  </LayoutWrapScreen>
                )
              }/>
              <Route exacts path="/films/:idFilm" element={(
                  <LayoutWrapScreen>
                  <FilmDetail />
                  </LayoutWrapScreen>
                )
              }/>
              <Route exacts path="/characters/:idChar" element={(
                  <LayoutWrapScreen>
                  <CharacterDetail />
                  </LayoutWrapScreen>
                )
              }/>
            </Routes>
          </BrowserRouter>
        </div>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
