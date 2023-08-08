import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Welcome to AI Producer</h1>
      <Link href="/producer" prefetch={false}>Start video</Link>
    </>
  )
}