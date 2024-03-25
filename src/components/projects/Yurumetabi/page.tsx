import Image from "next/image";
import Link from "next/link";



export default function Yurumetabi() {
    const handleClick = () => {
        window.open('/yurumetabi.pdf');
    }
    return(
        <>
            <section className="projectsTitle">
                <div>
                    <h2>ゆるめ旅</h2>
                    <p style={{margin:'32px 0 28px'}}>目的地に世界１遅く到着するルート案内アプリ</p>
                    <p>
                        あえて遠回りをさせて景色を楽しんだり<br />
                        寄り道しながら目的地へ向かう新しいルート案内アプリ 
                    </p>
                    <p style={{marginTop:'30px',color:'#999'}}>制作期間：2023年10月〜2024年1月末（4ヶ月）</p>
                    <p style={{color:'#999'}}>作品種別：1年生/授業/チーム制作</p>
                    <p style={{color:'#999'}}>担当：shareページのカメラで撮影と写真にタグをつけて保存</p>
                    <p style={{color:'#999'}}>使用ツール：Illustrator / Photoshop / Figma / Next.js / firebase / github / backlog / Notion</p>
                </div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',position:'relative'}}>
                    <Image src="/htmlAward.svg" alt="HTMLアワード" width={133} height={148} style={{position:'absolute',top:'0',left:'0'}} />
                    <Image src="/yurumeScreen.svg" alt="ゆるめ旅" width={564} height={416} />
                </div>
            </section>
            <Link href="https://yurumetabi.vercel.app/">https://yurumetabi.vercel.app/</Link>
            <Link href="https://koudaihirata.github.io/yurumetabi-LP/" >LP：https://koudaihirata.github.io/yurumetabi-LP/</Link>
            <section className="projectsStory">
                <h3>ストーリー</h3>
                <p>
                    1年後期のチーム制作の授業で作りました。<br />
                    この作品は、HTMLアワードという大会で賞を獲得するのを目標にして制作しました。
                </p>
                <h4>反省</h4>
                <p style={{margin:'4px 0'}}>周りに合わせないといけない</p>
                <p>
                    短期のチームではなく、4ヶ月という長い期間でチーム制作を行ったことで、チームの大変さを知ることができました。<br />
                    1.2.3年生の合同チームで作ったので、エンジニアの先輩に合わせた環境で開発が進むので初めて触る技術にすぐに慣れる必要がありました。<br />
                    その為、次回の合同チーム制作では後輩に早くわかりやすく教えないといけないと感じたので<br />
                    これまで以上に言語や技術について理解を深める必要があると感じました。
                </p>
                <h4>成長したこと</h4>
                <p style={{margin:'4px 0'}}>実力がメキメキと伸びるのが実感できた。</p>
                <p>
                    このチームでの4ヶ月間に、自分の技術が上がっているのを実感しました。<br />
                    最初の方は、エンジニアの先輩に教えてもらいながら進めていたのですが、<br />
                    途中からは調べ方も教わり、<br />
                    自分で調べて進めることが出来るようになってからは次々に自分の所に仕事を振ってくれるようになりました。
                </p>
                <div>
                    <Image src="/yurumePresen.svg" alt="ゆるめ旅コンセプト" width={830} height={587} />
                </div>
                <div>
                    <button onClick={handleClick}>proposal</button>
                </div>
            </section>
            <section className="projectsDesign">
                <h3>デザイン</h3>
                <p>
                    ゆるめ旅のデザインは、ゆるーくゆったりまったり旅行が出来るようなデザインを心がけました。<br />
                    また、AIなどを活用してチームのオリジナルキャラクターを作成してみました。
                </p>
                <div>
                    <Image src="/kenpi.svg" alt="ミライ投票ロゴ" width={257} height={252} />
                    <Image src="/yurumeLogo.svg" alt="ミライ投票ポスター" width={385} height={545} />
                </div>
            </section>
        </>
    )
}