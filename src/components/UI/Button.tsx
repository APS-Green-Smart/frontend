import React, { ButtonHTMLAttributes, RefObject } from "react";
import { IconProps } from "@phosphor-icons/react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Title: string,
  buttonRef?: RefObject<HTMLButtonElement>
  leftIcon?:  React.ReactNode
  RightIcon?: React.ReactNode
  Icon?: React.FC<IconProps>
}

export const Button = ({ buttonRef, Title, leftIcon, RightIcon, Icon: Icon, ...rest }: ButtonProps) => {

  return (
    <button className="bg-green-custom py-1 px-3 w-full text-white rounded-lg md:text-lg flex justify-center items-center gap-2 transition-all hover:bg-green-custom-strong disabled:animate-pulse" {...rest} ref={buttonRef}>
      {leftIcon && Icon && <Icon size={26} weight="fill" className="text-black-custom"/>}
      {Title}
      {RightIcon && Icon && <Icon size={26} weight="fill" className="text-black-custom" />}
    </button>
  )
}

// erro de slint
Button.displayName = "Button";


