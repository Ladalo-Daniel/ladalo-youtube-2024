
import { redirect } from "next/navigation";

export default function Home() {
  const userActive = true
  if (userActive) return redirect("/dashboard")


  return (
    <>
     <h1>Hello world</h1>
    </>
  );
}
