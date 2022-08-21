/* eslint-disable jsx-a11y/img-redundant-alt */
const AboutPage = () => {
  return (
    <div className="width">
      <div className="about">
        <h1 className="uppercase">About Us</h1>
        <div className="about-introduce">
          <p className="about-introduce_text">
            Tính đến nay, <strong>PLVH Cinema</strong> đã có gần 10 năm hình thành và phát triển, hệ thống rạp chiếu
            phim đang có 18 cụm rạp trải khắp cả nước. <strong>PLVH Cinema</strong> trở thành điểm đến quen thuộc cho
            giới trẻ cả nước để tiếp cận nhanh nhất với các phim hay phim mới không chỉ Việt Nam hay Hollywood mà còn từ
            Hàn Quốc, Thái Lan, Nhật Bản…
          </p>
          <p className="about-introduce_text">
            Chẳng những nổi tiếng về chất lượng dịch vụ tốt, địa điểm đắc địa và nhân viên trẻ trung thân thiện,{' '}
            <strong>PLVH Cinema</strong> còn có nhiều chương trình khuyến mãi xuyên suốt năm và theo từng mùa phim.
            Mỗi tuần, rạp có chương trình <strong>Happy Day</strong> – giá vé chỉ từ 50k. Mỗi thứ 2 đầu tiên hằng tháng,
            ra rạp xem phim <strong>Ngày Tri Ân</strong> sẽ đồng giá vé và miễn phí châm thêm bắp nước.
          </p>
          <p className="about-introduce_text">Trở thành thành viên <strong>PLVH Cinema</strong>, bạn sẽ nhận được hàng loạt đặc quyền. Ngoài tích Star đổi bắp nước, các G-Stars và X-Stars còn được miễn phí đổi vị bắp. Mỗi năm, <strong>PLVH Cinema</strong> đều có chương trình tri ân siêu khủng cho các khách hàng thân thiết gồm nhiều phần quà, vé miễn phí hay bắp nước miễn phí.</p>
        </div>
        <div className="about-room">
          <h1 className=" uppercase">Projection room technology</h1>
          <div className="grid grid-cols-2">
            <div className="col-span-2 mb-6">
              <div className="grid grid-cols-2 gap-x-5 rounded-xl shadow-lg p-6">
                <div className="col-span-1 md:col-span-2 sm:col-span-2 sm:w-full">
                  <h1 className="mb-6 uppercase">Công nghệ 3D</h1>
                  <p className="about-room_text">So với công nghệ chiếu phim 2D Digital (Kỹ thuật số 2 chiều), công nghệ 3D Digital (Kỹ thuật số 3 chiều) cho phép khán giả cảm nhận thêm chiều sâu của hình ảnh, giúp cho không gian điện ảnh trở nên sống động như không gian thực mà chúng ta đang sống.</p>
                  <p className="about-room_text">Phim 3D được quay từ tối thiểu hai máy cùng một lúc, từ hai góc nhìn khác nhau tương ứng với hoạt động của hai mắt người. Khi xem phim khán giả sẽ cần đeo kính 3D để lọc hình ảnh cho mỗi mắt, khi qua não bộ sẽ chập lại tạo thành hình ảnh không gian ba chiều.</p>
                  <p className="about-room_text">Các phòng chiếu phim 3D Digital này đều sử dụng màn hình tráng bạc để giảm thiểu lượng hao hụt ánh sáng một cách tối đa.</p>
                </div>
                <div className="col-span-1 md:col-span-2 sm:col-span-2 ">
                  <img className="rounded-lg w-full h-full" src="/images/92-10-t1200.jpg" alt="Technology 3D Image" />
                </div>
              </div>
            </div>
            <div className="col-span-2 mb-6">
              <div className="grid grid-cols-2 gap-x-5 rounded-xl shadow-lg p-6">
                <div className="col-span-1 md:col-span-2 sm:col-span-2 sm:w-full">
                  <h1 className="mb-6 uppercase">SWEETBOX</h1>
                  <p className="about-room_text">
                    Chúng tôi có thể mang đến cho bạn những giây phút thư giãn cùng những bộ phim hấp dẫn trong không
                    gian nhẹ nhàng, ấm áp cùng người yêu thương và gia đình. Hãy tận hưởng những giây phút ngọt ngào
                    nhất tại Cinestar bằng ghế đôi SWEETBOX.
                  </p>
                  <p className="about-room_text">
                    Với nỗ lực không ngừng mang đến cho người yêu phim Việt Nam trải nghiệm điện ảnh tốt nhất, Cinestar
                    mang đến loại ghế đôi SWEETBOX cực kỳ độc đáo và mới lạ. SWEETBOX được đặt ở hàng ghế cuối cùng
                    trong phòng chiếu. Với vách ngăn cao cũng như sự khéo léo trong thiết kế giấu đi tay gác chính giữa
                    giúp cho đôi bạn càng thêm gần gũi và ấm áp, tạo không gian hoàn hảo cho các cặp đôi. Hãy đến và
                    trải nghiệm không gian hoàn hảo cho các cặp đôi với SWEETBOX.
                  </p>
                </div>
                <div className="col-span-1 md:col-span-2 sm:col-span-2 ">
                  <img className="rounded-lg w-full h-full" src="/images/sweetbox.jpg" alt="Sweetbox Image" />
                </div>
              </div>
            </div>
            <div className="col-span-2 mb-6">
              <div className="grid grid-cols-2 gap-x-5 rounded-xl shadow-lg p-6 ">
                <div className="col-span-1 md:col-span-2 sm:col-span-2 sm:w-full lg:h-[450px] lg:overflow-x-auto">
                  <h1 className="mb-6 uppercase">Delby Atmos</h1>
                  <p className="about-room_text">
                    Dolby Atmos – sự phát triển đáng kể nhất trong công nghệ âm thanh kể từ âm thanh vòm, đang tạo ra sự
                    thay đổi độc đáo trong kĩ thuật thiết kế âm thanh phân lớp, hiện đã có mặt tại Việt Nam và sẵn sàng
                    phục vụ khán giả tại CineStar.
                  </p>
                  <p className="about-room_text">
                    Dolby Atmos sử dụng thiết kế phân lớp tân tiến để tạo nên các rãnh âm thanh.Lớp nền bao gồm các dải
                    âm thanh môi trường tĩnh được phối theo phương pháp âm thanh phân luồng quen thuộc.Các lớp trên trần
                    bao gồm các yếu tố âm thanh động được định hướng và thay đổi một cách chính xác theo hình ảnh hiển
                    thị trên màn hình trong rạp.Bằng cách lắp đặt hệ thống loa ở trên đầu và xung quanh, Dolby Atmos có
                    thể khiến khán giả trải nghiệm những âm thanh trung thực và tự nhiên như thật của bộ phim.
                  </p>
                  <p className="about-room_text">Làm Thế Nào Atmos Có Thể Tạo Nên Trải Nghiệm Điện Ảnh Khác Biệt:</p>
                  <p className="about-room_text">
                    - Âm thanh rõ ràng và được định hướng một cách chính xác hơn; Sự trộn âm có định hướng đối tượng từ
                    các yếu tố âm thanh theo lớp độc lập đến âm thanh phân luồng.
                  </p>
                  <p className="about-room_text">
                    - Kết nối ý đồ của đạo diễn từ dữ liệu mô tả và phát lại theo công nghệ âm thanh được trang bị cho
                    từng phòng chiếu.
                  </p>
                  <p className="about-room_text">
                    - Tự động tạo ra các rãnh âm thanh tối ưu cho các phòng chiếu 5.1 và 7.1
                  </p>
                  <p className="about-room_text">
                    - Tạo ra trải nghiệm âm thanh sống động, trung thực thông qua 128 yếu tố âm thanh đồng thời và không
                    bị mất đi khi phối âm.
                  </p>
                  <p className="about-room_text">
                    - Quy mô được điều chỉnh theo kích cỡ của từng phòng chiếu với hệ thống lên đến 64 loa độc lập với
                    nhau.
                  </p>
                  <p className="about-room_text">
                    Hiện tại, chỉ có 25 quốc gia trên toàn thế giới được trang bị hệ thống ưu việt này. Riêng Việt Nam,
                    chỉ có 2 cụm rạp trên toàn quốc sở hữu hệ thống, trong đó có CineStar Cinema. Hiện tại, chỉ có 25
                    quốc gia trên toàn thế giới được trang bị hệ thống ưu việt này. Riêng Việt Nam, chỉ có 2 cụm rạp
                    trên toàn quốc sở hữu hệ thống, trong đó có CineStar Cinema.
                  </p>
                </div>
                <div className="col-span-1 md:col-span-2 sm:col-span-2 ">
                  <img className="rounded-lg w-full h-full" src="/images/bolbyatmos.jpg" alt="Sweetbox Image" />
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-2 gap-x-5 rounded-xl shadow-lg p-6">
                <div className="col-span-1 md:col-span-2 sm:col-span-2 sm:w-full">
                  <h1 className="mb-6 uppercase">Máy chiếu christie</h1>
                  <p className="about-room_text">
                    Máy chiếu Christie là giải pháp hình ảnh cao cấp cho nhu cầu giải trí, với độ phân giải 1080p - 4k. ( có số điểm ảnh bề ngang cao gấp 4 lần so với chuẩn full HD)
                  </p>
                  <p className="about-room_text">
                    Ngoài ra máy còn mang đến cho khán giả những trải nghiệm hình ảnh chân thật hơn nhờ hệ thống thấu kính của mình
                  </p>
                  <p className="about-room_text">
                    Đây thực sự là đỉnh cao trong các phòng chiếu
                  </p>
                </div>
                <div className="col-span-1 md:col-span-2 sm:col-span-2 ">
                  <img className="rounded-lg w-full h-full" src="/images/sweetbox.jpg" alt="Sweetbox Image" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
