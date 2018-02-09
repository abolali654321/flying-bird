import { createClient } from 'contentful';
const client = createClient({
  space: 'vob3qda590l9',
  accessToken:
    'ae226119da3eba51da8708b46930204508c66aef4b448ba8afe49eb23d27ddfa',
  host: 'cdn.contentful.com',
  resolveLinks: true
});
export const getRes = () => {
  return client.getEntries({
    content_type: 'genericSiteBlocks',
    include: 10
  });
};

export const toNumber = str => {
  const number = Number(str);
  return isNaN(number) ? undefined : number;
};
