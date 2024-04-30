import './App.css'
import Content from "./Components/Content"
import Header from "./Components/Header"
import Footer from "./Components/Footer"

const App = () => {
 const course = 'Half Stack Application Development'
 const parts = [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'States of a component',
    exercises: 14
  }
 ]
  

  return (
    <>

      <Header course = {course}/>

      <Content parts = {parts} />
       
      
     <Footer parts = {parts}/>
      
      
      
    </>
  )
}

export default App