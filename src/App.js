import React, { Component } from 'react';
import './App.css';
import './setup.css';
import firebase from './firebase';
import Swal from 'sweetalert2';
import Form from './Form';
import Header from './Header';
import Footer from './Footer';
import SnowFlake from './SnowFlake';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

class App extends Component {
  // create state and make it into an array as it keeps same order.
  constructor() {
    super();
    this.state = {
      wishList: [],
      userInput: ''
    };
  }
  // connect to firebase
  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on('value', snapshot => {
      const wishes = snapshot.val();
      const newWishes = [];
      for (let key in wishes) {
        const individualWish = {
          wishId: key,
          wishTitle: wishes[key]
        };
        newWishes.push(individualWish);
      }

      this.setState({
        wishList: newWishes
      });
    });
  }
  //this is for when the user changes input
  handleChange = event => {
    this.setState({
      userInput: event.target.value
    });
  };

  //when user clicks button
  handleClick = event => {
    event.preventDefault();
    const checkUserInput = this.state.userInput;
    // if input is empty then display invalid entry
    if (checkUserInput === '' || checkUserInput === undefined) {
      Swal.fire({
        type: 'error',
        text: 'This is an invalid entry try again!!',
        icon: 'error'
      });
    } else {
      const dbRef = firebase.database().ref();
      dbRef.push(this.state.userInput);
      // reset into empty string
      this.setState({
        userInput: ''
      });
    }
  };

  // deletewish
  deleteWish = event => {
    const dbRef = firebase.database().ref();
    dbRef.child(event.target.id).remove();
  };

  render() {
    return (
      <div className='App'>
        <div className='wrapper'>
          <SnowFlake />
          <Header />
          <div className='wish-and-form'>
            <div className='wish'>
              <SimpleBar style={{ maxHeight: 575 }}>
                <ul>
                  {this.state.wishList.map((wishValue, i) => {
                    return (
                      <li key={i}>
                        <div className='wish__list'>{wishValue.wishTitle}</div>
                        <div
                          id={wishValue.wishId}
                          className='removeWish wish__removal'
                          onClick={this.deleteWish}
                        >
                          X
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </SimpleBar>
            </div>
            <Form
              whenChange={this.handleChange}
              userValue={this.state.userInput}
              userClick={this.handleClick}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
