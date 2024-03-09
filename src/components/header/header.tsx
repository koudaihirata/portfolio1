import Image from "next/image";
import Link from "next/link";



export default function Header() {
    return (
        <header style={{width:'100%',height:'74px',display:'flex',alignItems:'center',justifyContent:'space-between',position:'fixed',top:'0',left:'0',zIndex:'1000',background:'#fff'}}>
            <h1 style={{marginLeft:'30px'}}><Link href="/"><Image src="/logo.svg" alt="logo" width={104} height={56}/></Link></h1>
            <nav style={{marginRight:'100px'}}>
                <ul style={{display:'flex',gap:'50px'}}>
                    <li style={{listStyle:'none'}}><Link href="#" style={{textDecoration:'none',color:'#9F9F9F',fontSize:'24px'}}>profile</Link></li>
                    <li style={{listStyle:'none',}}><Link href="#" style={{textDecoration:'none',color:'#9F9F9F',fontSize:'24px'}}>project</Link></li>
                    <li style={{listStyle:'none',}}><Link href="#" style={{textDecoration:'none',color:'#9F9F9F',fontSize:'24px'}}>contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}