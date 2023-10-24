import React from 'react'
import Card from './Card'
import {data} from "../data/project-data"

const ProjectArea = () => {

  return (
        <div className='w-full lg:mb-40'>
        {
            data.map((items)=>(
                <Card key={items.id} items={items}/>
            ))
        }
        </div>
  )
}

export default ProjectArea