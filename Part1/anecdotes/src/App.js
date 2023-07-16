const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h2>{props.course.name}</h2>
    </div>
  )

};

const Content = (props) => {
console.log(Content);
  return (
    <div>
      {
      props.parts.map((part,index) => (
        <div key={index}>
        <h3>Part {index +1}: {part.name}</h3>
        <p> Exercises: {part.exercises}</p>
        </div>
      ))


      }
    </div>
  )
}
const Total = (props) => {

  let totalExercise = 0;
  props.parts.forEach((part) => {
  totalExercise = totalExercise + part.exercises;
  })
  return (
    <div>
     
      <p>Number of exercises {totalExercise}</p>
    </div>
  )
}
const App = () => {
  const course = {
    name:'Half Stack application development',
  parts: [
    {
    name:'Fundamentals of React',
     exercises: 10
     },
   { 
     name:'Using props to pass data',
     exercises: 7},
  {
     name:'State of a component',
     exercises: 14
  }]
}
// accessing the value of exercises
  // const totalExercises = exercises1 + exercises2 + exercises3;

  return (
    <div>
      <Header course={course} />
      <Content
        parts={course.parts}
        />
      <Total
       parts = {course.parts}/>

    </div>
  )
}

export default App;

