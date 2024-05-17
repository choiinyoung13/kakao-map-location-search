import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import PageHeader from './Common/PageHeader'
import PageNavigator from './Page/PageNavigator'
import { store } from './Store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PageHeader />
        <PageNavigator />
      </BrowserRouter>
    </Provider>
  )
}

export default App
