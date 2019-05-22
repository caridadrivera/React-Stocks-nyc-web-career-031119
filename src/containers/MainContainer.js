import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends React.Component {



  render() {
// console.log(this.props.stocks)
    return (
      <div>
        <SearchBar/>
          <div className="row">
            <div className="col-8">
            //sending props to the stocks container
              <StockContainer stocks={this.props.stocks} onClick={this.props.onClick}/>

            </div>
            <div className="col-4">
              <PortfolioContainer portfolio={this.props.portfolio} onOtherClick={this.props.onOtherClick}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
