import type { Component } from 'solid-js'

import FeedTabs from './components/FeedTabs'
import { Routes, Route, Navigate } from "@solidjs/router"
import ApiKeyHandler from './components/ApiKeyHandler'

const App: Component = () => {
  return (
    <ApiKeyHandler>
      <div>
        <Routes>
          <Route path="/" element={<Navigate href="/feed"/>}/>
          <Route path="/feed/:id?" component={FeedTabs} />
        </Routes>
      </div>
    </ApiKeyHandler>
  )
}

export default App
