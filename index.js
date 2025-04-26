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