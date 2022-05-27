import {
    AbsoluteFill,
    Easing,
    Img,
    interpolate,
    useCurrentFrame,
    useVideoConfig,
} from 'remotion';
import { fadeInAndOut } from '../utils/animations';

export interface PlanetInfo {
    name: string;
    description: string;
    logo: string;
}

export const PlanetDescription: React.FC<{ planetInfo: PlanetInfo }> = ({
    planetInfo,
}) => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();

    const logoFadeInAndOut = (): number => {
        return fadeInAndOut(
            frame - 5,
            0,
            10,
            durationInFrames - 15,
            durationInFrames - 5
        );
    };

    const planetDescriptionTranslation = (): number => {
        return interpolate(
            frame - 5,
            [0, 10, durationInFrames - 15, durationInFrames - 5],
            [50, 0, 0, 50],
            {
                extrapolateRight: 'clamp',
                extrapolateLeft: 'clamp',
                easing: Easing.bezier(0.1, 0.86, 1, 1),
            }
        );
    };

    return (
        <AbsoluteFill
            style={{
                width: '100%',
                color: '#FFFFFF',
                justifyContent: 'center',
                alignItems: 'center',
                background:
                    'linear-gradient(to right bottom, #0f4489, #0f4489, #0f458a, #0f458a, #0f458a)',
            }}
        >
            <Img
                style={{
                    position: 'absolute',
                    top: '15%',
                    height: 150,
                    width: 'auto',
                    opacity: logoFadeInAndOut(),
                }}
                src={planetInfo.logo}
            />
            <div style={{ marginTop: '170px' }}>
                <h2 style={{ opacity: logoFadeInAndOut() }}>
                    {planetInfo.name}
                </h2>
                <p
                    style={{
                        opacity: logoFadeInAndOut(),
                        transform: `translate(${planetDescriptionTranslation()}px)`,
                    }}
                >
                    {planetInfo.description}
                </p>
            </div>
        </AbsoluteFill>
    );
};
