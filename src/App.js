import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ContextController from './context/ContextController'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

class App extends Component {
  state = {
    savedVideos: [],
    isDarkTheme: false,
    activeTab: 'Home',
  }

  toggleTheme = () => {}

  changeTab = () => {}

  addVideo = () => {}

  render() {
    const {savedVideos, isDarkTheme, activeTab} = this.state
    return (
      <ContextController.Provider
        value={{
          isDarkTheme,
          savedVideos,
          activeTab,
          toggleTheme: this.toggleTheme(),
          changeTab: this.changeTab(),
          addVideo: this.addVideo(),
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ContextController.Provider>
    )
  }
}
export default App
