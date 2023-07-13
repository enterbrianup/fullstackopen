const Header = (Props) => {
  return (
    <div>
      <h2>{Props.course}</h2>
    </div>
  )

}
const Content = (Props) => {

  return (
    <div>
      <p>{Props.part1} {Props.exercises1}</p>
      <p>{Props.part2} {Props.exercises2}</p>
      <p>{Props.part3} {Props.exercises3}</p>
    </div>
  )
}
const Total = (Props) => {
  return (
    <div>
      <p>Number of exercises {Props.totalExercises}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const totalExercises = exercises1 + exercises2 + exercises3;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3} />
      <Total
        totalExercises={totalExercises} />
    </div>
  )
}

export default App;

