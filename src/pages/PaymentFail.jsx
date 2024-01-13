import { Link } from "react-router-dom";

export default function PaymentSuccess() {
  return (
    <div>
      <span>만약 같은 문제가 지속적으로 발생한다면 문의 부탁드립니다.</span>;
      <Link to="./main/my/point">
        <button>돌아가기</button>
      </Link>
    </div>
  );
}
