import type { Component } from 'solid-js'

import FeedTabs from './components/FeedTabs'
import { Routes, Route } from "@solidjs/router"

const App: Component = () => {
  return (
    <div>
      <Routes>
        <Route path="/feed/:id" component={FeedTabs} />
      </Routes>
    </div>
  )
}

export default App
