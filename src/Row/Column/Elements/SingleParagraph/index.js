import React from 'react';
import { FlexGrid, Paragraph } from '@telusdigital/tds';
import { toNumber } from '../../../../Services/';

const SingleParagraph = ({ content }) => {
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
        <Paragraph
          bold={fields.bold}
          size={fields.size}
          align={fields.align}
          invert={fields.invert}
        >
          {fields.body}
        </Paragraph>
      </FlexGrid.Col>
    </FlexGrid.Row>
  );
};

export default SingleParagraph;
