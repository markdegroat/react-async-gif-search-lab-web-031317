import React from 'react'

export default class GifList extends React.Component {


  render(){
    return(
    <div>
    <ul>
      {this.props.gifs.map(function(gif){
        return <li><img src={gif}></img></li>
      })}
    </ul>
    </div>
  )
  }
}
