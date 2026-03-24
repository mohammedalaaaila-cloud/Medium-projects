let open=document.querySelector(".list");
let close=document.querySelector('.lost');
const mq = window.matchMedia("(max-width: 776px)");
let menu=document.querySelector('.menu')








function setLayout() {
  if (mq.matches) {
    // موبايل: القائمة مخفية افتراضياً وزر open ظاهر
    menu.style.display = "none";
    open.style.display = "";
    close.style.display = "none";
  }
 else {
    // ديسكتوب: القائمة تظهر عادي بدون أزرار
    menu.style.display = "";
    open.style.display = "none";
    close.style.display = "none";
  }
}

// شغّله أول ما الصفحة تفتح
setLayout();

// شغّله كل ما يتغير حجم الشاشة
mq.addEventListener("change", setLayout);

open.onclick = () => {
  if (mq.matches) {
    close.style.display = "block";
    open.style.display = "none";
    menu.style.display = "block";
  }
};

close.onclick = () => {
  if (mq.matches) {
    close.style.display = "none";
    open.style.display = "block";
    menu.style.display = "none";
  }
};