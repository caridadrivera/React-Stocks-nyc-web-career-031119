import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {



  render() {
     // debugger
// console.log(this.props.stocks)

    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.map(stock => {
            return <Stock stock={stock} onClick={this.props.onClick}  />
          })
        }
      </div>
    );

  }

}

export default StockContainer;
