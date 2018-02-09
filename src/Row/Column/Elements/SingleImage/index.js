import React from 'react';
import { FlexGrid, Image } from '@telusdigital/tds';
import { toNumber } from '../../../../Services/';

const SingleImage = ({ content }) => {
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
        <Image
          src={fields.image.fields.file.url}
          rounded={fields.rounded}
          width={300}
          height={300}
          alt={fields.alt}
        />
      </FlexGrid.Col>
    </FlexGrid.Row>
  );
};

export default SingleImage;
