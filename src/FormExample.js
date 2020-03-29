import React from "react"
import { Form } from "semantic-ui-react"

const FormExample = () => (
    <Form>
        <Form.Group>
            <Form.Input label="Email Address" placeholder="Email Address" />
            <Form.Input label="Password" placeholder="Password" />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
    </Form>
)

export default FormExample