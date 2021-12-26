import React, { FC, FormEvent } from "react"

interface InputProps {
  type: string
  placeholder: string
  name: string
  value: string
  onChange: (e: FormEvent<HTMLInputElement>) => void
  error: string
}

const Input: FC<InputProps> = ({
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
      <input
        className={error ? "input is-danger" : "pl-2 outline-none border-none"}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
      {error && <div className="has-text-danger-dark">{error}</div>}
    </div>
  )
}

export default Input
