"use client";

import { useState } from "react";

export default function List() {
  // const 초기상품목록 = [
  //   { 이름: "Tomatoes", 수량: 0 },
  //   { 이름: "Pasta", 수량: 0 },
  //   { 이름: "Coconut", 수량: 0 },
  // ];
  // const [상품목록, 상품목록변경] = useState(초기상품목록);
  const 상품 = ["Tomatoes", "Pasta", "Coconut"];
  const [수량, 수량변경] = useState([0, 0, 0]);
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((a, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} width="200" height="200" />
            <h4>{a} $40</h4>
            <span> {수량[i]} </span>
            <button
              onClick={() => {
                let copy = [...수량];
                copy[i] = copy[i] + 1;
                수량변경(copy);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                if (수량[i] > 0) {
                  let copy = [...수량];
                  copy[i] = copy[i] - 1;
                  수량변경(copy);
                }
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}
