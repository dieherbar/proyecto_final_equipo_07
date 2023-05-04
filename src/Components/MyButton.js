import Button from "react-bootstrap/Button";

export default function MyButton(props) {
  return (
    <>
      <Button
        variant={props.variant}
        color={props.color}
        className={props.className}
        onClick={() => {
          alert(
            "clicked"
          ); /*Asociamos con evento onClick. Mediante props: texto del botón etc*/
        }}
      >
        {props.icon} {props.text}
      </Button>
    </>
  );
}
