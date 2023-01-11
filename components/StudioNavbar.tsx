import React from 'react'
import Link from 'next/link'
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid"

function StudioNavbar (props:any) {
  return (
<div>
  <div className='flex items-center justify-between p-5'>
  <Link href="/" className="text-[#F7AB0A] flex items-center">
  <ArrowUturnLeftIcon className='h-6 -[#F7AB0A] w-6 text'/>
  </Link>
  </div>
<>{props.renderDefault(props)}</>

</div>
  )
}

export default StudioNavbar
