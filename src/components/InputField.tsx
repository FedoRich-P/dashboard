import { FieldError } from 'react-hook-form';
import { InputHTMLAttributes } from 'react';

type InputFieldProps = {
  label: string;
  type?: string;
  register: any;
  name: string;
  defaultValue?: string;
  error?: FieldError;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
};

export function  InputField  ( props: InputFieldProps) {
  const { label,type = "text", register, name,defaultValue,error, inputProps} = props;

  return (
    <li className="flex flex-col gap-1.5 w-full md:w-[29%]">
      <label className="text-xs text-gray-500">{label}</label>
      <input
        type={type}
        {...register(name)}
        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
        {...inputProps}
        defaultValue={defaultValue}
      />
      {error?.message && (
        <p className="text-xs text-red-400">{error.message.toString()}</p>
      )}
    </li>
  );
}