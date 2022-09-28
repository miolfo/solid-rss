import type { Component } from 'solid-js'

import { Routes, Route, Navigate } from "@solidjs/router"
import ApiKeyHandler from './components/ApiKeyHandler'
import Settings from './components/Settings'
import FeedView from './components/FeedView'

const App: Component = () => {
  return (
    <ApiKeyHandler>
      <div>
        <Routes>
          <Route path="/" element={<Navigate href="/feed"/>}/>
          <Route path="/feed/:id?" component={FeedView} />
          <Route path="/settings" component={Settings} />
        </Routes>
      </div>
    </ApiKeyHandler>
  )
}

export default App
