import { interpolate } from 'remotion';

export const fadeIn = (
    frame: number,
    fadeInStart: number,
    fadeIntEnd: number
): number => {
    return interpolate(frame, [fadeInStart, fadeIntEnd], [0, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
    });
};

export const fadeInAndOut = (
    frame: number,
    fadeInStart: number,
    fadeIntEnd: number,
    fadeOutStart: number,
    fadeOutEnd: number
): number => {
    return interpolate(
        frame,
        [fadeInStart, fadeIntEnd, fadeOutStart, fadeOutEnd],
        [0, 1, 1, 0],
        {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
        }
    );
};
