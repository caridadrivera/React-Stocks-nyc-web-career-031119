import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'


const URL = `http://localhost:3000/stocks`

class App extends Component {

  state = {
    stocks: [],
    portfolio: []
  }

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      this.setState({
        /* changign the empty stocks state to the data */
        stocks: data
      })
    })
  }


  handleClick = (stockId) => {
    //let clickedStock = find stock by id basedon which stock was clicked
    //add clickedStock to portfolio in state
    //here we are changing the state to be the stock you clicked based on the ID
    let clickedStock = this.state.stocks.find(stock => {
      return stock.id === stockId
    })
    this.setState({
      portfolio: [...this.state.portfolio, clickedStock]
    })
  }


  handleRemove = (stockId) => {
    let array = this.state.stocks.find(stock => {
      return stock.id !== stockId
    })
    this.setState({
      portfolio: array
    })
  }


  render() {
    return (
      <div>
        <Header/>
        //I am passing in my new portfolio state that has been populated by the clickedStock id
        <MainContainer stocks={this.state.stocks} portfolio={this.state.portfolio} onClick={this.handleClick} onOtherClick={this.handleRemove}/>
        //sending props to the main container */
      </div>
    );
  }
}

export default App;
