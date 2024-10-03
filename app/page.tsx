import { ensureNotAuthenticated } from "./api/auth/[...nextauth]/route";
import Landing from "./landing";

export default async function Home() {
  await ensureNotAuthenticated();

  return (
    <>
      <Landing></Landing>
    </>
  )
}
