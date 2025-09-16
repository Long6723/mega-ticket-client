"use client";

import "../faq.scss";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Container } from "@mui/material";
import MyButton from "@/components/ui/button";
import { JSX, useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: JSX.Element | string;
}

export default function FaqContainer() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "Các câu hỏi liên quan đến thẻ thành viên U22",
      answer: (
        <div>
          <h3>1. Ai có thể đăng ký thẻ U22?</h3>
          <p>- Tất cả các khán giả từ 22 tuổi trở xuống.</p>

          <h3>2. Không có thẻ học sinh/sinh viên thì có đăng ký được không?</h3>
          <p>- Bạn có thể dùng CCCD (còn hạn) để đăng ký.</p>
          <p>
            - Với học sinh/sinh viên chưa có thẻ trường thì nhớ mang CCCD theo.
          </p>
          <p>
            - Trẻ em dưới 14 tuổi chưa có CCCD thì phải có mặt tại quầy để xác
            nhận là được.
          </p>

          <h3>3. Làm thẻ U22 có mất phí không?</h3>
          <p>- Miễn phí 100% luôn. Làm càng sớm, xem phim càng rẻ.</p>

          <h3>4. Đăng ký thẻ ở đâu?</h3>
          <p>
            - Online: Đăng ký trên web/app của NCC → đến rạp xác nhận là xong
            (nhớ mang theo CCCD/thẻ HSSV xác nhận nhé).
          </p>
          <p>
            - Tại rạp: Đến quầy vé hoặc quầy thông tin, mang theo CCCD/thẻ HSSV
            → đăng ký tại chỗ → nhận ưu đãi liền tay.
          </p>

          <h3>
            5. Có những loại thẻ U22 nào? Dùng thẻ online (phi vật lý) được
            không?
          </h3>
          <p>
            - Có thẻ cứng U22 và thẻ phi vật lí trên thiết bị di động (mở
            app/web của NCC) sẽ thấy nè!!!
          </p>

          <h3>6. Một người có thể dùng thẻ mua nhiều vé không?</h3>
          <p>
            - Mỗi thẻ chỉ mua được 1 vé/ngày, và chỉ áp dụng cho chính chủ thẻ.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      question: "Cách thức mua vé online và nhận mã vé nhanh chóng",
      answer: (
        <div>
          <h3>CÁCH MUA VÉ ONLINE</h3>

          <h4>1. Mua vé qua App NCC (Bắt buộc đăng ký tài khoản):</h4>
          <p>
            Đăng nhập → Chọn phim → Nhấn "Đặt vé" → Chọn ngày chiếu & giờ chiếu
            → Chọn ghế → Nhấn "Đặt vé" → Chọn hình thức thanh toán → Tiến hành
            thanh toán.
          </p>

          <h4>2. Mua vé online trên Website (Bắt buộc đăng ký tài khoản):</h4>
          <p>
            Đăng nhập → Chọn phim tại mục "Phim đang chiếu" → Chọn ngày & giờ
            chiếu → Chọn ghế → Nhấn "Thanh toán" → Check lại thông tin vé → Chọn
            hình thức thanh toán → Tiến hành thanh toán.
          </p>

          <h4>3. Mua vé trên Ví điện tử và App của các ngân hàng:</h4>
          <p>
            Đăng nhập app ngân hàng → Chọn mục mua vé xem phim (giao diện có thể
            khác nhau tùy ngân hàng) → Chọn phim → Nhấn "Đặt vé" → Chọn ngày
            chiếu → Chọn logo Trung tâm Chiếu phim Quốc gia (55k) → Chọn giờ
            chiếu phim → Chọn ghế → Nhấn "Tiếp tục" → Check lại thông tin vé →
            Nhập email → Nhập mã giảm giá (nếu có) → Nhấn "Đặt vé".
          </p>

          <h3>CÁCH NHẬN MÃ VÉ</h3>
          <p>Có 2 loại mã vé:</p>
          <p>
            - <strong>Mã QR</strong>: dùng hình ảnh lên thẳng phòng chiếu hoặc
            có thể in vé giấy nếu muốn (mỗi mã QR chỉ được quét duy nhất 1 lần).
          </p>
          <p>
            - <strong>Mã CODE</strong>: KHÔNG lên thẳng phòng chiếu, vui lòng in
            vé giấy tại máy bán vé tự động (mỗi vé tương đương với 01 ghế duy
            nhất).
          </p>

          <h4>
            Sau khi hoàn tất thanh toán, khách hàng sẽ nhận mã vé như sau:
          </h4>

          <h4>1. Mua vé trên app NCC:</h4>
          <p>
            - Trực tiếp trên app ngay sau khi thanh toán hoặc tại mục Tài khoản
            → Vé đã mua.
          </p>
          <p>- Email.</p>
          <p>- Tin nhắn SMS</p>

          <h4>2. Mua vé trên website Trung tâm Chiếu phim Quốc gia:</h4>
          <p>
            - Trực tiếp tại website ngay sau khi thanh toán hoặc tại mục Thông
            tin cá nhân tại góc phải trên cùng của màn hình trang chủ → Lịch sử
            mua vé.
          </p>
          <p>- Email.</p>
          <p>- Tin nhắn SMS.</p>

          <h4>3. Ví điện tử và App của các ngân hàng:</h4>
          <p>- Trực tiếp trên ví/app tại mục "Vé đã mua".</p>
          <p>- Email.</p>

          <h3>LƯU Ý:</h3>
          <p>
            - Bạn có 5 phút để giữ ghế đến khi hoàn tất giao dịch, nếu vé không
            được mua sau 5 phút, NCC sẽ hủy giữ ghế để bảo đảm quyền lợi cho tất
            cả khách hàng.
          </p>
          <p>
            - Danh sách ngân hàng và ví điện tử: Ví VNPay, Agribank, VBA Onmi,
            Vietinbank, Vietcombank, BIDV, BaoVietBank, PublicBank, ABBank,
            CoopBank, VietABank, Eximbank, IndovinaBank, SCB, VietBank, BIDC,
            HDBank, OCB Omni, Sacombank Pay, Sacombank mBanking, SaigonBank,
            VietCredit, VIB.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      question: "Xem phim tại NCC cần tuân thủ các quy định nào?",
      answer: (
        <div>
          <p>- Không vào muộn quá 20 phút.</p>
          <p>- Không quay phim, chụp ảnh trong phòng chiếu.</p>
          <p>- Tắt chuông điện thoại, không sử dụng điện thoại khi xem phim.</p>
          <p>- Không hút thuốc.</p>
          <p>- Không gây ảnh hưởng đến khán giả xung quanh.</p>
          <p>- Không ăn kẹo cao su.</p>
          <p>- Không mang thú nuôi.</p>
          <p>- Bảo quản tài sản cá nhân cẩn thận.</p>
          <p>- Trang phục lịch sự.</p>
          <p>- Không mang đồ ăn uống từ bên ngoài vào rạp.</p>
          <p>- Chỉ mang bắp và nước vào phòng chiếu.</p>
          <p>- Khán giả ưu tiên xuất trình giấy tờ theo quy định.</p>

          <h4>QUY ĐỊNH VỀ ĐỘ TUỔI:</h4>
          <p>
            - Không bán vé cho trẻ em dưới 13 tuổi đối với các suất chiếu phim
            kết thúc sau 22h00.
          </p>
          <p>
            - Không bán vé cho trẻ em dưới 16 tuổi đối với các suất chiếu phim
            kết thúc sau 23h00.
          </p>
          <p>
            - Khán giả nghiêm túc thực hiện xem phim đúng độ tuổi theo phân loại
            phim: P, K, T13, T16, T18, C.
          </p>
          <p>
            (Trường hợp vi phạm sẽ xử phạt theo Quy định tại Nghị định
            128/2022/NĐ-CP ngày 30/12/2022).
          </p>

          <h4>PHÂN LOẠI PHIM THEO ĐỘ TUỔI:</h4>
          <p>
            Căn cứ Thông tư số 05/2023/TT-BVHTTDL ngày 05/04/2023 của Bộ Văn
            hóa, Thể thao và Du lịch:
          </p>
          <p>
            1. <strong>P</strong>: Phim được phép phổ biến đến người xem ở mọi
            độ tuổi;
          </p>
          <p>
            2. <strong>K</strong>: Phim được phổ biến đến người xem dưới 13 tuổi
            với điều kiện xem cùng cha, mẹ hoặc người giám hộ;
          </p>
          <p>
            3. <strong>T13 (13+)</strong>: Phim được phổ biến đến người xem từ
            đủ 13 tuổi trở lên;
          </p>
          <p>
            4. <strong>T16 (16+)</strong>: Phim được phổ biến đến người xem từ
            đủ 16 tuổi trở lên;
          </p>
          <p>
            5. <strong>T18 (18+)</strong>: Phim được phổ biến đến người xem từ
            đủ 18 tuổi trở lên;
          </p>
          <p>
            6. <strong>C</strong>: Phim không được phép phổ biến.
          </p>

          <p>
            Khách hàng vui lòng chứng thực được độ tuổi phù hợp với phim được
            phân loại như trên. NCC có quyền từ chối việc bán vé hoặc vào phòng
            chiếu nếu khách hàng không tuân thủ đúng theo quy định.
          </p>

          <h4>LƯU Ý QUAN TRỌNG:</h4>
          <p>
            - Khán giả xem phim P, K, T13, T16, T18, C vui lòng mang theo giấy
            tờ tùy thân hoặc hình ảnh của giấy tờ tùy thân có ảnh nhận diện và
            ngày tháng năm sinh.
          </p>
          <p>
            - Ban Quản Lý Rạp có quyền kiểm tra và từ chối khách hàng nếu không
            đúng quy định về độ tuổi.
          </p>
          <p>
            - Về tài liệu xác minh: NCC có quyền yêu cầu khách hàng xuất trình
            giấy tờ tùy thân có ảnh hoặc tài liệu liên quan chứng minh chính xác
            thông tin hoặc tình trạng của khách hàng (vd: Giấy khai sinh, CCCD,
            thẻ học sinh,…).
          </p>

          <h4>CHẾ TÀI XỬ PHẠT:</h4>
          <p>
            - Phạt tiền từ 60.000.000 đồng đến 80.000.000 đồng đối với hành vi
            không đảm bảo người xem phim đúng độ tuổi theo phân loại phim.
          </p>
          <p>
            - Phạt tiền từ 40.000.000 đồng đến 60.000.000 đồng đối với hành vi
            không đảm bảo khung giờ chiếu phim cho trẻ em quy định.
          </p>

          <p>
            Ban Quản Lý Rạp có quyền từ chối không cho Quý Khán giả vào rạp nếu
            vi phạm.
          </p>
          <p>Chúng tôi có camera an ninh trong rạp.</p>
        </div>
      ),
    },
    {
      id: 4,
      question:
        "Không áp dụng các chế độ ưu đãi, chương trình khuyến mại vào thời gian nào?",
      answer:
        "Không áp dụng các chế độ ưu đãi, các chương trình khuyến mại vào các ngày 20/10, 20/11, Halloween 31/10, các ngày Lễ, Tết, suất chiếu sớm và suất chiếu đặc biệt.",
    },
    {
      id: 5,
      question: "Vé đã thanh toán có thể hủy hoặc thay đổi không?",
      answer: "Không hỗ trợ hủy hoặc thay đổi vé đã thanh toán.",
    },
    {
      id: 6,
      question:
        "Liên hệ với ai trong trường hợp thuê phòng tổ chức Hội nghị và các dịch vụ khác?",
      answer:
        "Liên hệ thuê phòng tổ chức Hội nghị, làm văn phòng, quảng cáo và các dịch vụ khác: 0243.5142856 (Phòng Dịch vụ).",
    },
    {
      id: 7,
      question: "Phòng chiếu có màn ảnh lớn nhất Việt Nam là phòng số mấy?",
      answer: "Phòng chiếu số 1.",
    },
    {
      id: 8,
      question: "Có các hình thức bán vé nào?",
      answer: (
        <div>
          <p>- Hợp đồng khoán gọn.</p>
          <p>- Vé mở, vé tập thể, vé tự chọn vị trí, quầy vé online.</p>
        </div>
      ),
    },
    {
      id: 9,
      question: "Khi nào phải áp dụng giá vé ngày Lễ, Tết",
      answer: (
        <div>
          <p>
            - Các ngày nghỉ Lễ, Tết theo quy định của Nhà Nước: Tết Nguyên Đán,
            Tết Dương Lịch, ngày Giỗ Tổ Hùng Vương 10/3 AL, ngày 30/4, 1/5, 2/9.
          </p>
          <p>- Các ngày: 14/2, 8/3, 24/12.</p>
          <p>- Các ngày: nghỉ bù do nghỉ Lễ, Tết trùng vào thứ 7, Chủ Nhật.</p>
        </div>
      ),
    },
    {
      id: 10,
      question: "Chính sách giá vé cho các đối tượng khán giả như thế nào?",
      answer: (
        <div>
          <p>
            - Giảm 20% giá vé theo qui định đối với: Trẻ em (người dưới 16
            tuổi), người cao tuổi (công dân Việt Nam từ đủ 60 tuổi trở lên),
            người có công với cách mạng, người có hoàn cảnh đặc biệt khó khăn.
          </p>
          <p>- Giảm 50% giá vé theo qui định đối với: Người khuyết tật nặng.</p>
          <p>
            - Giảm giá vé 100% đối với: Người khuyết tật đặc biệt nặng, trẻ em
            dưới 0.7m đi kèm với người lớn.
          </p>

          <h4>Điều kiện:</h4>
          <p>
            - Chỉ áp dụng khi mua vé tại quầy (không áp dụng khi mua online).
          </p>
          <p>
            - Các đối tượng khán giả trên phải xuất trình giấy tờ chứng minh khi
            mua vé xem phim và trước khi vào phòng chiếu. Cụ thể:
          </p>
          <p>
            + Trẻ em (trường hợp trẻ em từ 14-16 tuổi), người cao tuổi: xuất
            trình "Căn cước công dân".
          </p>
          <p>
            + Người có công với cách mạng: xuất trình giấy xác nhận theo quy
            định.
          </p>
          <p>
            + Người có hoàn cảnh đặc biệt khó khăn: xuất trình "Giấy chứng nhận
            hộ nghèo".
          </p>
          <p>+ Người khuyết tật: xuất trình "Giấy xác nhận khuyết tật".</p>
        </div>
      ),
    },
  ];

  const clickQuestion = (id: number) => {
    if (activeQuestion === id) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(id);
    }
  };

  return (
    <div className="page">
      <div className="page__container">
        <Container>
          <div className="page__title">
            <h1>Hỏi đáp</h1>
          </div>

          <div className="faq__container">
            {faqData.map((item) => (
              <div key={item.id} className="faq__item">
                <MyButton
                  className="button"
                  onClick={() => clickQuestion(item.id)}
                >
                  {item.question}
                </MyButton>
                {activeQuestion === item.id && (
                  <div className="faq__answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
