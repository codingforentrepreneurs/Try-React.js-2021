import React, {useState} from 'react';

import {LikeBtn} from './buttons/likeBtn'


const App = () => {
    const [count, setCount] = useState(5001)

    const handleClick=(event)=> {
        setCount(count + 1)
    }

    const handleCountUpdate = (newCount) => {
        if (count < newCount) {
            setCount(newCount)
        }
    }

    return <div id='my-app-div' className='text-red another-class'>
        <h1>Hello World</h1>
        <button onClick={handleClick}>My incrementor</button>
        <LikeBtn className='text-red' initCount={count} onCountUpdate={handleCountUpdate} />
    </div>
}

export default App