let url = location.pathname;
if(url=='/'){url='/index.html'}
let lis = document.querySelector('.navbar').querySelectorAll('li')
for(let i of lis){
    let a = i.querySelector('a');
    if(url.includes('/'+a.getAttribute('href'))){
        a.className='current'
    }
}