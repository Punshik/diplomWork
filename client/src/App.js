
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import 'materialize-css'
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext'
import { Navbar } from './components/Navbar'
import { Navbar1 } from './components/Navbar1'
import { Loader } from './components/Loader'

function App() {
  const {token, login, logout, userId, ready} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  if(!ready) {
    return <Loader />
  }

  if(!isAuthenticated) {
    return (
      <AuthContext.Provider value = {{
        token , login , logout  ,userId, isAuthenticated
      }}>
      <Router>
        <Navbar1 />
        <div className="container">
         {routes}
        </div>
      </Router>
      </AuthContext.Provider>
      
    )
  }

  if(isAuthenticated) {return (
    <AuthContext.Provider value = {{
      token , login , logout  ,userId, isAuthenticated
    }}>
     <Router>
       { isAuthenticated && <Navbar />}
      <div className="container">
        {routes}
      </div>
     </Router>
    </AuthContext.Provider>
  );
  }
}

export default App;
