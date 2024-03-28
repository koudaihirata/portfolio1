"use client"

import Image from "next/image"
import "@/app/Profile/Profile.scss"


export default function Profile() {
    return(
        <main style={{margin:'74px 0 120px'}}>
            <section className="ProfileTitle">
                <div>
                    <h2>平田晃大</h2>
                    <p style={{margin:'32px 0 28px'}}>人間関係をもとに新しいWEBサービス・アプリを制作</p>
                    <p>
                        就活生と企業をつなぐ
                        デジタル名刺交換アプリ
                    </p>
                    <p style={{marginTop:'30px',color:'#999'}}>制作期間：2024年3月11日〜2024年3月13日（3日間）</p>
                    <p style={{color:'#999'}}>作品種別：1年生/授業外/チーム制作</p>
                    <p style={{color:'#999'}}>担当：フロントエンドと一部デザイン</p>
                    <p style={{color:'#999'}}>使用ツール：HTML / CSS / JS / PowerPoint / Figma / github / Notion</p>
                </div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Image src="/CARDScreen.svg" alt="CARDCONNECT" width={564} height={416} />
                </div>
            </section>
        </main>
    )
}