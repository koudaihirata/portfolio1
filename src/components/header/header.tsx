"use client"

import Image from "next/image";
import Link from "next/link";
import "@/components/header/header.scss";


export default function Header() {
    return (
        <header style={{width:'100%',height:'74px',display:'flex',alignItems:'center',justifyContent:'space-between',position:'fixed',top:'0',left:'0',zIndex:'1000',background:'rgba(255, 255, 255, .5)',borderBottom:'1px solid rgba(255, 255, 255, .5)'}}>
            <h1 style={{marginLeft:'30px'}}><Link href="/"><Image src="/logo.svg" alt="logo" width={104} height={56}/></Link></h1>
            <nav style={{marginRight:'100px'}}>
                <ul style={{display:'flex',gap:'20px'}}>
                    <li className="listStyle"><Link href="/Profile" className="HLink">profile</Link></li>
                    <li className="listStyle"><Link href="#" className="HLink">project</Link></li>
                    <li className="listStyle"><Link href="#" className="HLink">contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}