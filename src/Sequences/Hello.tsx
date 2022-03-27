import {
    useCurrentFrame,
    interpolate,
    useVideoConfig,
    AbsoluteFill,
} from 'remotion';
import { Title } from '../Components/Title';

import { fadeInAndOut } from '../utils';

export const Hello: React.FC = () => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();
    const opacity = fadeInAndOut(
        frame,
        0,
        15,
        durationInFrames - 15,
        durationInFrames
    );

    interpolate(
        frame,
        [0, 15, durationInFrames - 15, durationInFrames],
        [0, 1, 1, 0],
        {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
        }
    );

    return (
        <AbsoluteFill style={{ justifyContent: 'center', opacity }}>
            <Title content="Hey astronaut 👋" />
        </AbsoluteFill>
    );
};
