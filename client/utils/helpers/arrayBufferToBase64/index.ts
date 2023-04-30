const arrayBufferToBase64 = (arrayBuffer: ArrayBuffer): string => {
  let binary = "";
  const bytes = new Uint8Array(arrayBuffer);

  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return window.btoa(binary);
};

export default arrayBufferToBase64;
