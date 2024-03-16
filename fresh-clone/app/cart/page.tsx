"use client";

import { CartItemType, carts } from "./data";

export default function Cart() {
  return (
    <>
      <div>
        <h4 className="title">Cart</h4>
        {
          carts.map((item, idx) => {
            return <CartItem key={idx} item={item} />;
          })
        }
      </div>
    </>
  );
}

function CartItem(props: { item: CartItemType }) {
  return (
    <div className="cart-item">
      <p>{props.item.name}</p>
      <p>{props.item.value}</p>
      <p>{props.item.count}</p>
    </div>
  );
}
