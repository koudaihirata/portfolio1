import Image from "next/image";
import Link from "next/link";


export default function Miraitouhyou() {
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
                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Image src="/miraiScreen.svg" alt="ミライ投票" width={564} height={416} />
                </div>
            </section>
            <Link href="https://mirai-touhyou.vercel.app/">https://mirai-touhyou.vercel.app/</Link>
            <section>

            </section>
        </>
    )
}