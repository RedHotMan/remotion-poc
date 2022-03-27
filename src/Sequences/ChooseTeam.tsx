import {
    AbsoluteFill,
    Img,
    Easing,
    interpolate,
    spring,
    useCurrentFrame,
    useVideoConfig,
} from 'remotion';
import Canard from '../assets/Canard.png';
import Chat from '../assets/Chat.png';
import Panda from '../assets/Panda.png';
import Raccoon from '../assets/Raccoon.png';
import { fadeIn } from '../utils';
import { playAndHandleNotAllowedError } from 'remotion/dist/play-and-handle-not-allowed-error';

export const ChooseTeam: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps, width } = useVideoConfig();

    const animationValue = spring({
        frame: frame - 7,
        fps,
        config: {
            damping: 70,
        },
    });
    const titlePositionTop = interpolate(animationValue, [0, 1], [0, 80], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
    });
    const titleOpacity = fadeIn(frame - 15, 0, 15);

    const backgroundColorScale = interpolate(frame - 5, [0, 15], [0, 50], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
        easing: Easing.ease,
    });

    const planetTranslationX = (planetIndex: number) => {
        const finalLeft =
            planetIndex === 0 ? 0 : width - 200 * (4 - planetIndex);

        return interpolate(
            frame - 15,
            [(planetIndex + 1) * 10, (planetIndex + 1) * 10 + 2 * 10],
            [width, finalLeft],
            {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
                easing: Easing.ease,
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
                }}
            >
                {[Raccoon, Chat, Panda, Canard].map((planet, i) => {
                    return (
                        <div
                            style={{
                                position: 'absolute',
                                width: width / 4,
                                height: 40,
                                transform: `translateX(${planetTranslationX(
                                    i
                                )}px)`,
                            }}
                        >
                            <Img
                                style={{ height: 150, width: 'auto' }}
                                src={planet}
                            />
                        </div>
                    );
                })}
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
