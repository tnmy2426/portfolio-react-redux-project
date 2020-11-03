import React, { Component } from 'react';
import {connect} from 'react-redux';
import PeopleList from './Components/PeopleList';
import {getPeople} from './Actions';

export class App extends Component {

  componentDidMount(){
    this.props.getPeople()
  }

  render() {
    // console.log(this.props.allPeople)
    return (
      <div>
        <PeopleList people={this.props.allPeople} />
      </div>
    )
  }
}

function mapStateToProps(state){
  // console.log('-+++%%%%%%--',state)
  return{
    allPeople:state.people.getPeople
  }
}

export default connect(mapStateToProps,{getPeople})(App)

