import React from 'react';
import { ChevronLink, FlexGrid } from '@telusdigital/tds';
import { toNumber } from '../../../../Services/';

const SingleChevronLink = ({ content }) => {
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
        <ChevronLink
          href={fields.href}
          variant={fields.variant}
          direction={fields.direction}
        >
          {fields.label}
        </ChevronLink>
      </FlexGrid.Col>
    </FlexGrid.Row>
  );
};

export default SingleChevronLink;
