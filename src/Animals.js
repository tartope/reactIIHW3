import React from 'react'
import { Animal } from './Animal';
import './Animals.scss'

export const Animals = () => {

    const animalsList = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

  return (
    <div className='animals'>
        <Animal data={animalsList}/>
    </div>
  )
}
