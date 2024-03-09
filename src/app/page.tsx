import Btn from "@/components/btn/btn";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="homeMain">
        <h2><Image src="/logo.svg" alt="logo" width={335} height={182}/></h2>
      </section>
      <section className="profileMain">
        <div>
          <h3 style={{color:'#9F9F9F',fontSize:'24px',margin:'0'}}>profile</h3>
          <p style={{fontSize:'48px',margin:'0'}}>平田晃大</p>
          <p style={{color:'#9F9F9F',fontSize:'16px',margin:'0'}}>ECCコンピューター専門学校/マルチメディア研究学科/Webデザインコース</p>
          <p style={{color:'#9F9F9F',fontSize:'16px',margin:'0'}}>26年卒業予定</p>
        </div>
        <div>
          <p style={{fontSize:'20px',margin:'0'}}>
            出来るまでやり続けることを心に決めて生活しています。<br />
            専門学校入学当初、プログラミング経験がなく全く出来ませんでした。<br />
            しかし、勉強をやり続けることで必死にくらい付いて行きました。<br />
            これからも数多くの壁にぶち当たると思いますが、自分が納得出来るまでやり続けます。
          </p>
        </div>
        <Btn label="MORE" link="/Profile" />
        <p>HIRATA</p>
      </section>
    </main>
  );
}
