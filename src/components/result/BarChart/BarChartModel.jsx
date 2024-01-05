import React from 'react'
import SimpleBar from './SimpleBar'
import SimpleBar2 from './SimpleBar2'

export default function BarChartModel({data}) {
  return (
    <div>
      <SimpleBar data={data}/>
      <SimpleBar2 data={data}/>
    </div>

    
  )
}
