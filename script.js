// 显示随机笑话（优化版）
function showRandomJoke() {
  const container = document.getElementById('joke-container');
  const randomIndex = Math.floor(Math.random() * jokes.length);
  
  // 添加加载状态提示
  container.innerHTML = '<p id="joke-text" class="loading">加载中...</p>';
  
  // 动画效果：淡出
  container.style.opacity = 0;
  container.style.transform = 'translateY(20px)';
  
  // 0.5秒后显示新笑话
  setTimeout(() => {
    container.innerHTML = jokes[randomIndex];
    container.style.opacity = 1;
    container.style.transform = 'translateY(0)';
    
    // 添加浮动效果
    container.classList.add('float');
    
    // 更新计数器
    updateJokeCounter();
    
    // 移动端优化：确保文字不被缩放
    ensureMobileViewport();
  }, 500);
}

// 更新笑话计数器
function updateJokeCounter() {
  const counterElement = document.getElementById('counter');
  if (counterElement) {
    counterElement.textContent = jokes.length;
  }
}

// 移动端优化：添加viewport meta标签
function ensureMobileViewport() {
  const metaViewport = document.querySelector('meta[name="viewport"]');
  if (!metaViewport) {
    const meta = document.createElement('meta');
    meta.name = "viewport";
    meta.content = "width=device-width, initial-scale=1, maximum-scale=5";
    document.head.appendChild(meta);
  }
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', () => {
  // 添加移动端优化
  ensureMobileViewport();
  
  // 显示第一个笑话
  showRandomJoke();
  
  // 初始化计数器
  updateJokeCounter();
  
  // 设置背景色渐变动画
  let hue = 0;
  const bgInterval = setInterval(() => {
    document.body.style.backgroundColor = `hsl(${hue}, 5%, 8%)`;
    hue = (hue + 0.5) % 360;
  }, 100);
  
  // 清理定时器（可选）
  window.addEventListener('beforeunload', () => {
    clearInterval(bgInterval);
  });
});

// 点击页面切换笑话（优化移动端触摸体验）
document.addEventListener('click', () => {
  const container = document.getElementById('joke-container');
  if (!container) return;
  
  // 添加点击反馈
  container.classList.remove('float');
  container.style.transform = 'scale(0.98)';
  
  setTimeout(() => {
    container.style.transform = '';
    showRandomJoke();
  }, 300);
});

// 移动端触摸事件支持
document.addEventListener('touchend', (e) => {
  e.preventDefault(); // 防止触摸事件触发点击事件两次
  const container = document.getElementById('joke-container');
  if (!container) return;
  
  // 添加触摸反馈
  container.style.transform = 'scale(0.98)';
  
  setTimeout(() => {
    container.style.transform = '';
    showRandomJoke();
  }, 100);
});
