function switchPage(pageName) {
    
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });
    
    
    document.getElementById(pageName + 'Page').classList.remove('hidden');
    
    
    
    document.querySelectorAll('button').forEach(btn => {
        btn.classList.remove('text-white');
        btn.classList.remove('text-yellow-500');
    });
    document.getElementById(pageName + 'Btn').classList.add('text-yellow-500');
}


window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('intro-animation').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  }, 3000); 
});
