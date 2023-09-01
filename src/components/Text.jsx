import { useState } from "react";
import Draggable from "react-draggable";

const Text = () => {

    const [editMode, setEditMode] = useState(false);
    const [val, setVal] = useState("Double Click To Edit");

    // Double CLick Listener
    return (
        <Draggable>
        {
            editMode ? <input className=" m-auto" onDoubleClick={e =>setEditMode(false)} value={val} onChange={e => setVal(e.target.value)} /> : <h1 className=" text-3xl" onDoubleClick={e => setEditMode(true)}>{val}</h1>
        }
        </Draggable>
    )
};


export default Text;