import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth'
import Spinner from 'react-spinkit';
import './App.css';
import Chat from './components/Chat';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { auth } from './firebase';
import Login from './components/Login';

function App() {
  const [user, loading] = useAuthState(auth);

  if(loading){
    return(
      <AppLoading>
        <AppLoadingContents>
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968929.png" alt="" />
          <Spinner 
            name='ball-spin-fade-loader'
            color='purple'
            fadeIn='none'
          /> 
        </AppLoadingContents>
      </AppLoading>
    )
  }
  return (
    <div className='app'>
      {!user ? (
        <Login /> 
      ) : (
        <>
          <Header />
          <AppBody>
            <SideBar />
            <Router>
                <Routes>
                  <Route path="/" element={<Chat />}></Route>
                </Routes>
            </Router>
          </AppBody>
        </>
      )}
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;
