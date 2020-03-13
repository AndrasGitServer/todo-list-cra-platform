import React from 'react';


const TaskTodo = props => {


    const { task , setList , index , list } = props;


    const onClick = event1 => {
        console.log( index );
        console.log( list );
        setList( () => { 
            return list.filter( task => list.indexOf(task) !== index);
        });
    }// *** onClick => function ***


    const onChange = event2 => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list ]);

        // setList( () => {
        //     let temp = list.splice(index,1);
        //     temp.isComplete = !temp.isComplete;
        //     return {...list, temp};
        // });
    }// *** onChange => function ***



    return(

        <div className='container bg-secondary'>
            <h4> { task.name } </h4>
            <div className='container'>
                <label htmlFor='make_choice'> Completed? {task.name} </label>
                <input type='checkbox' id='make_choice' onChange={ onChange } checked={ task.isComplete } />
                <button onClick={ onClick } className='btn btn-sm btn-danger'>X</button>
            </div>
        </div>


    );



}// ** TaskTodo component ********************************************



export default TaskTodo;

