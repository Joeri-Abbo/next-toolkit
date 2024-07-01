  // components/InputArea.tsx
  type InputAreaProps = {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
    rows?: number;
  };

  const InputArea = ({ placeholder, value, onChange, rows = 5 }: InputAreaProps) => (
    <textarea
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border p-2 w-full mb-4 text-black"
    />
  );

  export default InputArea;
