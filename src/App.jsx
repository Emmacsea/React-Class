import PartCourse from "./Components/CourseParts"
import HeadExercise from "./Components/CourseHeader"
import TotalPart from "./Components/CourseTotal"

const App = () => {
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  return (
    <>

      <HeadExercise name = " React Class"/>

      <PartCourse name = "Part1" number = {10}/>
      <PartCourse name = "Part2" number = {7}/>
      <PartCourse name = "Part3" number = {14}/>

      <TotalPart number = />
      
      
    </>
  )
}

export default App