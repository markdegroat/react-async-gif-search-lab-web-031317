import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      gifs: []
    }
    this.fetchData = this.fetchData.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  submitHandler(query){
    this.fetchData(query)
  }

  fetchData(query){
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`)
      .then((response) => response.json())
      .then((json) => {
        const gifs = json.data.map(function(result){
          return result.images.fixed_height.url
        })
        this.setState({
          gifs: gifs.slice(0,3)
        })
      })
  }

  render(){
    return(
      <div>
      <GifSearch onSubmit={this.submitHandler}/>
      <GifList gifs={this.state.gifs} />
      </div>
    )
  }

}
