// 显示随机笑话
function showRandomJoke() {
  const container = document.getElementById('joke-container');
  const randomIndex = Math.floor(Math.random() * jokes.length);
  
  // 先隐藏当前笑话
  container.style.opacity = 0;
  container.style.transform = 'translateY(20px)';
  
  // 0.5秒后显示新笑话
  setTimeout(() => {
    container.textContent = jokes[randomIndex];
    container.style.opacity = 1;
    container.style.transform = 'translateY(0)';
    
    // 添加浮动效果
    container.classList.add('float');
  }, 500);
}

// 页面加载时显示第一个笑话
document.addEventListener('DOMContentLoaded', () => {
  showRandomJoke();
  
  // 设置背景色渐变动画
  let hue = 0;
  setInterval(() => {
    document.body.style.backgroundColor = `hsl(${hue}, 5%, 8%)`;
    hue = (hue + 0.5) % 360;
  }, 100);
});

// 点击页面切换笑话
document.addEventListener('click', () => {
  const container = document.getElementById('joke-container');
  container.classList.remove('float');
  setTimeout(showRandomJoke, 300);
});