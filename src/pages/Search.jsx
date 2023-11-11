import React from 'react'
import { useParams } from 'react-router'

export default function Search() {
    const {value} = useParams();
  return (
    <div>
      {value}
    </div>
  )
}
