import { useState } from 'react';
import './style.css'
import Items from '../itemTask';

const Initial_task = [
  { id: 'a', text: 'niloo' },
  { id: 'b', text: 'Work1' },
  { id: 'c', text: 'work2' },
  { id: 'd', text: 'work3' }
]

function Inpute1() {


  const [tasks, seTtasks] = useState(Initial_task)
  const [searchquery, seTsearchquery] = useState('');
  const [newtaskname, seTnewtaskname] = useState('')

  const searchresultTask = tasks.filter(task => task.text.toLowerCase().startsWith(searchquery.toLowerCase()));
  
  function handlechange(e) {
    seTsearchquery(e.target.value)
  }
  function handleDelete(id) {
    // console.log({id});
    const filtertask = tasks.filter(task => task.id !== id);
    seTtasks(filtertask)
  }

  function renderresult() {

    if (searchresultTask.length === 0) {
      return <p>No results found</p>

    }

    return searchresultTask.map(task => (
      <Items
        key={task.id}
        taskID={task.id}
        title={task.text}
        ondelete={handleDelete}>

      </Items>
    ))

  }

  function handleSubmit(e) {
    e.preventDefault()
    const taskcopy= [...tasks];
    taskcopy.push({id:Math.floor(Math.random()*1000),text:newtaskname});
    seTtasks(taskcopy);
  }
  function handleFormchange() {
    return
  }
  return (
    <main className='posts'>
      <input onChange={handlechange}></input>
      {renderresult()}
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleFormchange}></input>
        <button>Add Task</button>

      </form>
    </main>

  )
}
export default Inpute1