// 入力値
const input = prompt("正の整数を入力：");
const N = Number(input);

// / 数値以外、０以下の整数、少数の入力は無効とする
if (isNaN(N) || N <= 0 || !Number.isInteger(N)) {
    alert("有効な半角の正の整数を入力してください");
}

// 階乗計算する関数
const factorial = (N: number): number => {
    if (N === 1) {
        return 1;
    } 
    return N * factorial(N - 1);
}

// 実行
alert(`${N}! = ${factorial(N)}`);
