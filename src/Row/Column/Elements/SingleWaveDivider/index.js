import React from 'react';
import { FlexGrid, WaveDivider } from '@telusdigital/tds';
import { toNumber } from '../../../../Services/';

const SingleWaveDivider = ({ content }) => {
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
        <WaveDivider />
      </FlexGrid.Col>
    </FlexGrid.Row>
  );
};

export default SingleWaveDivider;
