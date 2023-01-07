import React from 'react';
import { Card } from '@mui/material';

import "./style.scss"
import { Button, Form } from 'react-bootstrap';

const AddNewPost = () => {

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log("hai inserito un nuovo post")
  }

  return (
    <>
      <Card className='cardContainer'>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group controlId='insertNewPost'>
            <Form.Control as='textarea' className='textarea' rows={3} placeholder='Inserisci un nuovo post' />
          </Form.Group>
          <Button variant="primary" className='submitButton' type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </>
  )
}

export default AddNewPost