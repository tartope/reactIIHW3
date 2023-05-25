import React from 'react'
import './Animal.scss'

export const Animal = ({ data }) => {
    // console.log(data)

    const myAnimals = data.map((a, i) =>{
        // console.log(a)
        // console.log(i)
        return  <tr key={i}>
                    <td>{a}</td>
                </tr>
    })


  return (
    <div className='animal'>
        <table>
            <thead></thead>
            <tbody>
                {myAnimals}
            </tbody>
        </table>
    </div>
  )
}
