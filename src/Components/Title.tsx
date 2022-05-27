export const Title: React.FC<{
    content: string;
    style: { [key: string]: string | number };
}> = ({ content, style }) => {
    return (
        <h1
            style={{
                fontWeight: 'bold',
                fontSize: '4em',
                textAlign: 'center',
                ...style,
            }}
        >
            {content}
        </h1>
    );
};
