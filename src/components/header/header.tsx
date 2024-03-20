"use client"

import Image from "next/image";
import Link from "next/link";
import "@/components/header/header.scss";
import { useRouter } from "next/navigation";


export default function Header() {
    const router = useRouter();

    const handleProfile = () => {
        const element = document.querySelector("#Profile");
        if (element) {
            (element as HTMLElement).scrollIntoView({
            behavior: 'smooth'
            });
        } else {
            router.push("/");
        }
    };    
    const handleProject = () => {
        const element = document.querySelector("#Project");
        if (element) {
            (element as HTMLElement).scrollIntoView({
            behavior: 'smooth'
            });
        } else {
            router.push("/");
        }
    };    
    const handleContact = () => {
        const element = document.querySelector("#Contact");
        if (element) {
            (element as HTMLElement).scrollIntoView({
            behavior: 'smooth'
            });
        } else {
            router.push("/");
        }
    };    


    return (
        <header style={{width:'100%',height:'74px',display:'flex',alignItems:'center',justifyContent:'space-between',position:'fixed',top:'0',left:'0',zIndex:'1000',background:'rgba(255, 255, 255, .5)',borderBottom:'1px solid rgba(255, 255, 255, .5)'}}>
            <h1 style={{marginLeft:'30px'}}><Link href="/"><Image src="/logo.svg" alt="logo" width={104} height={56}/></Link></h1>
            <nav style={{marginRight:'100px'}}>
                <ul style={{display:'flex',gap:'20px'}}>
                    <li className="listStyle"><button className="HLink" onClick={handleProfile}>profile</button></li>
                    <li className="listStyle"><button className="HLink" onClick={handleProject}>project</button></li>
                    <li className="listStyle"><button className="HLink" onClick={handleContact}>contact</button></li>
                </ul>
            </nav>
        </header>
    );
}