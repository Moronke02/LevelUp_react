import React from "react"; 


var students = [
  {Name:"Oreofekiitan", Age:21, Hobbies:"Travelling, Reading"},
  {Name:"Moronke", Age:23, Hobbies:"Coding"},
  {Name:"Omotola", Age:20, Hobbies:"Cooking,Eating"},
  {Name:"Ifeoluwa", Age:22, Hobbies:"Playing videogames"}
];

class NewComponent extends React.Component{
  render () {
    return <div>
      {
        students.map(function(student, index){
          return <ol key={student.index}>Name:{student.Name}. Age:{student.Age}. Hobbies:{student.Hobbies}</ol>
        })
      
      }
    </div>
  }
}
export default NewComponent;