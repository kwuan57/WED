
const isLoggedIn = false; // Thay đổi thành false để kiểm tra trạng thái chưa đăng nhập

// Lấy phần tử dropdown
const userDropdown = document.getElementById('user-dropdown');

// Xử lý hiển thị dựa trên trạng thái đăng nhập
if (isLoggedIn) {
    userDropdown.innerHTML = `
                <a class="nav-link-2" href="#" id="navbarDropdown" role="button">
                    <i class="fa-solid fa-user"></i>
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Tài khoản của tôi</a></li>
                    <li><a class="dropdown-item" href="#">Đơn mua</a></li>
                    <li><a class="dropdown-item" href="#">Đăng xuất</a></li>
                </ul>
                 `;
} else {
    userDropdown.innerHTML = `
                <a class="nav-link-2 text-decoration-none text-black" href="login.html" role="button">
                    Đăng nhập
                </a>
            `;
}