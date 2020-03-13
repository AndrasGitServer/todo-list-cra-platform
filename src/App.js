import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import TaskTodo from './components/TaskTodo';


function App() {

	const [ list , setList ] = useState(
		[]
	);


	return (
    	<div className="App container" style={{width:'800px'}}>

			<Input list={ list } setList={ setList }/>

			<hr style={{borderTop:'solid red 2px'}}/>

			{
				list.map( (task, i) =>
					<TaskTodo task={ task } setList={ setList } index={i} list={ list } />
				)
			}
		

    	</div>
	);
} // ** App component ************************************************



export default App;
