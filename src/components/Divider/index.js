import React from 'react'

export default function Divider(props) {
  const { fullWidth } = props

  return (
    <hr style={{ height: '2px', color: 'black', backgroundColor: 'black', width: fullWidth ? '100%' : '90%' }} />
  )

}
