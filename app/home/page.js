import Calendly from "../components/calendly";

export default function Page() {
  return (
    <>
      <h1>Welcome to AI Producer</h1>

      <Calendly />

      <Link href="/producer" prefetch={false}>
        Create video
      </Link>
    </>
  );
}
