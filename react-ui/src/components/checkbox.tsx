interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Checkbox(props: CheckboxProps) {
    const { value } = props;

    return <input {...props} type="checkbox" value={value} />;
}
