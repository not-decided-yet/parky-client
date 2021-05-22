import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

export default function Splash() {
  const { push } = useRouter();

  useEffect(() => {
    setTimeout(() => {
      push("/main");
    }, 3000);
  }, []);
  return <div>권한 요청 로직 필요. 화면은 스플래시 화면</div>;
}
