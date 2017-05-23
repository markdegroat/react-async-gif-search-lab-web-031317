import React from 'react'

export default class GifSearch extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      query: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({
      query: e.target.value
    })
    console.log("handling change",this.state.query)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onSubmit(this.state.query)
  }

  render(){
    return(
      <div className="input-field">
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.query} onChange={this.handleChange}></input>
      </form>
      </div>
    )


  }

}
