import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Card, Grid, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
// import { bindActionCreators } from 'redux';
// import { selectPage } from '../actions/actions_navBar';

class CustomDeck extends Component {

  render() {
    return (
      <Grid.Column width={5}>
        <Link to={`/create-custom-deck`}>
          <Card>
            <div style={{textAlign: 'center'}}>
              <strong>{this.props.topic}</strong>
            </div>
            <div>
              <Image src={this.props.image} style={{height: 200, width: 400}}
              />
            </div>
          </Card>
        </Link>
      </Grid.Column>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ selectPage: selectPage }, dispatch);
// };

// export default connect(null, mapDispatchToProps)(CustomDeck);

export default CustomDeck;

// put this back into onClick prop
// && this.props.onDeckSelect(this.props.key)