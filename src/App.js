import React, { Component } from 'react';
import Cellule from './Cellule';

import './App.css';

class App extends Component {

  state = {
    playerBlack: true,
    playerWhite: false,
    checkedboard: [
      "","","","","","","","",
      "","","","","","","","",
      "","","","","","","","",
      "","","","white","black","black","black","",
      "","","","black","white","white","white","",
      "","","","","","","","",
      "","","","","","","","",
      "","","","","","","","",
    ]
      /*28: 'white',
      29: 'black',
      37: 'white',
      36: 'black',
      */
  }

  changePlayer = (e) => {
    const id = e.target.id
    if(this.state.checkedboard[id] === ""){
      this.setState(
        {
          ...this.state,
          playerBlack: !this.state.playerBlack,
          playerWhite: !this.state.playerWhite,
        })
        let cellColor = "";
        console.log('playerBlack', this.state.playerBlack)

        if(this.state.playerBlack){
          cellColor =  "black"
        }else{
          cellColor = "white"
        }
          if(this.state.checkedboard[id-1] && this.state.checkedboard[id-1] !== cellColor){
            let count = 1;

            while(this.state.checkedboard[(id-count)] !== "" && this.state.checkedboard[(id -count)] !== cellColor){
              count ++
            }
            const newCell = id - count;

            if(this.state.checkedboard[newCell] === cellColor){
              this.setState((state) => {
                state.checkedboard[id]=cellColor;
                let i = id;
                for(i ; i >= (id-count); i--){
                  state.checkedboard[i]=cellColor
                  console.log("i", i)
                }
                return{
                  checkedboard: state.checkedboard,
                  ...state,
                }
              });
            }
          }
    }
  }
  createGrille = () => {
    const grille = [];
    for(var i = 0; i < 64 ; i++){
      grille.push(
      <Cellule
        value={i}
        dotColor={this.state.checkedboard[i]}
        player={this.state.playerBlack ? "playerBlack" : "playerWhite"}
        changePlayerFunction={this.changePlayer}/>);
    }
    return grille
  }

  render() {
    return (
      <div className="App">
        <div className="grid-container">
          {this.createGrille()}
        </div>
      </div>
    );
  }
}

export default App;
