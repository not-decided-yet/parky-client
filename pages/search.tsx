import { useRouter } from "next/dist/client/router";

export default function Search() {
  const { push } = useRouter();
  return <div>검색 화면</div>;
}
