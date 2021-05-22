import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { Splash } from "../components/Splash";

export default function Index() {
  const { push } = useRouter();

  // useEffect(() => {
  // return <div>권한 요청 로직 필요.</div>;45
  //   setTimeout(() => {
  //     push("/main");
  //   }, 3000);
  // }, []);

  return <Splash />
}
