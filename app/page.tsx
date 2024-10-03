import { ensureNotAuthenticated } from "./api/auth/[...nextauth]/utils";
import Landing from "./landing";

export default async function Home() {
  await ensureNotAuthenticated();

  return (
    <>
      <Landing></Landing>
    </>
  )
}
