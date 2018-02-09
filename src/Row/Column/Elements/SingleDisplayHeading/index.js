import React from 'react';
import { FlexGrid, DisplayHeading } from '@telusdigital/tds';

const SingleDisplayHeading = ({ content }) => {
  const { fields } = content;
  return (
    <FlexGrid.Row
      horizontalAlign={fields.horizontalAlign}
      verticalAlign={fields.verticalAlign}
      distribute={fields.distribute}
    >
      <FlexGrid.Col>
        <DisplayHeading invert={fields.invert}>{fields.body}</DisplayHeading>
      </FlexGrid.Col>
    </FlexGrid.Row>
  );
};

export default SingleDisplayHeading;
