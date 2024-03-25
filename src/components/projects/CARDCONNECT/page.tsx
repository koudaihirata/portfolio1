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
            <Link href="https://koudaihirata.github.io/CARD-CONNECT/">https://koudaihirata.github.io/CARD-CONNECT/</Link>
            <section className="projectsStory">
                <h3>ストーリー</h3>
                <p>
                    春休みの間に、ECCの生徒とその他の7つの学校の計34人で集まってその中でランダムにチームを作り、<br />
                    そのチームで3日間で人間関係に関するWEBサービス・アプリを制作するという企画で制作しました。
                </p>
                <h4>反省</h4>
                <p style={{margin:'4px 0'}}>企画部分に時間を割きすぎたこと</p>
                <p>
                    最初の企画を決める段階でなかなか決まらず、2日目の昼過ぎにようやく決まり実際の作業時間が1日しかなかったことで<br />
                    作業時間が短くなり、最後に急いで作業することになりました。
                </p>
                <h4>成長したこと</h4>
                <p style={{margin:'4px 0'}}>リーダーシップをとってチームをまとめることができたこと</p>
                <p>
                    今回のチーム制作は、学校が違うこともあって技術的な部分での意見の食い違いが多く、<br />
                    チームの中で出来る方だったので、他のメンバーがわからないことを教えたり、指示を出してなんとか形にすることはできた。
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