import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SvgTypes} from '../../types/svgTypes.ts';

const ArrowUp = (props: SvgTypes) => {
  const {width, height, color, style} = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 12 21" fill="none" style={style}>
      <Path
        d="M6.05.47a.75.75 0 00-1.06 0L.215 5.243a.75.75 0 101.06 1.06L5.52 2.061l4.242 4.242a.75.75 0 101.06-1.06L6.05.47zM4.77 20a.75.75 0 001.5 0h-1.5zm0-19v19h1.5V1h-1.5z"
        fill={color}
      />
    </Svg>
  );
};

export default ArrowUp;

ArrowUp.defaultProps = {
  width: 12,
  height: 21,
  color: '#0179CF',
};
