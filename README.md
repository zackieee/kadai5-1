# kadai5-1
サードパーティークッキーを理解する  
◆ファーストパーティサイト  

## 実行方法
1. ローカルにクローン
2. クローンフォルダに移動
3. npm install
※以降は先にkadai5-2を起動後に実施してください※
4. 下記のとおりkadai5-2実行時に控えた値でドメインまたはURLを書き換えてください 
Domain=以降のドメイン名
```
kadai5-1/routes/index.js
8行目  'name1=hoge1; Domain=55a91ba25382.ngrok.io; SameSite=None; Secure; HttpOnly',
```
src=''内のURL
```
kadai5-1/views/index.jade
9行目   iframe(width='560', height='315', src='https://b044ab4a2c1d.ngrok.io/', frameborder='1')
```
5. 上記の修正を保存後、下記コマンド実行
```
$ node ./bin/www
```
6. ブラウザでhttp://localhost:3000にアクセス  

# 実行結果  

画面上にそれぞれのサイトのクッキーが表示されます。

ファーストパーティクッキー：name1 = hoge1  
サードパーティクッキー：name2 = hoge2

Firefox又は、Chromeはサードパーティクッキーが保存されます。  
safariはサードパーティクッキーが保存されません。  
※ブラウザの設定を変えている場合は、この限りではありません
