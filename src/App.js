import {Component} from 'react'
<<<<<<< HEAD
import {Route, Switch, Redirect} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import VideoDetailView from './components/VideoDetailView'
import TrendingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import ThemeAndVideoContext from './context/ThemeAndVideoContext'

=======
import {Switch, Route, Redirect} from 'react-router-dom'
import ContextController from './context/ContextController'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
>>>>>>> origin/main
import './App.css'

class App extends Component {
  state = {
    savedVideos: [],
    isDarkTheme: false,
    activeTab: 'Home',
  }

<<<<<<< HEAD
  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)
    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  removeVideo = id => {
    const {savedVideos} = this.state
    const updatedSavedVideos = savedVideos.filter(
      eachVideo => eachVideo.id !== id,
    )
    this.setState({savedVideos: updatedSavedVideos})
=======
  toggleTheme = () => {
    this.setState(prev => ({isDarkTheme: !prev.isDarkTheme}))
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  addVideo = video => {
    this.setState(prev => ({
      savedVideos: [...prev.savedVideos, video],
    }))
>>>>>>> origin/main
  }

  render() {
    const {savedVideos, isDarkTheme, activeTab} = this.state
    return (
<<<<<<< HEAD
      <ThemeAndVideoContext.Provider
        value={{
          savedVideos,
          isDarkTheme,
          activeTab,
          toggleTheme: this.toggleTheme,
          addVideo: this.addVideo,
          changeTab: this.changeTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailView}
          />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/gaming" component={GamingVideos} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeAndVideoContext.Provider>
    )
  }
}

=======
      <ContextController.Provider
        value={{
          isDarkTheme,
          savedVideos,
          activeTab,
          toggleTheme: this.toggleTheme,
          changeTab: this.changeTab,
          addVideo: this.addVideo,
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
>>>>>>> origin/main
export default App
