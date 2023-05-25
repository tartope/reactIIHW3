import React from 'react'
import { Animal } from './Animal';

export const Animals = () => {

    const animalsList = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

  return (
    <div className='animals'>
        <Animal data={animalsList}/>
    </div>
  )
}
