import React from 'react'
import { Link } from 'react-router-dom'
import { CustomNavLinkType } from 'types/CustomNavLinkType'
import styles from './CustomNavLink.module.scss'

function CustomNavLink({ path, title }: CustomNavLinkType) {
  return (
    <Link className={styles.link} to={path}>
      {title}
    </Link>
  )
}

export default CustomNavLink