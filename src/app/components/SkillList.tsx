import React from 'react'

const SkillList = () => {
  return (
    <div className='flex flex-col flex-wrap w-full'>
        {['Web development', 'Native development', 'Clean code', 'Soft skills'].map(s =>
            <div key={s} className='p-2 pl-5 text-3xl border-2 border-green-400'>{s}</div>
        )}
    </div>
  )
}

export default SkillList