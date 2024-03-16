export default function List() {
    /** 특정 엔드포인트를 추가하고 싶으면
     * www.xxx.com/list의 경ㅇ
     * list/page.tsx 파일을 생성하고, 해당하는 UI 개발하면 됨
     */

    return (
      <>
        <div>
          <h4 className="title">상품 목록</h4>
          <div className="food">
            <h4>상품1 $40</h4>
          </div>
          <div className="food">
            <h4>상품2 $40</h4>
          </div>
        </div>
      </>
    );
  }
  