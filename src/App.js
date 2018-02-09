import React, { Component } from 'react';
import { FlexGrid } from '@telusdigital/tds';
import { getRes } from './Services';
import Row from './Row';

class App extends Component {
  state = {
    rows: []
  };
  async componentDidMount() {
    const response = await getRes();
    this.setState({
      rows: response.items[0].fields.blocks
    });
  }
  render() {
    return this.state.rows ? (
      <FlexGrid gutter={this.state.rows.gutter}>
        {this.state.rows.map((row, i) => {
          return <Row key={i} row={row} />;
        })}
      </FlexGrid>
    ) : (
      <div>Loading ...</div>
    );
  }
}

export default App;
