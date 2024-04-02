export default function Cart() {
  let 장바구니 = ["Tomatoes", "Pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      <div className="cart-item">
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
      <CartItem 상품={장바구니[0]} />
      <CartItem 상품={장바구니[1]} />
      {/*  <자식컴포넌트 작명={전해줄데이터} />  */}
      <Banner content="삼성카드" />
      <Btn color="red" />
      <Btn color="blue" />
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.상품}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
function Banner(props) {
  return <h5>{props.content} 결제 행사중</h5>;
}

function Btn(props) {
  return <button style={{ background: props.color }}>버튼</button>;
}
