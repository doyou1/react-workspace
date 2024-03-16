// import Link from "next/link";

export default function Home() {

  let name = "name1";
  /** 
   * 1. 최상단은 1개의 태그로 정의해야 함
   * 2. class -> `className`
   */
  return (
    <>
      <div>
        <h4 className="title">애플 프레쉬</h4>
        <p className="sub-title">by dev {name}</p>
      </div>
    </>
  );
}
