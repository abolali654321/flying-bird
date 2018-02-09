import React from 'react';
import { ButtonLink, FlexGrid } from '@telusdigital/tds';
import { toNumber } from '../../../../Services/';

const Button = ({ content }) => {
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
        <ButtonLink href={fields.link} variant={fields.variant}>
          {fields.label}
        </ButtonLink>
      </FlexGrid.Col>
    </FlexGrid.Row>
  );
};

export default Button;
