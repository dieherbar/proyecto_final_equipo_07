import Form from 'react-bootstrap/Form';

export default function MyInput() {
  return (
    <>
        <Form className="mb-3">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Dirección o punto de referencia" />
        </Form>
    </>
  );
}
