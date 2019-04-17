import React from "react";
import { connect } from "react-redux";

import Loader from 'react-loader-spinner';

import { CharacterList } from "../components";
// import actions
import { getSwapi } from '../actions/index'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getSwapi();
  }

  render() {
    if (this.props.fetching) {

      // return something here to indicate that you are fetching data
      return <Loader className= 'Audioo' type='Audio' color='black' height='90' width='60' />;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mstp = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.loading
  };
};

export default connect(
  mstp,
  {
    /* action creators go here */
    getSwapi
  }
)(CharacterListView);
