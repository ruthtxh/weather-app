import { ReactNode } from "react"

type SectionWrapperProps = {
    title: string;
    children: ReactNode;
}

export default function SectionWrapper({ title, children }: SectionWrapperProps) {
    return (<div className="section">
        <h3 className="title">{title}</h3>
        <hr />
        {children}
    </div>)
}