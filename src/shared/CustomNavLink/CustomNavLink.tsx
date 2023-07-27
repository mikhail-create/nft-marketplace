import React from 'react'
import { Link } from 'react-router-dom'
import { CustomNavLinkPropsType } from 'types/CustomNavLinkPropsType'

import styles from './CustomNavLink.module.scss'

function CustomNavLink({ path, title }: CustomNavLinkPropsType) {
  return (
    <Link className={styles.link} to={path}>
      {title}
    </Link>
  )
}

export default CustomNavLink