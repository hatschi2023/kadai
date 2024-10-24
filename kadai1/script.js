// クリック時にライトの色を指定の色に変更
document.getElementById("red").addEventListener("click",function(){
    reset();
    this.classList.remove("gray");
    this.classList.add("red", "selected");
});

document.getElementById("yellow").addEventListener("click",function(){
    reset();
    this.classList.remove("gray");
    this.classList.add("yellow", "selected");
});

document.getElementById("blue").addEventListener("click",function(){
    reset();
    this.classList.remove("gray");
    this.classList.add("blue", "selected");
});

// ライトの色をグレーにリセット
function reset(){
    document.getElementById("red").className = "light gray";
    document.getElementById("yellow").className = "light gray";
    document.getElementById("blue").className = "light gray";
}