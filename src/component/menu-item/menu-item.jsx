import React from 'react';
import './menu-item.scss'

const MenuItem =({icon, children})=>{

  return(
  <li icon={icon}>{children}</li>
  )
}
export default MenuItem;
