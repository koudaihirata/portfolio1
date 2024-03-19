"use client"

import Btn from "@/components/btn/btn";
import { faDiscord, faGithub, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faDashboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{marginBottom:'120px'}}>
      <section className="homeMain">
        <h2><Image src="/logo.svg" alt="logo" width={335} height={182}/></h2>
      </section>
      <section className="profileMain">
        <div>
          <h3 style={{color:'#9F9F9F',fontSize:'24px',margin:'0'}}>profile</h3>
          <p style={{fontSize:'48px',marginTop:'12px',marginBottom:'4px'}}>平田晃大</p>
          <p style={{color:'#9F9F9F',fontSize:'16px',margin:'0'}}>ECCコンピューター専門学校/マルチメディア研究学科/Webデザインコース</p>
          <p style={{color:'#9F9F9F',fontSize:'16px',margin:'0'}}>26年卒業予定</p>
        </div>
        <div style={{marginBottom:'60px'}}>
          <p style={{fontSize:'20px',margin:'0',lineHeight:'46px'}}>
            出来るまでやり続けることを心に決めて生活しています。<br />
            専門学校入学当初、プログラミング経験がなく全く出来ませんでした。<br />
            しかし、勉強をやり続けることで必死にくらい付いて行きました。<br />
            これからも数多くの壁にぶち当たると思いますが、自分が納得出来るまでやり続けます。
          </p>
        </div>
        <Btn label="MORE" link="/Profile" />
        <p>HIRATA</p>
      </section>
      <section className="projectMain">
          <h3 style={{color:'#9F9F9F',fontSize:'24px',margin:'0',textAlign:'center'}}>project</h3>
          <div style={{width:'80%',margin:'42px auto 0'}}>
            <div style={{display:'flex',justifyContent:'space-around'}}>
              <Link href="/projects/UMAMI">
                <div className="projectTitle">
                  <Image src="/UMAMI.svg" alt="UMAMIロゴ" width={275} height={142}/>
                  <p>初めてのWebサイト</p>
                </div>
              </Link>
              <Link href="/projects/TECHELPER">
                <div className="projectTitle">
                  <Image src="/TECHELPER.svg" alt="TECHELPERロゴ" width={250} height={165}/>
                  <p>たった2週間の思い出</p>
                </div>
              </Link>
            </div>
            <div style={{display:'flex',justifyContent:'space-around',marginTop:'75px'}}>
              <Link href="/projects/yurumetabi">
                <div className="projectTitle HTML">
                  <Image src="/yurumetabi.svg" alt="yurumetabiロゴ" width={275} height={100}/>
                  <p>チームの大変さを知る</p>
                </div>
              </Link>
              <Link href="/projects/miraitouhyou">
                <div className="projectTitle EXPO">
                  <Image src="/miraitouhyou.svg" alt="miraitouhyouロゴ" width={180} height={176}/>
                  <p>1年生の集大成</p>
                </div>
              </Link>
            </div>
          </div>
          <p>KOUDAI</p>
      </section>
      <section className="contactMain">
        <h3 style={{color:'#9F9F9F',fontSize:'24px',margin:'0',textAlign:'center'}}>contact</h3>
        <div style={{display:'flex',marginTop:'40px'}}>
          <div className="contactApp">
            <div style={{display:'flex',justifyContent:'space-around'}}>
              <Link href="#"><div><FontAwesomeIcon icon={faInstagram} /></div></Link>
              <Link href="#"><div><FontAwesomeIcon icon={faXTwitter} /></div></Link>
            </div>
            <div style={{display:'flex',justifyContent:'space-around',marginTop:'50px'}}>     
              <Link href="#"><div><FontAwesomeIcon icon={faDiscord} /></div></Link>
              <Link href="#"><div><FontAwesomeIcon icon={faGithub} /></div></Link>
            </div>
          </div>
          <div className="contactMail">
            <p style={{fontSize:'24px'}}>email：hiratakoudai61@gmali.com</p>
            <p style={{fontSize:'24px'}}>tell：080-3111-6771</p>
          </div>
        </div>
      </section>
    </main>
  );
}
