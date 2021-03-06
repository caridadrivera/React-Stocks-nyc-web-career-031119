import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  //
  // handleStockClick = (e) => {
  //   console.log(e.target)
  //
  // }

  render() {
  
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.portfolio.map(stock => {
              return <Stock stock={stock} />
            })
          }

      </div>
    );
  }

}

export default PortfolioContainer;
