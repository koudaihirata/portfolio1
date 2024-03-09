import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="homeMein">
        <h2><Image src="/logo.svg" alt="logo" width={335} height={182}/></h2>
      </section>
    </main>
  );
}
