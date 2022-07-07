import React from 'react'
import Form from 'react-bootstrap/Form';

function Filters() {
  return (
    <div>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Number of Characters:</Form.Label>
                    <Form.Control type="number" placeholder="1 to 10 (Default 5)" />
            </Form.Group>
        </Form>
    </div>
  )
}

export default Filters