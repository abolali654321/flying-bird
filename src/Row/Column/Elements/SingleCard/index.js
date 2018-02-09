import React from 'react';
import { FlexGrid, Card, Box } from '@telusdigital/tds';
import Elements from '../../Elements';
import { toNumber } from '../../../../Services/';

const renderElement = (ElementToRender, i, element) => {
  return <ElementToRender key={i} content={element} />;
};

const renderElements = elements => {
  return elements.map((element, i) => {
    let ElementToRender = Elements[element.sys.contentType.sys.id.slice(7)];
    return renderElement(ElementToRender, i, element);
  });
};

const SingleCard = ({ content }) => {
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
        <Card variant={fields.variant}>
          <Box between={toNumber(fields.spaceBetween)}>
            {renderElements(fields.elements)}
          </Box>
        </Card>
      </FlexGrid.Col>
    </FlexGrid.Row>
  );
};

export default SingleCard;
