// クリック時にライトの色を指定の色に変更
document.getElementById("light-red").addEventListener("click",function(){
    reset();
    this.classList.remove("gray");
    this.classList.add("red", "selected");
});

document.getElementById("light-yellow").addEventListener("click",function(){
    reset();
    this.classList.remove("gray");
    this.classList.add("yellow", "selected");
});

document.getElementById("light-blue").addEventListener("click",function(){
    reset();
    this.classList.remove("gray");
    this.classList.add("blue", "selected");
});

// ライトの色をグレーにリセット
function reset(){
    document.getElementById("light-red").className = "light gray";
    document.getElementById("light-yellow").className = "light gray";
    document.getElementById("light-blue").className = "light gray";
}
