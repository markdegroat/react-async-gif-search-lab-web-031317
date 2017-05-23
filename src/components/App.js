import React from 'react'

import NavBar from './NavBar'
import GifList from './GifList'
import GifListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component
const gifs = ["www.google.com", "www.bing.com"]
function App() {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        < GifListContainer />
    </div>
  )
}

export default App
