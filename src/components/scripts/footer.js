let infoInput= document.querySelector('#info__toggle');
let btnToggle=document.querySelector('.mobile__footer_btn');
let mobileFooterInfo=document.querySelector('.mobile__footer');
btnToggle.addEventListener('click',()=>{
  console.log(infoInput.checked,' =<');
  showFooterInfo();
});
function showFooterInfo(){
  mobileFooterInfo.classList.toggle('toggleUp');
}