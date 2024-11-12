interface LabelItemProps {
    label: string;
    data: string;
}

export default function LabelItem({ label, data }: LabelItemProps) {
    return (
        <div className="my-2">
            <p className="text-[#003973] font-bold">{label}</p>
            <p className="text-[#1E1E1E] font-bold">{data}</p>
        </div>
    );
}