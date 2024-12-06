import React from 'react'
import SkillList from './SkillList'

const Skills = () => {
    return (
        <div className='border-red-500 border-2 flex-1 flex flex-col 
        flex-wrap content-center items-center'>
            <h2 className='my-4 text-4xl'>Skills</h2>
            <SkillList />
        </div>
    )
}

export default Skills