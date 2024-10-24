// 入力値
var input = prompt("正の整数を入力（全角数字は無効です）：");
var N = Number(input);
if (isNaN(N) || N <= 0 || !Number.isInteger(N)) {
    // 数値以外の入力、０以下の整数は無効とする
    alert("有効な半角の正の整数を入力してください");
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
