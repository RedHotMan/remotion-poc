export const Title: React.FC<{ content: string }> = ({ content }) => {
    return (
        <h1
            style={{
                fontWeight: 'bold',
                fontSize: '4em',
                textAlign: 'center',
            }}
        >
            {content}
        </h1>
    );
};
