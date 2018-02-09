import React from 'react';
import { Image } from '@telusdigital/tds';

const BigBackGroundImage = ({ bg }) => {
  return (
    <div style={{ width: '100%', position: 'absolute', zIndex: -1 }}>
      <Image src={bg.fields.file.url} width="100%" alt={bg.fields.title} />
    </div>
  );
};

export default BigBackGroundImage;
