import React from 'react'
import SkillList from './SkillList'

const Skills = () => {
    return (
        <div className='border-red-500 border-2 w-1/2 flex flex-col flex-wrap content-center'>
            <h2 className='mt-5'>Skills</h2>
            <SkillList />
        </div>
    )
}

export default Skills