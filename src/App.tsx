import type { Component } from 'solid-js'

import logo from './logo.svg'
import styles from './App.module.css'
import FeedTabs from './components/FeedTabs'

const App: Component = () => {
  return (
    <div class={styles.App}>
        <FeedTabs />
    </div>
  )
}

export default App
