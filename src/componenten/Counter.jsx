
import { useState } from 'react';


function Counter() {
    const [count, setCount] = useState(0);
    const [showInfo, setShowInfo] = useState(false);

    function handleClick() {
        setCount(prev => prev + 1);
        setShowInfo(true);

        setTimeout(() => {
            setShowInfo(false);
        }, 2000);
    }


    return (
        <>
            <button className="counter-button"
                    style={{color: 'red', backgroundColor: count > 2 ? 'red' : 'green', height: '30px', width: '30px'}}
                    onClick=
                        {handleClick}>+</button>
            <p>Aantal: {count}</p>

            {showInfo && <h2>Fruit toegevoegd!</h2>}


                        <button className="counter-button"
                style={{color: 'red', backgroundColor: 'white', height: '30px',width: '30px'}}
                onClick={() => {
                    if (count > 0) {
                        setCount(count - 1);
                    }}
                }
                  > - </button>
           <button onClick={() => setCount(0)}>reset</button>

</>
    );
}
export default Counter;