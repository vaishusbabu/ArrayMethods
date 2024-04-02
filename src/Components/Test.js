// import React, { useState } from 'react';

// function Array() {
//     const arr = [2, 3, 4, 6, 7, 1];

//     const [lengthOutput, setLengthOutput] = useState('');
//     const [toStringOutput, setToStringOutput] = useState('');


//     const handleClick = (operation) => {
//         let result;
//         switch (operation) {
//             case "length":
//                 result = arr.length;
//                 setLengthOutput(result);
//                 break;
//             case "toString":
//                 result = arr.toString();
//                 setToStringOutput(result);
//                 break;

//             default:
//                 result = "Operation not supported";
//         }
//     };
//     // const handleInputChange = (e) => {
//     //     setArray(e.target.value.split(',').map(item => parseInt(item.trim(), 10)));
//     //     const inputArray = e.target.value.split(/[\s,]+/).filter(Boolean).map(item => parseInt(item, 10));
//     //     setArr(inputArray);
//     // }

//     return (
//         <div className='maincontainer'>
//             <div>
//                 <p> array =[2, 3, 4, 6, 7, 1]</p>

//                 <div className='d-flex'>
//                     <button className="btn btn-outline-dark w-25 p-3 col-xs-2" onClick={() => handleClick('length')}>length</button>
//                     <input type="text" className="form-control p-3 col-xs-2" id="exampleFormControlInput1" value={lengthOutput} readOnly />
//                 </div>
//                 <div className='d-flex'>
//                     <button className="btn btn-outline-dark mb-3  w-25 p-3" onClick={() => handleClick('toString')}>toString</button>
//                     <input type="text" className="form-control p-3 col-xs-2" id="exampleFormControlInput1" value={toStringOutput} readOnly />
//                 </div>

//             </div><br />
//         </div>
//     );
// }
// import React, { useState } from 'react';

// function Array() {
//     const [arr, setArray] = useState([]);
//     const [length, setLength] = useState('');
//     const [string, setTostring] = useState('');
//     const [at, setAt] = useState('');
//     const [join, setJoin] = useState('');
//     const [pop, setPop] = useState('');
//     const [push, setPush] = useState('');
//     const [shift, setShift] = useState('');
//     const [unshift, setUnshift] = useState('');
//     const [dlt, setDelete] = useState('');
//     const [concat, setConcat] = useState('');
//     const [copy, setCopyWithin] = useState('');
//     const [flat, setFlat] = useState('');
//     const [splice, setSplice] = useState('');
//     const [spliced, setSpliced] = useState('');
//     const [slice, setSliced] = useState('');

//     const handleInputchange = (e) => {
//         setArray(e.target.value.split(',').map(item => parseInt(item.trim(), 10)));
//     }

//     const handleClick = (operation) => {
//         let result;
//         switch (operation) {
//             case "length":
//                 result = arr.length;
//                 setLength(result);
//                 break;
//             case "toString":
//                 result = arr.toString();
//                 setTostring(result);
//                 break;
//             case "at":
//                 result = arr.at(2);
//                 setAt(result);
//                 break;
//             case "join":
//                 result = arr.join('*');
//                 setJoin(result);
//                 break;
//             case "pop":
//                 result = arr.slice(0, arr.length - 1);
//                 setPop(result.pop());
//                 break;
//             case "push":
//                 const newArrPush = [...arr];
//                 newArrPush.push(11, 12);
//                 result = newArrPush;
//                 setArray(newArrPush);
//                 setPush(result);
//                 break;
//             case "shift":
//                 result = arr.slice(1);
//                 setShift(arr[0]);
//                 break;
//             case "unshift":
//                 const newArrUnshift = [...arr];
//                 newArrUnshift.unshift(33, 31);
//                 result = newArrUnshift;
//                 setArray(newArrUnshift);
//                 setUnshift(result);
//                 break;
//             case 'delete':
//                 const newArrDelete = [...arr];
//                 delete newArrDelete[2];
//                 result = newArrDelete;
//                 setArray(newArrDelete);
//                 setDelete(result);
//                 break;
//             case "concat":
//                 result = arr.concat(11, 33);
//                 setConcat(result);
//                 break;
//             case "copyWithin":
//                 const newArrCopyWithin = [...arr];
//                 newArrCopyWithin.copyWithin(2, 0);
//                 result = newArrCopyWithin;
//                 setArray(newArrCopyWithin);
//                 setCopyWithin(result);
//                 break;
//             case "flat":
//                 result = arr.flat();
//                 setFlat(result);
//                 break;
//             case "splice":
//                 const newArrSplice = [...arr];
//                 newArrSplice.splice(2, 0, 100, 101);
//                 result = newArrSplice;
//                 setArray(newArrSplice);
//                 setSplice(result);
//                 break;
//             case "toSpliced":
//                 result = arr.slice(0, 1);
//                 setSpliced(result);
//                 break;
//             case 'slice':
//                 result = arr.slice(2, 4);
//                 setSliced(result);
//                 break;
//             default:
//                 result = "Operation not supported";
//         }
//     };
// export default Array;
import React, { useState } from 'react';

function Array() {
    const [arr, setArray] = useState([]);
    const [length1, setLength] = useState('');
    const [string1, setTostring] = useState('');
    const [at1, setAt] = useState('');
    const [join1, setJoin] = useState('');
    const [pop1, setPop] = useState('');
    const [push1, setPush] = useState('');
    const [shift1, setShift] = useState('');
    const [unshift1, setUnshift] = useState('');
    const [dlt1, setDelete] = useState('');
    const [concat1, setConcat] = useState('');
    const [copy1, setCopyWithin] = useState('');
    const [flat1, setFlat] = useState('');
    const [splice1, setSplice] = useState('');
    const [spliced1, setSpliced] = useState('');
    const [slice1, setSliced] = useState('');

    const handleClick = (operations) => {
        let result = arr;
        switch (operations) {
            case "length":
                result = arr.length;
                setLength(result);
                break;
            case "toString":
                result = arr.toString();
                setTostring(result);
                break;
            case "at":
                result = arr.at(2);
                setAt(result);
                break;
            case "join":
                result = arr.join('*');
                setJoin(result);
                break;
            case "pop":
                result = arr.pop();
                setPop(result);
                break;
            case "push":
                const newArrPush = [...arr];
                newArrPush.push(11, 12);
                result = newArrPush;
                setArray(newArrPush);
                setPush(result);
                break;
            case "shift":
                result = arr.shift();
                setShift(result);
                break;
            case "unshift":
                const newArrUnshift = [...arr];
                newArrUnshift.unshift(33, 31);
                result = newArrUnshift;
                setArray(newArrUnshift);
                setUnshift(result);
                break;
            case 'delete':
                const newArrDelete = [...arr];
                delete newArrDelete[2];
                result = newArrDelete;
                setArray(newArrDelete);
                setDelete(result);
                break;
            case "concat":
                result = arr.concat(11, 33);
                setConcat(result);
                break;
            case "copyWithin":
                const newArrCopyWithin = [...arr];
                newArrCopyWithin.copyWithin(2, 0);
                result = newArrCopyWithin;
                setArray(newArrCopyWithin);
                setCopyWithin(result);
                break;
            case "flat":
                result = arr.flat();
                setFlat(result);
                break;
            case "splice":
                const newArrSplice = [...arr];
                newArrSplice.splice(2, 0, 100, 101);
                result = newArrSplice;
                setArray(newArrSplice);
                setSplice(result);
                break;
            case "toSpliced":
                result = arr.slice(0, 1);
                setSpliced(result);
                break;
            case 'slice':
                result = arr.slice(2, 4);
                setSliced(result);
                break;
            default:
                result = "Operation not supported";
        }
    };

    const handleInputchange = (e) => {
        setArray(e.target.value.split(',').map(item => parseInt(item.trim(), 10)));
    };

    return (
        <div className='maincontainer'>
            <div>
                <input type="text" className="form-control p-3 col-xs-2" id="exampleFormControlInput1" onChange={handleInputchange} />
                <br />
                <div className='d-flex'>
                    <button className="btn btn-outline-dark w-25 p-3 col-xs-2" onClick={() => handleClick('length')}>length</button>
                    <input type="text" className="form-control p-3 col-xs-2" id="exampleFormControlInput1" value={length1} />
                    <br />
                </div>
                <div className='d-flex'>
                    <button className="btn btn-outline-dark  w-25 p-3" onClick={() => handleClick('toString')}>toString</button>
                    <input type="text" className="form-control p-3 col-xs-2" id="exampleFormControlInput1" value={string1} />
                    <br />
                </div>
                <div className='d-flex'>
                    <button className="btn btn-outline-dark  w-25 p-3" onClick={() => handleClick('at')}>at</button>
                    <input type="text" className="form-control p-3 col-xs-2" id="exampleFormControlInput1" value={at1} />
                    <br />
                </div>
                {/* Other operations */}
            </div>
        </div>
    );
}

export default Array;

