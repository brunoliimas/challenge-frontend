type InputProps = {
    label: string;
    id: string;
    type: string;
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ label, id, type, value, placeholder, onChange }: InputProps) => {
    return (
        <div className="flex flex-col mb-6">
            <label htmlFor={id} className="mb-2">{label}</label>
            <input
                type={type}
                id={id}
                value={value}
                placeholder={placeholder}
                className="px-2 py-1 rounded-md text-black"
                onChange={onChange}
            />
        </div>
    );
}