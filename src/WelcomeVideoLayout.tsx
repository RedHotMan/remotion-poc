import { Welcome } from './Welcome';

export const WelcomeVideoLayout: React.FC = () => {
	return (
		<div
			style={{
				fontFamily: 'SF Pro Text, Helvetica, Arial',
				backgroundColor: 'white',
				flex: 1,
				textAlign: 'center',
				color: '#3E497A',
			}}
		>
			<Welcome sequenceBeginning={0} sequenceDuration={90} />
		</div>
	);
};
