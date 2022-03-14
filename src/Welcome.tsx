import { useCurrentFrame, interpolate, Sequence } from 'remotion';
import { Title } from './Components/Title';

export const Welcome: React.FC<{
	sequenceBeginning: number;
	sequenceDuration: number;
}> = ({ sequenceBeginning, sequenceDuration }) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(
		frame,
		[sequenceDuration - 15, sequenceDuration],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<div style={{ opacity }}>
			<Sequence
				from={sequenceBeginning}
				durationInFrames={sequenceDuration}
			>
				<Title content="Hey Ilyaçe 👋" />
			</Sequence>
		</div>
	);
};
