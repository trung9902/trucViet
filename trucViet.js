let upPage = document.querySelector(".upPage");
let productNav = document.querySelector(".productinfomation-container");
let ModalMenu = document.querySelector(".modal");
let Menu = document.querySelector(".main-menu");
let setShow = document.getElementsByClassName("setShow");

console.log(productNav);
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 400) {
    upPage.style.display = "block";
  } else {
    upPage.style.display = "none";
  }
});
upPage.addEventListener("click", () => {
  console.log("sss");

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

let loadContent = (number) => {
  let content = "";
  console.log("1");

  switch (number) {
    case 1:
      content = `<div class="des-box">
                              <p><i class="fa-regular fa-circle-check green"></i>&nbsp&nbsp<b>Nền tảng vận hành khách
                                      sạn</b><br>
                                  Đơn giản chỉ cần một thiết bị điện tử có kết nối Internet là bạn có thể quản lý, điều
                                  hành
                                  khách sạn với phần mềm quản lý khách sạn
                                  <br><br><br>
                                  <i class="fa-regular fa-circle-check green"></i>&nbsp&nbsp<b>Nền tảng đặt phòng tập
                                      trung</b><br>
                                  Hệ thống đặt phòng tập trung, giúp quản lý toàn bộ thông tin đặt phòng từ nhiều nguồn,
                                  kênh
                                  phân phối bán phòng
                                  <br><br><br>
                                  <i class="fa-regular fa-circle-check green"></i>&nbsp&nbsp<b>Nền tảng tối ưu quản lý
                                      doanh
                                      thu</b><br>
                                  Giải pháp tối ưu giúp gia tăng doanh thu bán phòng dựa trên các chính sách bán hàng linh
                                  hoạt
                              </p>
  
                          </div>
                          <div class="productinfomation-image">
                              <img src="./img/image-removebg-preview.png" alt="">
                          </div>`;
      break;
    case 2:
      content = `<div class="des-box">
      <p>
          <i class="fa-regular fa-circle-check green"></i>&nbsp;&nbsp;<b>Sắp xếp bàn nhanh chóng</b><br>
          Nhân viên dễ dàng quan sát và sắp xếp bàn cho khách nhanh chóng, giải quyết tình trạng ùn tắc trong các giờ cao điểm.
          <br><br><br>
          <i class="fa-regular fa-circle-check green"></i>&nbsp;&nbsp;<b>Order tại bàn, tiết kiệm nhân lực</b><br>
          Giúp khách hàng dễ hình dung và lựa chọn món ăn nhanh chóng. Đồng thời làm giảm thao tác sai sót và tiết kiệm công sức của nhân viên order.
          <br><br><br>
          <i class="fa-regular fa-circle-check green"></i>&nbsp;&nbsp;<b>Chế biến và trả món chính xác</b><br>
          Giúp bộ phận bếp quản lý chế biến chặt chẽ, hạn chế sai sót. Từ đó giúp tiết kiệm thời gian và tránh lãng phí nguyên vật liệu.
          <br><br><br>
          <i class="fa-regular fa-circle-check green"></i>&nbsp;&nbsp;<b>Tính tiền, in hóa đơn tự động</b><br>
          Giúp chủ quán thống kê doanh thu theo nguồn tiền chính xác. Đồng thời hạn chế tối đa tình trạng gian lận, sai sót.
      </p>
  </div>
                          <div class="productinfomation-image">
                              <img src="./img/image-removebg-preview.png" alt="">
                          </div>`;
      break;
    case 3:
      content = `<div class="des-box">
      <p>
          <i class="fa-regular fa-circle-check green"></i>&nbsp;&nbsp;<b>Quản lý nhân viên chặt chẽ</b><br>
          Quản lý được thời gian và thời lượng làm việc của nhân viên phục vụ trong quán, giúp cho việc thống kê báo cáo được nhanh chóng và chính xác nhất.
          <br><br><br>
          <i class="fa-regular fa-circle-check green"></i>&nbsp;&nbsp;<b>Quản lý thu – chi</b><br>
          Quản lý những thu chi phát sinh như: sửa chữa, nhập hàng, lương nhân viên, tiền điện, tiền nước… Thống kê chi tiết từng loại thu chi theo thời gian thực.
          <br><br><br>
          <i class="fa-regular fa-circle-check green"></i>&nbsp;&nbsp;<b>Quản lý phòng - giá phòng hát</b><br>
          Căn cứ vào giờ vào và giờ ra của khách, phần mềm sẽ tự động tính tiền hát của khách.
          <br><br><br>
          <i class="fa-regular fa-circle-check green"></i>&nbsp;&nbsp;<b>Quản lý online từ xa</b><br>
          Quản lý có thể theo dõi được tình trạng hoạt động của cơ sở mình thông qua thiết bị di động như: tình trạng phòng, doanh thu, thu chi, hàng hóa…
      </p>
  </div>
  <div class="productinfomation-image">
                              <img src="./img/image-removebg-preview.png" alt="">
                          </div>
  `;
      break;
    case 4:
      content = `<div class="des-box">
      <p>
          <i class="fa-regular fa-circle-check green"></i>&nbsp;&nbsp;<b>Sắp xếp bàn nhanh chóng</b><br>
          Nhân viên dễ dàng quan sát và sắp xếp bàn cho khách nhanh chóng, giải quyết tình trạng ùn tắc trong các giờ cao điểm.
          <br><br><br>
          <i class="fa-regular fa-circle-check green"></i>&nbsp;&nbsp;<b>Order tại bàn, tiết kiệm nhân lực</b><br>
          Giúp khách hàng dễ hình dung và lựa chọn món ăn nhanh chóng. Đồng thời làm giảm thao tác sai sót và tiết kiệm công sức của nhân viên order.
          <br><br><br>
          <i class="fa-regular fa-circle-check green"></i>&nbsp;&nbsp;<b>Quản lý dòng tiền, kho, mua hàng, công nợ</b><br>
          Báo cáo chi tiết các hoạt động báo hàng, mua hàng, trả hàng, thanh toán công nợ và các khoản chi khác.
          <br><br><br>
          <i class="fa-regular fa-circle-check green"></i>&nbsp;&nbsp;<b>Tính tiền, in hóa đơn tự động</b><br>
          Giúp chủ quán thống kê doanh thu theo nguồn tiền chính xác. Đồng thời hạn chế tối đa tình trạng gian lận, sai sót.
      </p>
  </div>
  <div class="productinfomation-image">
                              <img src="./img/image-removebg-preview.png" alt="">
                          </div>
   `;
      break;
    case 5:
      content = `<div class="des-box">
      <p>
          <i class="fa-regular fa-circle-check green"></i>&nbsp;&nbsp;<b>Quản lý vé, gói dịch vụ</b><br>
          Quản lý và theo dõi số lượng vé và gói dịch vụ được bán ra.
          <br><br><br>
          <i class="fa-regular fa-circle-check green"></i>&nbsp;&nbsp;<b>Bán vé – soát vé khu vui chơi</b><br>
          Việc bán và kiểm soát vé được thực hiện một cách dễ dàng và nhanh chóng, giúp giảm thiểu thời gian chờ đợi và tăng trải nghiệm của khách hàng.
          <br><br><br>
          <i class="fa-regular fa-circle-check green"></i>&nbsp;&nbsp;<b>Quản lý nhân viên và lịch làm việc</b><br>
          Quản lý nhân sự và phân công công việc trở nên dễ dàng hơn, tối ưu hóa lịch trình và tăng năng suất làm việc.
          <br><br><br>
          <i class="fa-regular fa-circle-check green"></i>&nbsp;&nbsp;<b>Quản lý khách hàng – thành viên</b><br>
          Phần mềm lưu trữ và quản lý thông tin của khách hàng và thành viên, bao gồm lịch sử mua hàng, điểm thưởng, và các thông tin liên lạc khác.
      </p>
  </div>
  <div class="productinfomation-image">
                              <img src="./img/image-removebg-preview.png" alt="">
                          </div>
  
            `;
      break;
    case 6:
      content = `<div class="des-box">
      <p>
          <i class="fa-regular fa-circle-check green"></i>&nbsp;&nbsp;<b>Quản lý nhân viên chặt chẽ</b><br>
          Người quản lý có thể cấm hoặc cho phép nhân viên thực hiện các chức năng trên phần mềm. Theo dõi toàn bộ tác vụ của nhân viên trên phần mềm.
          <br><br><br>
          <i class="fa-regular fa-circle-check green"></i>&nbsp;&nbsp;<b>Quản lý bàn - giá giờ chơi</b><br>
          Thiết lập sơ đồ bàn chơi theo khu vực. Thiết lập từng loại bàn chơi. Cài đặt giá các loại bàn chơi.
          <br><br><br>
          <i class="fa-regular fa-circle-check green"></i>&nbsp;&nbsp;<b>Quản lý kho - đồ uống chế biến</b><br>
          Hỗ trợ quản lý kho nguyên liệu, công thức chế biến đồ uống tương tác với kho để quản lý chính xác nguyên liệu tồn kho.
          <br><br><br>
          <i class="fa-regular fa-circle-check green"></i>&nbsp;&nbsp;<b>Quản lý thu – chi, báo cáo</b><br>
          Cung cấp các báo cáo tài chính đầy đủ, giúp người quản lý có cái nhìn tổng quan về tình hình tài chính của cơ sở.
      </p>
  </div>
  <div class="productinfomation-image">
                              <img src="./img/image-removebg-preview.png" alt="">
                          </div>
  
            `;
      break;
    case 7:
      content = `<div class="des-box">
      <p>
          <i class="fa-regular fa-circle-check green"></i>&nbsp;&nbsp;<b>Quản lý thông tin khách hàng</b><br>
          Theo dõi hồ sơ điều trị, lịch sử mua hàng, tình trạng công nợ, và các thông tin khác.
          <br><br><br>
          <i class="fa-regular fa-circle-check green"></i>&nbsp;&nbsp;<b>Thống kê báo cáo</b><br>
          Thống kê báo cáo chi tiết, rõ ràng theo nhân viên, theo khách hàng, theo dịch vụ, sản phẩm.
          <br><br><br>
          <i class="fa-regular fa-circle-check green"></i>&nbsp;&nbsp;<b>Quản lý lịch hẹn</b><br>
          Quản lý lịch hẹn với khách hàng. Tự động nhắc nhở theo thời gian. Khách hàng chủ động đặt lịch hẹn online.
          <br><br><br>
          <i class="fa-regular fa-circle-check green"></i>&nbsp;&nbsp;<b>Quản lý Thẻ liệu trình</b><br>
          Quản lý thẻ liệu trình, thẻ combo theo số buổi đã mua, số buổi đã sử dụng, số buổi còn lại của thẻ.
      </p>
  </div>
  <div class="productinfomation-image">
                              <img src="./img/image-removebg-preview.png" alt="">
                          </div>
            ;`;
      break;
    case 8:
      content = `<div class="des-box">
      <p>
          <i class="fa-regular fa-circle-check green"></i>&nbsp;&nbsp;<b>Quản lý hoạt động khách hàng hiệu quả</b><br>
          Giúp khách hàng của bạn tự mình theo dõi và quản lý các hoạt động đặt hàng và tồn kho của họ.
          <br><br><br>
          <i class="fa-regular fa-circle-check green"></i>&nbsp;&nbsp;<b>Quản lý tồn kho tập trung đa kênh</b><br>
          Gán và quản lý đối tác vận chuyển trở nên dễ dàng với các đối tác vận chuyển chặng cuối và dịch vụ bưu chính hàng đầu được tích hợp sẵn.
          <br><br><br>
          <i class="fa-regular fa-circle-check green"></i>&nbsp;&nbsp;<b>Quản lý kho hàng bán lẻ</b><br>
          Quản lý tập trung tất cả các nhà bán lẻ với tầm nhìn đầy đủ về lượng hàng tồn kho tại từng cửa hàng riêng biệt.
          <br><br><br>
          <i class="fa-regular fa-circle-check green"></i>&nbsp;&nbsp;<b>Báo cáo chi tiết</b><br>
          Tạo, lên lịch và tải xuống các báo cáo như tình trạng đơn hàng, tổng tồn kho, hóa đơn thanh toán, và số ngày tồn kho.
      </p>
  </div>
  <div class="productinfomation-image">
                              <img src="./img/image-removebg-preview.png" alt="">
                          </div>
            ;`;
      break;
    default:
      content = "<h1>404</h1><p>Page not found.</p>";
  }

  let containers = document.getElementsByClassName(
    "productinfomation-container"
  );

  // Loop through all elements with the class name and update their content
  for (let i = 0; i < containers.length; i++) {
    containers[i].innerHTML = content;
  }
};
let openMenuModal = () => {
  ModalMenu.style.display = "block";
};
let closeMenuModal = () => {
  ModalMenu.style.display = "none";
};
function checkScreenSize() {
  if (window.innerWidth <= 1201) {
    Menu.style.display = "none"
  } else{
    Menu.style.display = "flex"
    ModalMenu.style.display = "none"
  }
}

checkScreenSize();

window.addEventListener("resize", checkScreenSize);
