import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  let name = "Lee";
  let link = "https://naver.com";
  return (
    <div>
  
      {/* style 넣고 싶으면 object 자료형으로  */}
      <h4 className="title" style={{ color: "red", fontSize: "20px" }}>
        애플프레쉬
      </h4>
      <p className="title-sub">by dev {name}</p>
      {/* html 안에 변수 넣을 땐 { } */}
      <a href={link}>링크</a>
    </div>
  );
}
