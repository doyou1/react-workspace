import Image from "next/image";

export default function List() {
    /** 특정 엔드포인트를 추가하고 싶으면
     * www.xxx.com/list의 경우
     * list/page.tsx 파일을 생성하고, 해당하는 UI 개발하면 됨
     */

    let products = ['Tomato', 'Pasta', 'Coconut'];
  
    return (
      <>
        <div>
          <h4 className="title">상품 목록</h4>
          {
            products.map((item, idx) => {
              return (
                <div key={idx} className="food">
                  <Image src={`/product${idx}.jpg`} className="food-img" width={200} height={200} alt={""}/>
                  <h4>{item} $40</h4>
                </div>
              )
            })
          }
        </div>
      </>
    );
  }
  