// 1. 페이지 이동 로직
function navTo(url) {
    window.location.href = url;
}

// 2. 스크롤 감지 (Intersection Observer)
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        threshold: 0.2 // 요소가 20% 보일 때 나타남
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 화면에 보이면 'active' 클래스 추가
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // 관찰할 대상들 (reveal 클래스를 가진 모든 요소)
    const targets = document.querySelectorAll('.reveal');
    targets.forEach(target => observer.observe(target));
});
