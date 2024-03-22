import Image from "next/image";
import Link from "next/link";


export default function CARDCONNECT() {
    const handleClick = () => {
        window.open('/2024_03_13_Hチーム_企画書.pdf');
    }
    return(
        <>
            <section className="projectsTitle">
                <div>
                    <h2>CARDCONNECT</h2>
                    <p style={{margin:'32px 0 28px'}}>世の中を便利にするwebサービス</p>
                    <p>
                        未来の投票者として、<br />
                        実際の選挙に関する情報やデータを見ながら、<br />
                        模擬選挙を行ったりすることができるWebサービスです。
                    </p>
                    <p style={{marginTop:'30px',color:'#999'}}>制作期間：2023年10月〜2024年1月末（4ヶ月）</p>
                    <p style={{color:'#999'}}>作品種別：1年生/授業/個人制作</p>
                    <p style={{color:'#999'}}>担当：個人制作のため全て</p>
                    <p style={{color:'#999'}}>使用ツール：Illustrator / Photoshop / Figma / Next.js / firebase / github / backlog / Notion</p>
                </div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Image src="/CARDScreen.svg" alt="CARDCONNECT" width={564} height={416} />
                </div>
            </section>
            <Link href="https://koudaihirata.github.io/CARD-CONNECT/">https://koudaihirata.github.io/CARD-CONNECT/</Link>
            <section className="projectsStory">
                <h3>ストーリー</h3>
                <p>
                    1年後期の作品でECC EXPOに出展することを目標に考えてこの作品を制作しました。<br />
                    ECC EXPOでは、社会問題を取り扱っている作品が選ばれやすいと聞いたので、社会問題を題材にしたサービスを作成した背景があります。
                </p>
                <h4>反省</h4>
                <p style={{margin:'4px 0'}}>AIに頼りすぎた部分があるなと思ったことです。</p>
                <p>
                    あるエラーが出た時、どのようなようなエラーなのかを軽くしか調べずにAIに丸投げした結果その時はエラーが解消したんですが、<br />
                    ビルドした際にAIに丸投げした部分がエラーが出て修正するのにすごく時間が掛かったことです。<br />
                    次からは、程良くAIを取り入れていきたい。
                </p>
                <h4>成長したこと</h4>
                <p style={{margin:'4px 0'}}>ミライ投票が完成に近ずく度に自分が成長しているなと実感できたことです。</p>
                <p>
                    完成が近づいた時に最初の方にコーディングしたところを編集する機会があった時に前に書いたコードを見た瞬間に、こっちのコードの方がいいと考え変更したように4ヶ月という短い時間でも最初の方よりは成長しているのかと実感しました。
                </p>
                <div>
                    <Image src="/CARDPresen.png" alt="CARDCONNECTプレゼン" width={830} height={587} />
                </div>
                <div>
                    <button onClick={handleClick}>proposal</button>
                </div>
            </section>
            <section className="projectsDesign">
                <h3>デザイン</h3>
                <p>
                    CARDCONNECTのデザインは、ビジネスシーンで使われるので誠実感を出した配色にし<br />
                    統一感を出すために、全体的に角丸を使いました。
                </p>
                <div style={{height:'545px'}}>
                    <Image src="/CARDCONNECT.svg" alt="CARDCONNECTロゴ" width={257} height={252} style={{background:'#4F96EA',borderRadius:'5px'}}/>
                </div>
            </section>
        </>
    )}