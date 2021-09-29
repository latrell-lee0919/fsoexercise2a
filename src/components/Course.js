import React from 'react'

const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  };
  
  const Part = (props) => {
    console.log(props) 
    return (
      <div>
        <p>{props.part.name}: {props.part.exercises}</p>
      </div>
    )
  }
  
  const Content = ({ parts }) => {
    console.log(parts) 
    return (
      <div>
        {parts.map(part =>
        <Part key={part.name} part={part}/>
          )}
      </div>
    )
  };
  
  const Total = ({ parts }) => {
    console.log(parts)
    return (
      <div>
        <p><b>Total of {parts.reduce(( prevVal, currVal) => prevVal + currVal.exercises, 0)} exercises</b></p>
      </div>
    )
  };
  
  const Course = ({ courses }) => {
    console.log(courses)
    return (
      <div>
        {courses.map(course =>
          <div key={course.id}>
            <Header key={course.id} course={course.name}/>
            <Content key={course.parts.id} parts={course.parts}/> 
            <Total key={course.parts.id} parts={course.parts} /> 
          </div>
          )}
      </div>
      
    )
  }
 
export default Course