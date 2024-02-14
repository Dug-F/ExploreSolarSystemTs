type SetImageSizeFunction = React.Dispatch<React.SetStateAction<{ width: number; height: number }>>;
type HandleResizeFunction = () => void;

const startResizeHandler = (setImageSize: SetImageSizeFunction) => {
  const handleResize = () => {
    const image = document.getElementById("hotspotImage");
    if (image) {
      const rect = image.getBoundingClientRect();
      setImageSize({ width: rect.width, height: rect.height });
    }
  };

  handleResize();

  window.addEventListener("resize", handleResize);

  return handleResize; // Return the handleResize function for cleanup
};

const stopResizeHandler = (handleResize: HandleResizeFunction) => {
  window.removeEventListener("resize", handleResize);
};

export { startResizeHandler, stopResizeHandler };
