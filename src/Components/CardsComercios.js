import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function CardsComercios(props) {
  return (
    <>
      <Card
        style={{
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <Card.Img src={props.src} width="20px" height="50px" />
      </Card>
    </>
  );
}
