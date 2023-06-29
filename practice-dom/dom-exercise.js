//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let h2 = document.querySelector('h2#ex42');
let p = document.createElement('p');
p.textContent='写真表と都市の緯度経度のページです';
h2.insertAdjacentElement('afterend',p);
p.style.textEmphasis="sesame green";

// 練習4-3 写真表作成プログラム
let div1=document.querySelector("div#phototable");
let p1=document.createElement("p1");
p1=document.createElement("p");
let img1 =document.createElement("img");
img1.setAttribute=("src");
img1.src="taro.png";
p1.insertAdjacentElement("beforeend",img1);
div1.insertAdjacentElement("beforeend",p1);

let div2=document.querySelector("div#phototable");
let p2=document.createElement("p2");
p2=document.createElement("p");
let img2 =document.createElement("img");
img2.setAttribute=("src");
img2.src="jiro.png";
p2.insertAdjacentElement("beforeend",img2);
div2.insertAdjacentElement("beforeend",p2);

let div3=document.querySelector("div#phototable");
let p3=document.createElement("p3");
p3=document.createElement("p");
let img3 =document.createElement("img");
img3.setAttribute=("src");
img3.src="hanako.png";
p3.insertAdjacentElement("beforeend",img3);
div3.insertAdjacentElement("beforeend",p3);


// 練習4-4 箇条書き削除プログラム
let w = document.querySelectorAll('ul#location > li');
for (let n of w) {
	n.remove();
  }

// 練習4-5 箇条書き追加プログラム
  let o =document.querySelector("ul#location");
  for (let h of data){
	let g= document.createElement("li");
	g.textContent=h.name + "... 緯度:" + h.lat + ", 経度:" + h.lng;
	o.insertAdjacentElement("beforeend",g);
	}