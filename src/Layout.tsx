import { Series } from 'remotion';
import { Hello } from './Sequences/Hello';
import { Welcome } from './Sequences/Welcome';
import { ChooseTeam } from './Sequences/ChooseTeam';
import { PlanetDescription } from './Sequences/PlanetDescription';

import planets from './utils/planets';
import { Wheel } from './Sequences/Wheel';

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
                <Series.Sequence durationInFrames={120}>
                    <ChooseTeam planetsInfo={planets} />
                </Series.Sequence>
                {planets.map((planet) => (
                    <Series.Sequence durationInFrames={75}>
                        <PlanetDescription planetInfo={planet} />
                    </Series.Sequence>
                ))}
                <Series.Sequence durationInFrames={60}>
                    <Wheel />
                </Series.Sequence>
            </Series>
        </div>
    );
};
