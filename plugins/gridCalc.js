
const calculateNumberOfGridElements = (height, width, elementSize = 1)=> {
  let area = height*width;

  let countHorizontal = Math.floor(width/elementSize);
  let countVertical = Math.floor(height/elementSize);

  let numberOfLines = countVertical;
  let lineLength = countHorizontal;
  let returnObject = {
    numberOfLines,
    lineLength
  };
  return returnObject;
}
export default calculateNumberOfGridElements;
