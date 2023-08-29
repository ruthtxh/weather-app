import { ReactNode } from "react"

type IconButtonProps = {
    children?: ReactNode;
    onClick?: (data: any) => void;
}

export default function SectionWrapper({ children, onClick }: IconButtonProps) {
    return (<button className="round-button" onClick={onClick}>{children}</button>
    )
}