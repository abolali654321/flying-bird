import React from 'react';
import { FlexGrid } from '@telusdigital/tds';
import BigBackGroundImage from './BigBackGroundImage';
import Column from './Column';

const Row = ({ row }) => {
  const { fields } = row;
  return (
    <FlexGrid.Row
      horizontalAlign={fields.horizontalAlign}
      verticalAlign={fields.verticalAlign}
      distribute={fields.distribute}
    >
      {fields.columns.map((col, i) => {
        return <Column key={i} col={col} />;
      })}
      {fields.background ? <BigBackGroundImage bg={fields.background} /> : ''}
    </FlexGrid.Row>
  );
};

export default Row;
