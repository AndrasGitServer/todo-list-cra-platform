import React from 'react';


const Input = props => {


    // props is an object containing an array & a function
    const { list , setList } = props;


    let task_copy =
    {
        name: "",
        isComplete: false
    }
    

    const onChange = event1 => {
        task_copy.name = event1.target.value;
    }// *** onChange => function ***


    const onClick = event2 => {
        event2.target.value="";
        setList([...list, task_copy]);
    }// *** onChange => function ***


    return(
        <div className="container w-50 mt-3">

            <input className='form-control' type='text' name='task_todo' onChange={ onChange }></input>
            <button className='btn btn-primary btn-block mt-1' onClick={ onClick }>Add a Task</button>

        </div>
    );
}// ** Input component ***********************************************



export default Input;
