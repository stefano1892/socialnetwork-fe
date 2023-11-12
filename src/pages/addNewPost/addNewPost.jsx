import React from 'react';
import { Card } from '@mui/material';
import { Form } from 'react-bootstrap';
import iconPotoSvg from './addNewPostImg/iconPhoto.png';
import iconVideo from './addNewPostImg/iconVideo.png'

import "./style.scss"
import { Stack } from '@mui/system';

const AddNewPost = () => {

  const handleSubmit = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      console.log('hai inserito un post')
    }
  }

  return (
    <>
      <Card className='cardContainer'>
        <Form>
          <Form.Group controlId='insertNewPost'>
            <Form.Control
              as='textarea'
              className='textarea'
              rows={3}
              placeholder='Inserisci un nuovo post'
              onKeyDown={(e) => handleSubmit(e)}
            />
          </Form.Group>
          <Stack direction="row" className='chipContainer' spacing={1}>
            <div className='photoChip'>
              <img alt="photoIcon" src={iconPotoSvg} className='photoIcon' /> Foto
            </div>
            <div className='videoChip'>
              <img alt="videoIcon" src={iconVideo} className='videoIcon' /> Video
            </div>
          </Stack>
        </Form>
      </Card>
    </>
  )
}

export default AddNewPost