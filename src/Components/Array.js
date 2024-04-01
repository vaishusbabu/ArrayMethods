import React, { useState } from 'react'

function Array() {
    const arr = [2, 3, 4, 6, 7, 1]
    const str = ['apple', 'chakka', 'mangha', 'melon']
    const flat = [[1, 2], [3, 4], [5, 6]]
    const [output, setOutput] = useState('')

    const handleClick = (operations) => {
        let result;
        switch (operations) {
            case "length":
                result = arr.length
                break;
            case "toString":
                result = str.toString();
                break;
            case "at":
                result = arr.at(2);
                break;
            case "join":
                result = arr.join('*');
                break;
            case "pop":
                result = arr.pop();
                break;
            case "push":
                arr.push(11, 12);
                result = arr
                break;
            case "shift":
                result = arr.shift();
                break;
            case "unshift":
                arr.unshift(33, 31);
                result = arr;
                break;
            case 'delete':
                delete arr[2]
                result = arr;
                break;
            case "concat":
                result = arr.concat(11, 33);
                break;
            case "copyWithin":
                arr.copyWithin(2, 0)
                result = arr
                break;
            case "flat":
                result = flat.flat()
                break;
            case "splice":
                arr.splice(2, 0, 100, 101); //index-2, 0-element removed,2 elements added
                result = arr;
                break;
            case "toSpliced":
                result = arr.toSpliced(0, 1);
                break;
            case 'slice':
                // result = arr.slice(2); remove first 2 element
                result = arr.slice(2, 4); // remove elements from index 2 to 4 
                break;
            default:
                result = "Operation not supported";
        }

        setOutput(result)
    }

    return (
        <div className='maincontainer'>
            <div>
                <p>[2, 3, 4, 6, 7, 1]</p>
                <p>['apple', 'chakka', 'mangha', 'melon']</p>
                <p>[[1, 2], [3, 4], [5, 6]]</p>
                <button onClick={() => handleClick('length')}>length</button>
                <button onClick={() => handleClick('toString')}>toString </button>
                <button onClick={() => handleClick('at')}> at</button>
                <button onClick={() => handleClick('join')}>join </button>
                <button onClick={() => handleClick('pop')}> pop</button>
                <button onClick={() => handleClick('push')}>push </button>
                <button onClick={() => handleClick('shift')}>shift </button>
                <button onClick={() => handleClick('unshift')}> unshift</button>
                <button onClick={() => handleClick('delete')}>delete </button>
                <button onClick={() => handleClick('concat')}> concat</button>
                <button onClick={() => handleClick("copyWithin")}> copyWithin</button>
                <button onClick={() => handleClick('flat')}>flat</button>
                <button onClick={() => handleClick('splice')}>splice</button>
                <button onClick={() => handleClick('toSpliced')}>toSpliced</button>
                <button onClick={() => handleClick('slice')}> slice</button>
            </div>
            <input value={output} type='text ' readOnly />
        </div>
    )
}

export default Array