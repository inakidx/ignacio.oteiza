import React from 'react'

const SkillList = () => {
  return (
    <div className='flex flex-col flex-wrap'>
        {['Skill1', 'Skill2', 'Skill3'].map(s =>
            <div key={s} className='w-10'>{s}</div>
        )}
    </div>
  )
}

export default SkillList