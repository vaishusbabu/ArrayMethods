import React, { useState } from 'react'

function Array() {

    // const arr = [2, 3, 4, 6, 7, 1]
    const [arr, setArray] = useState([])
    const [length, setLength] = useState('')
    const [string, setTostring] = useState('')
    const [at, setAt] = useState('')
    const [join, setJoin] = useState('')
    const [pop, setPop] = useState('')
    const [push, setPush] = useState('')
    const [shift, setShift] = useState('')
    const [unshift, setUnshift] = useState('')
    const [dlt, setDelete] = useState('')
    const [concat, setConcat] = useState('')
    const [copy, setCopyWithin] = useState('')
    const [flat, setFlat] = useState('')
    const [splice, setSplice] = useState('')
    const [spliced, setSpliced] = useState('')
    const [slice, setSliced] = useState('')

    const handleClick = (e, operations) => {
        e.preventDefault();
        let result1 = [...arr];
        console.log(arr, "Array");
        let result;
        switch (operations) {

            case "length":
                result = result1.length
                setLength(result);
                break;
            case "toString":
                result = result1.toString();
                setTostring(result)
                break;
            case "at":
                result = result1.at(2);
                setAt(result)
                break;
            case "join":
                result = result1.join('*');
                setJoin(result)
                break;
            case "pop":
                result = result1.pop();
                setPop(result)
                break;
            case "push":
                result1.push(11, 12);
                setPush(result1)
                break;
            case "shift":
                result = result1.shift();
                setShift(result)
                break;
            case "unshift":
                result1.unshift(33, 31);
                setUnshift(result1)
                break;
            case 'delete':
                delete result1[2]
                result = result1;
                setDelete(result)
                break;
            case "concat":
                result = result1.concat(11, 33);
                setConcat(result)
                break;
            case "copyWithin": //copy the elements
                result1.copyWithin(2, 0)
                result = result1
                setCopyWithin(result)
                break;
            case "flat":
                result = result1.flat() //adding subarray into 1 array
                setFlat(result)
                break;
            case "splice":
                result1.splice(2, 0, 100, 101); //index-2, 0-element removed,2 elements added
                result = result1;
                setSplice(result)
                break;
            case "toSpliced":
                result = result1.toSpliced(0, 1);
                setSpliced(result)
                break;
            case 'slice':
                // result = arr.slice(2); remove first 2 element
                result = result1.slice(2, 4); // remove elements from index 2 to 4 - create a new array with index 2-4
                setSliced(result)
                break;
            default:
                result = "Operation not supported";
        }
    }
    const handleInputchange = (e) => {
        setArray(e.target.value.split(','));
    }



    return (
        <div className='maincontainer'>
            <div>

                <input type="text" class="form-control p-3 col-xs-2" onChange={handleInputchange} ></input><br />

                <div className='d-flex'>
                    <button className="btn btn-outline-dark w-25 p-3 col-xs-2" onClick={(e) => handleClick(e, 'length')}>length</button>
                    <input type="text" class="form-control p-3 col-xs-2" value={length}  ></input><br />
                </div>
                <div className='d-flex'>
                    <button className="btn btn-outline-dark  w-25 p-3" onClick={(e) => handleClick(e, 'toString')}>toString </button>
                    <input type="text" class="form-control p-3 col-xs-2" value={string}  ></input><br />
                </div>
                <div className='d-flex'>
                    <button className="btn btn-outline-dark  w-25 p-3" onClick={(e) => handleClick(e, 'at')}> at</button>
                    <input type="text" class="form-control p-3 col-xs-2" value={at}  ></input><br />
                </div>
                <div className='d-flex'>
                    <button className="btn btn-outline-dark  w-25 p-3" onClick={(e) => handleClick(e, 'join')}>join </button>
                    <input type="text" class="form-control p-3 col-xs-2" value={join}  ></input><br />
                </div>
                <div className='d-flex'>
                    <button className="btn btn-outline-dark  w-25 p-3" onClick={(e) => handleClick(e, 'pop')}> pop</button>
                    <input type="text" class="form-control p-3 col-xs-2" value={pop}  ></input><br />
                </div>
                <div className='d-flex'>
                    <button className="btn btn-outline-dark  w-25 p-3" onClick={(e) => handleClick(e, 'push')}>push </button>
                    <input type="text" class="form-control p-3 col-xs-2" value={push}  ></input><br />
                </div>
                <div className='d-flex'>
                    <button className="btn btn-outline-dark  w-25 p-3" onClick={(e) => handleClick(e, 'shift')}>shift </button>
                    <input type="text" class="form-control p-3 col-xs-2" value={shift}  ></input><br />
                </div>
                <div className='d-flex'>
                    <button className="btn btn-outline-dark  w-25 p-3" onClick={(e) => handleClick(e, 'unshift')}> unshift</button>
                    <input type="text" class="form-control p-3 col-xs-2" value={unshift}  ></input><br />
                </div>
                <div className='d-flex'>
                    <button className="btn btn-outline-dark  w-25 p-3" onClick={(e) => handleClick(e, 'delete')}>delete </button>
                    <input type="text" class="form-control p-3 col-xs-2" value={dlt}  ></input><br />
                </div>
                <div className='d-flex'>
                    <button className="btn btn-outline-dark  w-25 p-3" onClick={(e) => handleClick(e, 'concat')}> concat</button>
                    <input type="text" class="form-control p-3 col-xs-2" value={concat}  ></input><br />
                </div>

                <div className='d-flex'>
                    <button className="btn btn-outline-dark  w-25 p-3" onClick={(e) => handleClick(e, "copyWithin")}> copyWithin</button>
                    <input type="text" class="form-control p-3 col-xs-2" value={copy}  ></input><br />
                </div>
                <div className='d-flex'>
                    <button className="btn btn-outline-dark  w-25 p-3" onClick={(e) => handleClick(e, 'flat')}>flat</button>
                    <input type="text" class="form-control p-3 col-xs-2" value={flat}  ></input><br />
                </div>
                <div className='d-flex'>
                    <button className="btn btn-outline-dark  w-25 p-3" onClick={(e) => handleClick(e, 'splice')}>splice</button>
                    <input type="text" class="form-control p-3 col-xs-2" value={splice}  ></input><br />
                </div>
                <div className='d-flex'>
                    <button className="btn btn-outline-dark  w-25 p-3" onClick={(e) => handleClick(e, 'toSpliced')}>toSpliced</button>
                    <input type="text" class="form-control p-3 col-xs-2" value={spliced}  ></input><br />
                </div>
                <div className='d-flex'>
                    <button className="btn btn-outline-dark  w-25 p-3" onClick={(e) => handleClick(e, 'slice')}> slice</button>
                    <input type="text" class="form-control p-3 col-xs-2" value={slice}  ></input><br />
                </div>


            </div><br />


        </div>
    )
}

export default Array

