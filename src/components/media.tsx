import React, { FC, HTMLProps } from "react";

import { IPicture } from "../interfaces/components";
import { withTheme } from "../context/theme-context";

const Picture: FC<IPicture> = withTheme(({ src, sources, alt, className = "", styles, ...rest }) =>
  <picture {...rest}>
    {sources.map((source: {srcSet?: string, media?: string}) => <source
      srcSet={source.srcSet}
      media={source.media}
    />)}
    <img
      alt={alt}
      src={src}
      className={`image picture ${className}`}
    />
  </picture>
);


const Caption: FC<HTMLProps<any>> = withTheme(({ className = "", children, styles, ...rest }) =>
  <p className={`${styles.text_caption} ${className}`} {...rest}>{children}</p>
);


export { Picture, Caption };
