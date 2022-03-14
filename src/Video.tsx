import { Composition } from 'remotion';
import { WelcomeVideoLayout } from './WelcomeVideoLayout';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="WelcomeVideoLayout"
				component={WelcomeVideoLayout}
				durationInFrames={150}
				fps={30}
				width={800}
				height={400}
			/>
		</>
	);
};
