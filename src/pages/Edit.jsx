import { useState,createRef } from "react";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom"
import Text from "../components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";


const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);

  const memeRef = createRef(); // png code


  const addText = () => {
    setCount(count+1);
  }
  return (
    <div className=" m-auto">
      <div style={{width:"600px", border:"1px solid"}} ref={memeRef} className="meme mt-5 mb-5">{/* {savingto png} */}
    
        <img src={params.get("url")} width="250px" />
        {
            Array(count).fill(0).map(e => <Text/>)
        }
      </div>
      <Button className=" border-purple-800 hover:border-purple-600 rounded-lg font-bold text-white bg-purple-800 hover:bg-purple-600 " onClick={addText}>Add Text</Button>
      <Button className=" bg-green-800 font-bold hover:bg-green-400 hover:text-black " style={{marginLeft:"20px"}} variant="success" onClick={(e) => exportComponentAsJPEG(memeRef)}>Save</Button>{/* {JPeg code} */}
    </div>
  );
};
export default EditPage;
