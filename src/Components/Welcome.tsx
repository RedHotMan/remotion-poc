import {
    Img,
    interpolate,
    spring,
    useCurrentFrame,
    useVideoConfig,
} from 'remotion';
import logo from '../assets/elevenLogo.jpeg';

export const Welcome: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const fadeIn = interpolate(frame, [0, 15], [0, 1], {
        extrapolateRight: 'clamp',
    });
    const translation = spring({
        frame: frame - 7,
        fps,
        config: {
            stiffness: 50,
            mass: 0.7,
        },
    });
    const anim = interpolate(translation, [0, 1], [0, -30], {
        extrapolateLeft: 'clamp',
    });

    return (
        <div style={{ fontWeight: 'bold' }}>
            <div
                style={{
                    position: 'absolute',
                    textAlign: 'center',
                    width: '100%',
                    top: '40%',
                    opacity: fadeIn,
                    transform: `translateY(${anim}px)`,
                }}
            >
                <h2 style={{ fontSize: '2em', marginBottom: 0 }}>Welcome to</h2>
                <h2
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '4em',
                        marginTop: 0,
                    }}
                >
                    <Img width={80} src={logo} />
                    Eleven Labs
                </h2>
            </div>
        </div>
    );
};
