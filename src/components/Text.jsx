import { useState } from "react";
import TextEditor from "./TextEditor";
import ChangeTextColor from "./ChangeTextColor";

const Text = () => {
    const [editMode, setEditMode] = useState(false);
    const [textColor, setTextColor] = useState(null);
    const [val, setVal] = useState("Double Click To Edit");
  
    const getColor = (color) => {
      setTextColor(color);
    };
  
    return (
      <>
        <label>
          Enter Text:
          <TextEditor
            editMode={editMode}
            val={val}
            setEditMode={setEditMode}
            setVal={setVal}
            textColor={textColor}
          />
        </label>
        <label className="flex justify-items-start content-center">
          Change Color:
          <ChangeTextColor getColor={getColor} />
        </label>
      </>
    );
  };

  export default Text;
  
