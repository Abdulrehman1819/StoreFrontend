import React from 'react'
import Helemt, { Helmet } from "react-helmet"
const MetaData = ({title}) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </div>
  )
}

export default MetaData
