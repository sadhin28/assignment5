
function showPage(pageId) {
  const pages = ['donation', 'history'];
  pages.forEach(id => {
    document.getElementById(id).classList.add('hidden');
    document.getElementById(id + 'Btn').classList.remove('bg-green-500');
    document.getElementById(id + 'Btn').classList.add('bg-gray-500');
    

  });

  document.getElementById(pageId).classList.remove('hidden');
  document.getElementById(pageId + 'Btn').classList.remove('bg-gray-500');
  document.getElementById(pageId + 'Btn').classList.add('bg-green-500');
}

showPage('donation');
