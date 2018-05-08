const calculateNumberOfGridElements = (height, width, elementSize)=> {
  let area = height*width;
  let countHorizontal = Math.floor(width/elementSize)
  console.log('countHorizontal ', countHorizontal)
  let countVertical = Math.floor(height/elementSize)
  console.log('countvertical ', countVertical)
  return (countHorizontal * countVertical)
}



export default calculateNumberOfGridElements;
