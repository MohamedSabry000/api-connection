import React from 'react'
import { Form } from 'react-bootstrap';

export default function Output({out}: {out: string}) {
  return (
    <div>
        <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Output</Form.Label>
                <Form.Control as="textarea" rows={3} name="address" value={out} readOnly />
            </Form.Group>
        </Form>
    </div>
  )
}
