import React from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames'

const obj = {
  "key": 12,
}
// Button_primary__...
export const Button = ({ primary, secondary }) => {

  const classNames1 = `${styles.btn} ${primary && styles.primary} ${secondary && styles.secondary}`;
  const classNames2 = classNames(styles.btn,
    {
      [styles.primary]: primary,
      [styles.secondary]: secondary
    }
  );

  return (
    <button className={classNames2}>Button</button>
  )
}
