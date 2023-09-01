import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const MemeCard = (props) => {
  const navigate = useNavigate();

  return (
    <Card className=" border-purple-700 border-2" style={{ width: "15rem", margin: "15px" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button className=" text-white font-bold bg-indigo-700 hover:bg-indigo-400" onClick={e => navigate(`/edit?url=${props.img}`)} variant="primary">Edit</Button>
      </Card.Body>
    </Card>
  )
};
export default MemeCard;
