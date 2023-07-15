import React from 'react'
import "./App.css"
import Form from './Form/Form'
const App = () => {
  return (
    <div className='app'>
      <div className='app__container'>
      <h1>registration form</h1>
      <img src='https://theprepminds.com/wp-content/themes/zilom/images/register.png' alt='icon'/>
      </div>
      <Form />
    </div>
  )
}

export default App
