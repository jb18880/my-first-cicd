function updateTime() {
    document.getElementById('time').innerText = new Date().toLocaleString();
}

// 页面加载时自动显示时间
window.onload = function() {
    updateTime();
}
