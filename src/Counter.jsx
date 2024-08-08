import React, { useState } from "react";
const Item = ({name,isPacked}) =>{
    // if(isPacked){
    //     return (<li>{name}✓</li>)
    // }
    // return (<li>{name}</li>)
    // return isPacked?<li style={{color:"green"}}>{name} ✓</li>:<li style={{color:"red"}}>{name}</li>
    return (<li>{name}{isPacked&&'✓'}</li>)
}

const Counter = () =>{
    const items= ["Pen","Box","2B pencil","Penchil","Ruler"]
    const itemList = items.map(e=><li>{e}</li>)
    return (
        <>
        {/* {items.map((e)=>(
            <li>{e}</li>
        ))} */}
        <ol>
            {itemList}

        </ol>
        {/* <ol>
            <Item name="Pen" isPacked={true}/>
            <Item name="Box" isPacked={false}/>
            <Item name="2B pencil" isPacked={false}/>
            <Item name="Pencil" isPacked={false}/>
            <Item name="Ruler"isPacked={true}/>
        </ol> */}
        </>
    )
}
// const Counter = () => {
//     const [count, setCount] = useState(0);
//     const [value, setValue] = useState("")
//     // const onTextChange = (event) =>{
//     //     setValue(event.target.value)
//     // }
//     return (
//         <div>
//             <h2 onMouseLeave={() => console.log(1)}>Hi</h2>
//             <button onClick={() => setCount(count + 1)}>click me</button>
//             <button onClick={() => setCount(0)}>reset count</button>
//             <p>your are clicking {count} times</p>
//             <br />
//             <input type="text"
//                 placeholder="typing here for count text"
//                 value={value}
//                 onChange={e => setValue(e.target.value)}
//             />
//             <h3>{value.length}</h3>
//             <h3 onMouseEnter={() => console.log("hi")}>your're typing :{value}</h3>
//             <button onClick={() => setValue("")}>reset value</button>
//         </div>
//     )
// }
export default Counter