import { AbsoluteFill, useVideoConfig, useCurrentFrame } from 'remotion';
import { Gif } from '@remotion/gif';
import { Title } from '../Components/Title';
import { fadeIn } from '../utils/animations';

export const Wheel: React.FC = () => {
    const { width, height } = useVideoConfig();
    const frame = useCurrentFrame();

    return (
        <AbsoluteFill
            style={{
                background:
                    'linear-gradient(to right bottom, #0f4489, #0f4489, #0f458a, #0f458a, #0f458a)',
                width: '100%',
                color: '#FFFFFF',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    opacity: fadeIn(frame - 5, 0, 10),
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Gif
                    src="https://media.giphy.com/media/1BgclsaCOrVjIAmSfy/giphy.gif"
                    width={width}
                    height={height}
                    fit="fill"
                />
                <Title
                    content={'Let the wheel decide !'}
                    style={{ position: 'absolute' }}
                />
            </div>
        </AbsoluteFill>
    );
};
