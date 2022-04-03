import { useCurrentFrame, useVideoConfig, Img, AbsoluteFill } from 'remotion';
import { fadeInAndOut } from '../utils/animations';
import logo from '../assets/elevenLogo.jpeg';

export const Welcome: React.FC = () => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();
    const opacity = fadeInAndOut(
        frame,
        0,
        15,
        durationInFrames - 15,
        durationInFrames
    );

    return (
        <AbsoluteFill
            style={{ justifyContent: 'center', fontWeight: 'bold', opacity }}
        >
            <h2 style={{ fontSize: '2em', margin: 0 }}>Welcome to</h2>
            <h2
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '4em',
                    margin: 0,
                }}
            >
                <Img width={80} src={logo} />
                Eleven Labs
            </h2>
        </AbsoluteFill>
    );
};
