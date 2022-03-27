import { Composition } from 'remotion';
import { Layout } from './Layout';

export const RemotionVideo: React.FC = () => {
    return (
        <>
            <Composition
                id="WelcomeVideo"
                component={Layout}
                durationInFrames={600}
                fps={30}
                width={800}
                height={400}
            />
        </>
    );
};
