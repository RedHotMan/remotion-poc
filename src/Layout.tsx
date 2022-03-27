import { Series } from 'remotion';
import { Hello } from './Sequences/Hello';
import { Welcome } from './Sequences/Welcome';
import { ChooseTeam } from './Sequences/ChooseTeam';

export const Layout: React.FC = () => {
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
            <Series>
                <Series.Sequence durationInFrames={45}>
                    <Hello />
                </Series.Sequence>
                <Series.Sequence durationInFrames={45}>
                    <Welcome />
                </Series.Sequence>
                <Series.Sequence durationInFrames={240}>
                    <ChooseTeam />
                </Series.Sequence>
            </Series>
        </div>
    );
};
