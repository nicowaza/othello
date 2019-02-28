import React, { Component } from 'react';
class Cellule extends Component {


  selectCell = () => {
    const activePlayer = this.props.player;
    console.log("activePlayer", activePlayer)

    /*si IndexcurrentCell
    si this.state.case[IndexcurrentCell] === 0
    alors
    array =  [i-9, i-8, i-7, i-1, i+1, i+7, i+8, i+9]
    for Each(array[I] => )
    array.filter(i => this.state.case[value])
    si player1 est true alors */
  }


  render(){

    return (
      <div className="grid-item" id={this.props.value} onClick={this.props.changePlayerFunction}>
        <div className="pion">
          <span className={`dot ${this.props.dotColor}`}></span>
        </div>
      </div>
    );
  }
}

export default Cellule;