import Form from 'react-bootstrap/Form';

export default function MyInput(props) {
  return (
    <>
        <Form className="mb-3">
          <Form.Label></Form.Label>
        <Form.Control
          type={props.type}
          placeholder={props.placeholder} />
        </Form>
    </>
  );
}
