import { ReactNode } from "react"

type SectionWrapperProps = {
    title: string;
    children: ReactNode;
}

export default function SectionWrapper({ title, children }: SectionWrapperProps) {
    return (<>
        <h2>{title}</h2>
        {children}
    </>)
}