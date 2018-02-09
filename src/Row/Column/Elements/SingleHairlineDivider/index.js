import React from 'react';
import { FlexGrid, HairlineDivider } from '@telusdigital/tds';

const SingleHairlineDivider = ({ content }) => {
  const { fields } = content;
  return (
    <FlexGrid.Row
      horizontalAlign={fields.horizontalAlign}
      verticalAlign={fields.verticalAlign}
      distribute={fields.distribute}
    >
      <FlexGrid.Col span={12} offset={fields.offset}>
        <HairlineDivider />
      </FlexGrid.Col>
    </FlexGrid.Row>
  );
};

export default SingleHairlineDivider;
