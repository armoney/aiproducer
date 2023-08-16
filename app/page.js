import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>AI PRODUCER</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Link href="/home" prefetch={true}>
        Home
      </Link>
    </>
  );
}
