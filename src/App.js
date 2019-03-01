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
      "","","","black","white","","","",
      "","","","white","black","","","",
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
    const indexClicked = e.target.id
    if(this.state.checkedboard[indexClicked] === ""){
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

        const play = (x) => {
        console.log("x", x)
        if(this.state.checkedboard[indexClicked-x] && this.state.checkedboard[indexClicked-x] !== cellColor){
          let count = x;
          console.log('ok', x)

          while(this.state.checkedboard[(indexClicked-count)] !== "" && this.state.checkedboard[(indexClicked -count)] !== cellColor){
            console.log('inwhile')
            count +=x
          }
          const newCell =indexClicked - count;
          console.log("count", count)
          if(this.state.checkedboard[newCell] === cellColor){
            this.setState((state) => {
              state.checkedboard[indexClicked]=cellColor;
              let i =indexClicked;
              console.log("last condition", x)
                if (x > 0) {
                  for(i ; i >= (indexClicked-count); i-=x){
                    state.checkedboard[i]=cellColor
                  }
                } else {
                  for(i ; i <= (indexClicked-count); i-=x){
                    state.checkedboard[i]=cellColor
                  }
                }

              return{
                checkedboard: state.checkedboard,
                ...state,
              }
            });
          }
        }
      }

      const intervalles = [-9,-8,-7,-1,1,7,8,9];
      intervalles.forEach(x => play(x))
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
