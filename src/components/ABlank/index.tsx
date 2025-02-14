
export type Props = {
    content: string
    href: string
}

export default function({ content, href }: Props) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>
    )
}
