import React from 'react';
import { Card, Chip } from '@mui/material';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileVideo, faImage } from '@fortawesome/free-regular-svg-icons';
import iconPotoSvg from './img/iconPhoto.png';

import "./style.scss"
import { Stack } from '@mui/system';

const AddNewPost = () => {

  const handleSubmit = (e: any) => {
    console.log(e)
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
              <img src={iconPotoSvg} className='photoIcon' /> Foto
            </div>
            <div className='photoChip'>
              <img src={iconPotoSvg} className='photoIcon' /> Video
            </div>
          </Stack>
        </Form>
      </Card>
    </>
  )
}

export default AddNewPost