export function generateKeys(blocks: any[]) {
  return blocks.map(block => {
    if (block._key) {
      return block;
    }

    return { _key: getStaticKey(block), ...block };
  });
}

function getStaticKey(item: any) {
  return checksum(JSON.stringify(item))
    .toString(36)
    .replace(/[^A-Za-z0-9]/g, "");
}

function checksum(str: string) {
  const strlen = str.length;

  let hash = 0;

  if (strlen === 0) {
    return hash;
  }

  for (let i = 0; i < strlen; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash &= hash; // Convert to 32bit integer
  }

  return hash;
}
