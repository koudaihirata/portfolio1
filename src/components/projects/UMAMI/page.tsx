"use client"

import "@/components/projects/projects.scss"
import Image from "next/image";
import Link from "next/link";


export default function UMAMI() {
    const handleClick = () => {
        
    }
    return(
        <>
            <section className="projectsTitle">
                <div>
                    <h2>ＵＭＡＭＩ</h2>
                    <p style={{margin:'32px 0 28px'}}>好きな物✖️カフェのwebサイト</p>
                    <p>
                        競馬好きの人が集うまったり出来るカフェサイト。
                    </p>
                    <p style={{marginTop:'30px',color:'#999'}}>制作期間：2023年5月〜2023年8月（4ヶ月）</p>
                    <p style={{color:'#999'}}>作品種別：1年生/授業/個人制作</p>
                    <p style={{color:'#999'}}>担当：個人制作のため全て</p>
                    <p style={{color:'#999'}}>使用ツール：Illustrator / Photoshop / XD / HTML / CSS / backlog / Notion</p>
                </div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Image src="/UMAMIScreen.svg" alt="UMAMI" width={564} height={416} />
                </div>
            </section>
            <Link href="https://koudaihirata.github.io/UMAMI/">https://koudaihirata.github.io/UMAMI/</Link>
            <section className="projectsStory">
                <h3>ストーリー</h3>
                <p>
                    1年前期の作品で初めてwebサイトを一人で作成しました。<br />
                </p>
                <h4>反省</h4>
                <p style={{margin:'4px 0'}}>制作時間が足りなくなったこと</p>
                <p>
                    初めてのWebサイト制作で、どのようなデザインにするか、どのようなコンテンツを入れるかなど考えることが多く、<br />
                    結果、作業の効率が悪くなり授業最終週の提出の時に未完成のまま出さないといけない事になった。<br />
                    次からは、時間をしっかり確保して作業を進めていきたい。
                </p>
                <h4>成長したこと</h4>
                <p style={{margin:'4px 0'}}>Webサイトの作成の手順がわかったこと</p>
                <p>
                    今回の作品で、Webサイトの作成の手順がわかったことが一番の成長だと思います。<br />
                    この後の作品たちも、完成までの手順がほとんど一緒なのでここで制作における基礎が固めれた。
                </p>
                <div>
                    <Image src="/UMAMIConcept.jpg" alt="UMAMIコンセプトシート" width={500} height={587} />
                </div>
                <div>
                    <button onClick={handleClick}>proposal</button>
                </div>
            </section>
            <section className="projectsDesign">
                <h3>デザイン</h3>
                <p>
                    UMAMIのデザインは、要素がなぜそこにあるのかレイアウトを考えて作成した。
                </p>
                <div>
                    <Image src="/UMAMIlogo.jpg" alt="UMAMIロゴ" width={430} height={252} />
                    <Image src="/UMAMIPoster.jpg" alt="UMAMIポスター" width={385} height={545} />
                </div>
            </section>
        </>
    )
}