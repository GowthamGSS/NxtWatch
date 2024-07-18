import React from 'react'

const ContextController = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  activeTab: 'Home',
  toggleTheme: () => {},
  addVideo: () => {},
  changeTab: () => {},
})
export default ContextController
