// 答え
let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 1;
let yoso = 4;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする


    let i = document.querySelector('input[name="yoso"]');
    
    let b1 = document.querySelector('button#suuzi');
    b1.addEventListener('click',hantei); //hanteiに結果を送る。
    



// ボタンを押した後の処理をする関数 hantei() の定義
    function hantei() {
        let yoso = Number(i.value);
    let span_kaisu =document.querySelector("span#kaisu");
    span_kaisu.textContent=kaisu;
    let span_answer =document.querySelector("span#answer");
    span_answer.textContent=yoso;
    let p1 =document.querySelector("p#result");
    // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する

    if (kaisu < 3 ){
        if (yoso === kotae){
            p1.textContent = '正解です。おめでとう！';
        }else if (yoso > kotae){
         p1.textContent = 'まちがい。答えはもっと小さいですよ。';
        }else{
            p1.textContent="まちがい。答えはもっと大きいですよ。";
        }
    }
    if (kaisu === 3){
        if (yoso === kotae){
            p1.textContent="正解です。おめでとう！";
        }else{
            p1.textContent="まちがい。残念でした。答えは" + kotae + "です。";
        }
    }
    if(kaisu > 3){
        p1.textContent="答えは" + kotae + "でした。すでにゲームは終わっています。";
    }
    kaisu = kaisu + 1;
}
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール

