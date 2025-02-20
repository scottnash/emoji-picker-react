import { cx } from 'flairup';
import * as React from 'react';

import { stylesheet } from '../../../Stylesheet/stylesheet';

import SVGMagnifier from './svg/magnifier.svg';

export function IcnSearch() {
  return <div className={cx(styles.icnSearch)} />;
}

const styles = stylesheet.create({
  icnSearch: {
    '.': 'epr-icn-search',
    content: '',
    position: 'absolute',
    top: '50%',
    left: 'var(--epr-search-bar-inner-padding)',
    transform: 'translateY(-50%)',
    width: '20px',
    height: '20px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 0',
    backgroundSize: '20px',
    backgroundImage: `url(${SVGMagnifier})`
  },
  '.epr-dark-theme': {
    icnSearch: {
      backgroundPositionY: '-20px'
    }
  },
  '.epr-auto-theme': {
    icnSearch: {
      '@media (prefers-color-scheme: dark)': {
        backgroundPositionY: '-20px'
      }
    }
  }
});
