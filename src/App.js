import React, { Component } from 'react'
import './App.css'
import BrowserHistory from './components/BrowserHistory'

class App extends Component {
  state = {
    isDarkMode: false,
  }

  toggleTheme = () => {
    this.setState(prevState => ({ isDarkMode: !prevState.isDarkMode }))
  }

  render() {
    const { isDarkMode } = this.state
    const appClass = isDarkMode ? 'dark' : 'light'

    return (
      <main className={`app-main ${appClass}`}>
        <button className="theme-toggle" onClick={this.toggleTheme}>
          {isDarkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
        <BrowserHistory isDarkMode={isDarkMode}/>
      </main>
    )
  }
}

export default App
