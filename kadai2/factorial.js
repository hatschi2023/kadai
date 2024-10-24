// 入力値
var input = prompt("正の整数を入力：");
var N = Number(input);
// 数値以外、０以下の整数、少数の入力は無効とする
if (isNaN(N) || N <= 0 || !Number.isInteger(N)) {
    alert("有効な正の整数を半角数字で入力してください");
}
// 階乗計算する関数
var factorial = function (N) {
    if (N === 1) {
        return 1;
    }
    return N * factorial(N - 1);
};
// 実行
alert("".concat(N, "! = ").concat(factorial(N)));
