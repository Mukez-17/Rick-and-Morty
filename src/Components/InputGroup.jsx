import React from 'react';
import { Form } from 'react-bootstrap';

const InputGroup = ({ name, total, setId }) => {
  return (
    <div>
        <Form.Select onChange={(e) => {setId(e.target.value)}}>
            <option key={1} value={1}>Choose...</option>
            {[...Array(total).keys()].map((x, index) => (
                <option key={index} value={x + 1}>{name} - {x + 1}</option>
            ))}
        </Form.Select>
    </div>
  )
}

export default InputGroup;