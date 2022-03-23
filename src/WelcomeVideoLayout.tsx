import { Hello } from './Components/Hello';
import { Welcome } from './Components/Welcome';
import { Sequence } from 'remotion';

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
            <Hello sequenceBeginning={0} sequenceDuration={45} />
            <Sequence from={45} durationInFrames={60}>
                <Welcome />
            </Sequence>
        </div>
    );
};
