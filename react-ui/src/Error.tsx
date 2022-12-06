type Props = { error?: string };
const Error = ({ error }: Props) => {
    if (!error) return null;
    return <span className="error">{error}</span>;
};

export default Error;
