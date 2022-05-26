import {
    AbsoluteFill,
    Img,
    Easing,
    interpolate,
    useCurrentFrame,
    useVideoConfig,
} from 'remotion';
import { PlanetInfo } from './PlanetDescription';
import { fadeIn, fadeInAndOut } from '../utils/animations';

export const ChooseTeam: React.FC<{ planetsInfo: PlanetInfo[] }> = ({
    planetsInfo,
}) => {
    const frame = useCurrentFrame();
    const { width, durationInFrames } = useVideoConfig();

    const titlePositionTop = interpolate(
        frame - 7,
        [0, 20, durationInFrames - 20, durationInFrames],
        [0, 80, 80, 0],
        {
            extrapolateRight: 'clamp',
            extrapolateLeft: 'clamp',
            easing: Easing.bezier(0, -0.06, 0.3, 0.96),
        }
    );
    const titleOpacity = fadeInAndOut(
        frame - 7,
        0,
        20,
        durationInFrames - 27,
        durationInFrames - 7
    );

    const backgroundColorScale = interpolate(frame - 5, [0, 15], [0, 50], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
        easing: Easing.ease,
    });

    const fadeInByPlanetIndex = (planetIndex: number): number => {
        // The planet logo fadeIn start at this frame
        const fadeInStart = (planetIndex + 1) * 15;
        // 30 is the animation duration.
        // the frame you start the animation + duration of animation (30)
        // equals last frame
        return fadeIn(frame, fadeInStart, fadeInStart + 30);
    };

    const planetBlockFadeOut = interpolate(
        frame,
        [durationInFrames - 20, durationInFrames],
        [1, 0],
        {
            extrapolateRight: 'clamp',
            extrapolateLeft: 'clamp',
        }
    );

    const planetBlockTranslationY = interpolate(
        frame,
        [durationInFrames - 20, durationInFrames],
        [0, 200],
        {
            extrapolateRight: 'clamp',
            extrapolateLeft: 'clamp',
            easing: Easing.ease,
        }
    );

    return (
        <AbsoluteFill
            style={{
                width: '100%',
                color: '#FFFFFF',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <span
                style={{
                    height: '25px',
                    width: '25px',
                    background:
                        'linear-gradient(to right bottom, #0f4489, #0f4489, #0f458a, #0f458a, #0f458a)',
                    borderRadius: '50%',
                    display: 'inline-block',
                    transform: `scale(${backgroundColorScale})`,
                }}
            />
            <AbsoluteFill
                style={{ opacity: titleOpacity, top: titlePositionTop }}
            >
                <h2>Which team will you be in ?</h2>
            </AbsoluteFill>
            <AbsoluteFill
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    opacity: planetBlockFadeOut,
                    transform: `translateY(${planetBlockTranslationY}px)`,
                }}
            >
                {planetsInfo.map((planet, i) => {
                    return (
                        <div
                            key={`planet${i}`}
                            style={{
                                position: 'absolute',
                                width: width / 4,
                                left: width - 200 * (4 - i),
                                height: 40,
                                opacity: fadeInByPlanetIndex(i),
                            }}
                        >
                            <Img
                                style={{ height: 150, width: 'auto' }}
                                src={planet.logo}
                            />
                        </div>
                    );
                })}
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
