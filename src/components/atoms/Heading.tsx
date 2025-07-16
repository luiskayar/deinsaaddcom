type Props = {
    children: React.ReactNode;
};

export default function Heading({ children}: Props) {
    return <h3 className="text-xl font-semibold text-blue-800 mb-2">{children}</h3>
}