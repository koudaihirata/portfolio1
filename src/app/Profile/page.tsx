"use client"

import Image from "next/image"
import "@/app/Profile/Profile.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCss3Alt, faDocker, faHtml5, faJs, faLaravel, faPhp, faReact, faSass,} from "@fortawesome/free-brands-svg-icons"


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
                        2002年 6月1日<br />
                        大阪府生まれ 大阪府育ち<br />
                        好きな食べ物はラーメン                    
                    </p>
                </div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'330px',height:'330px',background:'#F7F7F7',borderRadius:'20px'}}>
                    <Image src="/MyPhoto.svg" alt="自分の写真" width={300} height={300} />
                </div>
            </section>
            <section className="projectsStory">
                <h3>ストーリー</h3>
                <h4>過去経歴</h4>
                <p style={{margin:'4px 0'}}>専門学校の入学から気持ちを入れ替えた</p>
                <p>
                    私は専門学校に入学する前に大学に進学しましたが、大学に進学してから自分の将来の像が何も見えなく、どこに進むべきかもわからない状態でした。<br />
                    そんな時にweb・IT関係の学校に行っている友人が楽しそうに将来のことを話しているのを聞いて、自分もこんなに楽しく将来のことを考えられるかもしれないとweb・IT関係に興味を持ち、専門学校に入学しました。
                </p>
                <h4>専門学校に入学してから</h4>
                <p style={{margin:'4px 0'}}>絶対に裏切れない気持ち</p>
                <p>
                    大学を辞めると決め両親に相談した時に、大学を辞めることに対して反対されました。<br />
                    しかし、自分の将来のために専門学校に行きたいという気持ちを伝え、最終的には専門学校に行くことを許可してもらいました。<br />
                    その為、専門学校に入学してからは授業を受けるのは当たり前で、授業以外でも先生や先輩方に質問をし、自分の知識を増やすことに努めています。
                </p>
                <h4>自身の強み</h4>
                <p style={{margin:'4px 0'}}>基本的に流されやすいですが、自分が心に決めたことは絶対にやり遂げる</p>
                <h4>具体的なエピソード</h4>
                <p style={{margin:'4px 0'}}>
                    3日間で制作したCARDCONNECTの時、企画を決めるのに1日半かかり、残りの1日半でデザインからコーディングして実装までをしないといけなくなりました。<br />
                    その時に、私は『デザインしてくれた所は全て実装する』と心に決め、カンプが完成してないですがFigmaで更新される度にコーディングをしていき、<br />
                    最終日のプレゼンまでに全てのページを完成させることができました。
                </p>
            </section>
            <section className="projectsSkill">
                <h3>スキル</h3>
                <div className="projectsIcon">
                    <FontAwesomeIcon icon={faHtml5}/>
                    <FontAwesomeIcon icon={faCss3Alt}/>
                    <FontAwesomeIcon icon={faSass}/>
                    <FontAwesomeIcon icon={faJs}/>
                    <FontAwesomeIcon icon={faReact}/>
                    <Image src="/nextjs_icon.png" alt="Next.js" width={50} height={50} />
                    <FontAwesomeIcon icon={faPhp}/>
                    <FontAwesomeIcon icon={faLaravel}/>
                    <FontAwesomeIcon icon={faDocker}/>
                </div>
            </section>
        </main>
    )
}