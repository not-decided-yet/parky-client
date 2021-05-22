import { useRouter } from "next/dist/client/router";

export default function Reservation() {
  const { push } = useRouter();
  return <div>
    에니메이션 (선택)
    주차 전 상태,
    푸시가 있음
    주차 후 상태
  </div>;
}
