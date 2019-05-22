import React from 'react'

class Stock extends React.Component {

  handleClick = (event) => {
    this.props.onClick(this.props.stock.id)
  }

  render() {
    // debugger
    return (
      <div>
        <div className="card" >
          <div className="card-body"  onClick={this.handleClick} >
            <h5 className="card-title">{
                this.props.stock.name
              }
            </h5>
            <p className="card-text">{
                this.props.stock.price
              }
            </p>
          </div>
        </div>
      </div>
    )
  }
};

export default Stock
