export default function Home() {

  let name = "name1";
  let link = "https://google.com";

  /** 
   * 1. 최상단은 1개의 태그로 정의해야 함
   * 2. class -> `className`
   */
  return (
    <>
      <div>
        <h4 className="title">애플 프레쉬</h4>
        <p className="sub-title">by dev {name}</p>
        <a href={link}>링크</a>
        <div style={{ color: 'red' }}>set style</div>
      </div>
    </>
  );
}
