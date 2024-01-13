import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import customaxios from "../api/Axios";
import { useRecoilState } from "recoil";
import { userState } from "../recoil/atoms/userState";

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(userState);

  useEffect(() => {
    // URL에서 파라미터 값 가져오기
    const orderId = new URL(window.location.href).searchParams.get("orderId");
    const paymentKey = new URL(window.location.href).searchParams.get(
      "paymentKey"
    );
    const amount = new URL(window.location.href).searchParams.get("amount");

    customaxios
      .post(
        `/success?orderId=${orderId}&paymentKey=${paymentKey}&amount=${amount}`,
        {
          orderId,
          paymentKey,
          amount,
        },
        {
          headers: { Authorization: `${userInfo.accesstoken}` },
        }
      )
      .then((res) => {
        window.alert("결제가 완료되었습니다!");
        navigate("./main/my/point");
      })
      .catch((err) => {
        navigate("./main/my/point/charge/failed");
      });
  }, [navigate]);

  return (
    <div>
      <h2>결제 성공 후 최종 승인</h2>
    </div>
  );
}
