import React from 'react';
import { FlexGrid, Box } from '@telusdigital/tds';
import Elements from './Elements';
import Row from '../../Row';
import { toNumber } from '../../Services';

const renderElement = (ElementToRender, i, element) => {
  return <ElementToRender key={i} content={element} />;
};

const renderElements = elements => {
  return elements.map((element, i) => {
    let ElementToRender = Elements[element.sys.contentType.sys.id.slice(7)];
    return renderElement(ElementToRender, i, element);
  });
};

const renderRows = rows => {
  return rows.map((row, i) => {
    return <Row key={i} row={row} />;
  });
};

const Column = ({ col }) => {
  return (
    <FlexGrid.Col
      offset={toNumber(col.fields.offset)}
      span={toNumber(col.fields.span)}
    >
      {col.fields.elements[0].fields.columns ? (
        renderRows(col.fields.elements)
      ) : (
        <Box between={toNumber(col.fields.spaceBetween)}>
          {renderElements(col.fields.elements)}
        </Box>
      )}
    </FlexGrid.Col>
  );
};

export default Column;
