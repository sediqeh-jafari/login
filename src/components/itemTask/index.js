// import { useState } from 'react'

import './style.css'
function Items ({title, taskID,ondelete}){

    function handleClick(){
        ondelete(taskID)
    }
    return (
        <div className="items">
            <p className='items_text'>{title} 
            <button onClick={handleClick} className='items_button'>X</button></p>
            
        </div>
    )
}

export default Items