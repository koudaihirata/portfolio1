import Btn from "@/components/btn/btn";
import Image from "next/image";
import Link from "next/link";


export default function Miraitouhyou() {

    const handleClick = () => {
        window.open('/企画書.pdf');
    }
    return(
        <>
            <section className="projectsTitle">
                <div>
                    <h2>ミライ投票</h2>
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
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',position:'relative'}}>
                    <Image src="/EXPO.svg" alt="EXPO" width={133} height={148} style={{position:'absolute',top:'-50px',left:'-50px'}} />
                    <Image src="/miraiScreen.svg" alt="ミライ投票" width={564} height={416} />
                </div>
            </section>
            <Link href="https://mirai-touhyou.vercel.app/">https://mirai-touhyou.vercel.app/</Link>
            <section className="projectsStory">
                <h3>ストーリー</h3>
                <p>
                    1年後期の作品でECC EXPOに出展することを目標に考えてこの作品を制作しました。<br />
                    ECC EXPOでは、社会問題を取り扱っている作品が選ばれやすいと聞いたので、社会問題を題材にしたサービスを作成した背景があります。
                </p>
                <h4>反省</h4>
                <p style={{margin:'4px 0'}}>AIに頼りすぎた部分があるなと思ったこと</p>
                <p>
                    あるエラーが出た時、どのようなようなエラーなのかを軽くしか調べずにAIに丸投げした結果その時はエラーが解消したんですが、<br />
                    ビルドした際にAIに丸投げした部分がエラーが出て修正するのにすごく時間が掛かったことです。<br />
                    次からは、程良くAIを取り入れていきたい。
                </p>
                <h4>成長したこと</h4>
                <p style={{margin:'4px 0'}}>ミライ投票が完成に近ずく度に自分が成長しているなと実感できたこと</p>
                <p>
                    完成が近づいた時に最初の方にコーディングしたところを編集する機会があった時に前に書いたコードを見た瞬間に、こっちのコードの方がいいと考え変更したように4ヶ月という短い時間でも最初の方よりは成長しているのかと実感しました。
                </p>
                <div>
                    <Image src="/miraiConcept.svg" alt="ミライ投票コンセプトシート" width={830} height={587} />
                </div>
                <div>
                    <button onClick={handleClick}>proposal</button>
                </div>
            </section>
            <section className="projectsDesign">
                <h3>デザイン</h3>
                <p>
                    ミライ投票のデザインは、シンプルでわかりやすいデザインを心がけました。<br />
                    また、ユーザーがどのような操作をするのかを考えて、ボタンの配置や色などを工夫しました。
                </p>
                <div>
                    <Image src="/miraiLogo.svg" alt="ミライ投票ロゴ" width={257} height={252} />
                    <Image src="/miraiPoster.svg" alt="ミライ投票ポスター" width={385} height={545} />
                </div>
            </section>
        </>
    )
}