import Link from "next/link";


export default function Btn({ label, link }: { label: string, link: string }) {
    return (
        <>
            <div>
                <Link href={link} >{label}</Link>
            </div>
        </>
    )
}