import React from 'react';
import { FlexGrid, Heading } from '@telusdigital/tds';
import { toNumber } from '../../../../Services/';

const SingleHeading = ({ content }) => {
  const { fields } = content;
  return (
    <FlexGrid.Row
      horizontalAlign={fields.horizontalAlign}
      verticalAlign={fields.verticalAlign}
      distribute={fields.distribute}
    >
      <FlexGrid.Col
        span={toNumber(fields.span)}
        offset={toNumber(fields.offset)}
      >
        <Heading level={fields.level}>{fields.body}</Heading>
      </FlexGrid.Col>
    </FlexGrid.Row>
  );
};

export default SingleHeading;
