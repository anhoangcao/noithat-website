// JavaScript cơ bản cho website

// Xử lý fixed navbar khi cuộn trang
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow');
    } else {
        navbar.classList.remove('shadow');
    }
});

// Xử lý animate on scroll
document.addEventListener('DOMContentLoaded', function() {
    // Thêm hiệu ứng khi trang web được tải
    const animateItems = document.querySelectorAll('.animate-on-scroll');
    
    if (animateItems.length > 0) {
        const checkIfInView = function() {
            animateItems.forEach(function(item) {
                const rect = item.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                
                if (rect.top <= windowHeight * 0.85) {
                    item.classList.add('animated');
                }
            });
        };
        
        // Kiểm tra khi trang được tải
        checkIfInView();
        
        // Kiểm tra khi cuộn trang
        window.addEventListener('scroll', checkIfInView);
    }
});

// Xử lý nút filter trong trang dự án
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                // Xóa class active từ tất cả các nút
                filterButtons.forEach(function(btn) {
                    btn.classList.remove('active');
                });
                
                // Thêm class active vào nút được click
                this.classList.add('active');
            });
        });
    }
});

// Xử lý nút filter trong trang dự án
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                // Xóa class active từ tất cả các nút
                filterButtons.forEach(function(btn) {
                    btn.classList.remove('active');
                });
                
                // Thêm class active vào nút được click
                this.classList.add('active');
            });
        });
    }
}); 
