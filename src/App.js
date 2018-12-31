import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetail from './components/projects/ProjectDetail'
import signIn from './components/auth/signIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/ProjectCreate'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/' component={Dashboard}></Route>
            <Route path='/project/:id' component={ProjectDetail}></Route>
            <Route path='/signin' component={signIn}></Route>
            <Route path='/signup' component={SignUp}></Route>
            <Route path='/createProject' component={CreateProject}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
