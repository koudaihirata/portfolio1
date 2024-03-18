import Link from "next/link";
import "@/components/btn/btn.scss";


export default function Btn({ label, link }: { label: string, link: string }) {
    return (
        <>
            <div className="Btn">
                <Link href={link}>{label}</Link>
            </div>
        </>
    )
}