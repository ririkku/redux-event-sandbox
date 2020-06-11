import React from 'react';

const App = () => {

  const profiles = [
    {name: "Taro", age: 10},
    {name: "Jiro", age: 5},
    {name: "No name"}
  ];

  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>    
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

// Componentにpropsが渡されない場合の初期値を`[Compoent名].defaultProps`
User.defaultProps = {
  age: 1
}

export default App;