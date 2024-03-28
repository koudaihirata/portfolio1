"use client"

import Image from "next/image"
import "@/app/Profile/Profile.scss"


export default function Profile() {
    return(
        <main style={{margin:'74px 0 120px'}}>
            <section className="ProfileTitle">
                <div>
                    <h2>平田晃大</h2>
                    <p style={{margin:'32px 0 28px'}}>
                        ECCコンピュータ専門学校/マルチメディア研究学科/Webデザインコース<br />
                        26年卒業予定
                    </p>
                    <p>
                        2002年 6月1日/大阪府生まれ/大阪府育ち/好きな食べ物はラーメン                    
                    </p>
                    <p style={{marginTop:'30px'}}>
                        友人がその道に楽しそうに進んでいたので自分もやってみたいなと思いweb・IT業界に興味を持ちました。
                    </p>
                </div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'330px',height:'330px',background:'#F7F7F7',borderRadius:'20px'}}>
                    <Image src="/MyPhoto.svg" alt="自分の写真" width={300} height={300} />
                </div>
            </section>
        </main>
    )
}