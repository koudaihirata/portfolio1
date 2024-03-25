import Image from "next/image";
import Link from "next/link";



export default function TECHELPER() {
    const handleClick = () => {
        window.open('/TECHE.pdf');
    }
    return(
        <>
            <section className="projectsTitle">
                <div>
                    <h2>TECHELPER</h2>
                    <p style={{margin:'32px 0 28px'}}>教員の仕事の負担を減らすwebサービス</p>
                    <p>
                        教師の過重労働の問題を解決するための教師を手助けするマッチングアプリ
                    </p>
                    <p style={{marginTop:'30px',color:'#999'}}>制作期間：2023年8月〜（2週間）</p>
                    <p style={{color:'#999'}}>作品種別：1年生/授業外/チーム制作</p>
                    <p style={{color:'#999'}}>担当：LPサイトのデザインコーディング、ロゴ作成</p>
                    <p style={{color:'#999'}}>使用ツール：Illustrator / Photoshop / Figma / HTML / CSS / github / Notion</p>
                </div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Image src="/TECHEScreen.svg" alt="TECHELPER" width={564} height={416} />
                </div>
            </section>
            <Link href="https://koudaihirata.github.io/SIC2023LP/">https://koudaihirata.github.io/SIC2023LP/</Link>
            <section className="projectsStory">
                <h3>ストーリー</h3>
                <p>
                    1年の夏休みの2週間で初めてのチーム制作をしました。<br />
                </p>
                <h4>反省</h4>
                <p style={{margin:'4px 0'}}>短期の厳しさを知ったこと</p>
                <p>
                    今までの授業で制作してきた作品は、1ヶ月以上の制作期間があったので、2週間という短い期間で作品を作るのは難しいと感じました。<br />
                    今後は、短期間での制作にも対応できるように全ての行動を素早く出来るようにしたいです。
                </p>
                <h4>成長したこと</h4>
                <p style={{margin:'4px 0'}}>チームの重要性を知ったこと</p>
                <p>
                    この作品を作るまでは個人製作しか経験がなかったので、他のメンバーとの意見の食い違いや、<br />
                    進捗の遅れなどがあった時に、自分がどのようにすればいいかを考えることができるようになりました。
                </p>
                <div>
                    <Image src="/TECHEConcept.svg" alt="TECHELPERコンセプトシート" width={830} height={587} />
                </div>
                <div>
                    <button onClick={handleClick}>proposal</button>
                </div>
            </section>
            <section className="projectsDesign">
                <h3>デザイン</h3>
                <p>
                    TECHELPERのLPサイトのデザインは、遊び心を意識して作成しました。<br />
                    ロゴは、教師を救い上げるような感じで持ち上げているイメージで作成しました。
                </p>
                <div style={{height:'545px'}}>
                    <Image src="/TECHELPER.svg" alt="TECHELPERロゴ" width={257} height={252} />
                </div>
            </section>
        </>
    )
}