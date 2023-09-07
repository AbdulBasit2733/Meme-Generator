import Draggable from "react-draggable";
const TextEditor = ({ editMode, val, setEditMode, setVal, textColor }) => {
  return (
    <Draggable>
      {editMode ? (
        <input
          className="m-auto"
          onDoubleClick={() => setEditMode(false)}
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      ) : (
        <h1
          style={{ color: textColor }}
          className="text-3xl font-bold"
          onDoubleClick={() => setEditMode(true)}
        >
          {val}
        </h1>
      )}
    </Draggable>
  );
};
export default TextEditor