import { useCurrentFrame, interpolate } from 'remotion';

export const Title: React.FC<{ content: string }> = ({ content }) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 15], [0, 1], {
		extrapolateRight: 'clamp',
	});

	return (
		<h1
			style={{
				fontWeight: 'bold',
				fontSize: '4em',
				textAlign: 'center',
				position: 'absolute',
				width: '100%',
				top: '40%',
				margin: 0,
				opacity,
			}}
		>
			{content}
		</h1>
	);
};
