


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    messageOnError?: string
    type: string
    label: string
    state?: boolean;
    backgroundColor?: string
    maxLength?: number
    rightElement?: () => React.ReactNode
}

export const InputFloatLabel = ({ maxLength, messageOnError, type, label, state, backgroundColor, rightElement: RElement, ...rest }: InputProps) => {

    return (
        <div className="w-full">
            <div className="relative">
                <input type={type} name={label} id={"outlined_error " + label} aria-describedby="outlined_error_help" className={`autofill:bg-clip-text disabled:cursor-not-allowed disabled:bg-zinc-100 block px-2.5 pb-2.5 pt-2 w-full text-sm text-gray-900 dark:text-black-custom bg-transparent dark:bg-gray-200 rounded-lg border-[1px] appearance-none border-gray-300 ${!state ? "dark:border-red-500 border-red-600 dark:focus:border-red-500 focus:border-red-600" : "dark:border-gray-100 border-gray-300 dark:focus:border-gray-200 focus:border-gray-600"} dark:text-black-custom focus:outline-none focus:ring-0 peer`} placeholder=" " maxLength={maxLength} {...rest} />
                {RElement && <div className="absolute top-3 bottom-3 right-3 appearance-none m-0"><RElement /></div>}
                <label htmlFor={"outlined_error " + label} id={label} className={`peer-autofill:top-2 peer-disabled:bg-zinc-100 peer-disabled:cursor-not-allowed absolute text-base ${!state ? "text-red-600 dark:text-red-500" : "text-gray-500 dark:text-gray-400"} duration-200 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] ${backgroundColor ? backgroundColor : "bg-white"} dark:bg-gray-200 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}>{label}</label>
            </div>
            <p id="outlined_error_help" className={` ${!state ? "" : "hidden"} text-xs text-red-600 dark:text-red-400`}>{messageOnError}</p>
        </div>
    )
}