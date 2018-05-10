const calculateNumberOfGridElements = (height, width, elementSize)=> {
  let area = height*width;
  let countHorizontal = Math.floor(width/elementSize);
  let countVertical = Math.floor(height/elementSize);
  return (countHorizontal * countVertical);
}
export default calculateNumberOfGridElements;
