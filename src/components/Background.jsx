import React from 'react';
import { backGroundWidth, gameHeight } from '../utils/constants'

const Background = () => {
	const backgroundStyle = {
		fill: '#30abef',
	};

	return (
		<rect
			style={backgroundStyle}
			x={backGroundWidth/-2}
			y={100 - gameHeight}
			width={backGroundWidth}
			height={gameHeight}
			/>
		);
};

export default Background;