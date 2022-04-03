import { AbsoluteFill } from 'remotion';

export interface PlanetInfo {
    name: string;
    description: string;
    logo: string;
}

export const PlanetDescription: React.FC<{ planetInfo: PlanetInfo }> = ({
    planetInfo,
}) => {
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
            {planetInfo.name}
        </AbsoluteFill>
    );
};
