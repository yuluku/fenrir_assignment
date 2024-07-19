## 問題文
小括弧'()'と中括弧'{}'と大括弧'[]'のみで構成された文字列 s が与えられた時、s が下記のルールに従っているか判定するプログラムを作成せよ。<br/>
```
ルール１：開き括弧'({['は、同じ種類の閉じ括弧')}]'で閉じること
ルール２：括弧を開いた順に括弧を閉じること
```

例１
入力：s="()"
出力：true

例２
入力：s="([]){}"
出力：true

例３
入力：s="({)}"
出力：false

## 参考サイト
- https://qiita.com/TMDM/items/968c2422e3284b15fc10
- https://qiita.com/hanahagewanko/items/9d1d0246a80ef52e8f27
- https://codelikes.com/javascript-array-contains/#toc2

## インストールが必要なもの
```
npm install
```

## 実行方法
```
$ tsc answer.tsx
$ node answer.js
```
