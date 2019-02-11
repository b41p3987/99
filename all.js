
let str = "";
let wrap = document.querySelector(".wrap");

str += `<div class='box box-first'>

<div class='line'>九九乘法表</div>
<p>MULTIPLICATION CHART</p>
</div>
</div>`;

for(let i = 2; i < 10; i++){ 
  str += "<div class='box'>";
  str += `<div class='box-number'>${i}</div>`;
  for(let j = 1; j < 11 ; j ++){
      str += `<div class='box-item'>${i} x ${j} = ${i*j}</div>`;
  }
  str += "</div>";
}

wrap.innerHTML = str;


