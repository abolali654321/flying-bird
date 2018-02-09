import React from 'react';
import { FlexGrid, DimpleDivider } from '@telusdigital/tds';

const SingleDimpleDivider = ({ content }) => {
  const { fields } = content;
  return (
    <FlexGrid.Row
      horizontalAlign={fields.horizontalAlign}
      verticalAlign={fields.verticalAlign}
      distribute={fields.distribute}
    >
      <FlexGrid.Col span={12} offset={fields.offset}>
        <DimpleDivider />
      </FlexGrid.Col>
    </FlexGrid.Row>
  );
};

export default SingleDimpleDivider;
