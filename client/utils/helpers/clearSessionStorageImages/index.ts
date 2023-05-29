const clearSessionStorageImages = () => {
  sessionStorage.removeItem("imageForRequest");
  sessionStorage.removeItem("pictureForRequest");
};

export default clearSessionStorageImages;
