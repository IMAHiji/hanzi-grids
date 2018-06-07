
const calculateNumberOfGridElements = (height, width, elementSize = 1)=> {
  let area = height*width;

  let countHorizontal = Math.floor(width/elementSize);
  let countVertical = Math.floor(height/elementSize);

  let numberOfLines = countVertical;
  let lineLength = countHorizontal;
  console.log('Width', width)
  console.log('Height', height)
  console.log('Horizontal', countHorizontal)
  console.log('Vertical', countVertical)
  let returnObject = {
    numberOfLines,
    lineLength
  };
  return returnObject;
}
export default calculateNumberOfGridElements;
