const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
var title=document.createElement("h")
title.innerHTML="Dom pagination"
var description=document.createElement("p")
description.innerHTML="This the DOM pagination"
var pagination=document.createElement("div")
pagination.innerHTML=` <div id="container"></div>
<div class="table-responsive">
  <div id="pagination">
    <button id="prev-page">Previous</button>
    <span id="page-info">Page 1 of 1</span>
    <button id="next-page">Next</button>
  </div></div>`
document.body.append(title,description,pagination)

const itemsPerPage = 10; 
let currentPage = 1;     

const dataContainer = document.getElementById('container');
const prevButton = document.getElementById('prev-page');
const nextButton = document.getElementById('next-page');
const pageInfo = document.getElementById('page-info');

function updatePage() {
  dataContainer.innerHTML = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    .map(item => `<div>${item}</div>`).join('');
  pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(data.length / itemsPerPage)}`;
}
updatePage();

nextButton.addEventListener('click', () => {
  if (currentPage < Math.ceil(data.length / itemsPerPage))
   {
    currentPage++;
    updatePage();
  }
});

prevButton.addEventListener('click', () => {
  if (currentPage > 1) 
  {
    currentPage--;
    updatePage();
  }
});
