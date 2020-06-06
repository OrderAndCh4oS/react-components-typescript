import React, { FC, HTMLProps } from 'react'
import styles from '@orderandchaos/react-styles/dist/styles.module.css'

import { IPicture } from '../interfaces/components'

const Picture: FC<IPicture> = ({ src, sources, alt, className = '' }) =>
  <picture>
    {sources.map(source => <source
      srcSet={source.srcSet} media={source.media}
    />)}
    <img
      alt={alt}
      src={src}
      className={`image picture ${className}`}
    />
  </picture>


const Caption: FC<HTMLProps<any>> = ({ className = '', children, ...rest }) =>
  <p className={`${styles.text_caption} ${className}`} {...rest}>{children}</p>


export { Picture, Caption }
