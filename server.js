// https://fukuno.jig.jp/2943
import { Server } from "https://code4sabae.github.io/js/Server.js";

class MyServer extends Server {
    // 最初にDBをファイルから変数にロードして
    // 処理がおわったら変数からファイルに書き出す
    // pathにはアクセスしたURLの「/api/○○」が入っていて
    // reqにはPOSTで送るJSONが入っています
    // resp変数にフロントエンドに返したい内容をセットします
    api(path, req) {
        let db; // データベースの内容（db.json)
        try {
            // DBファイルの読み込み
            // ※誰かがこのapi関数にアクセスしているときは、ほかのユーザはその処理が終わるのを待つのでdb.jsonで不整合は生じない
            db = JSON.parse(Deno.readTextFileSync("db.json"))
        } catch (e) {
            // DBファイルがなければ空データの作成
            db = {
                timeline: []
            };
        }
        let resp = {};  // フロントエンドに返すJSON
        if (path === "/api/timeline") {
            // タイムラインをそのまま返す
            resp = db.timeline[0];
        } else if (path === "/api/post") {
            // タイムラインに投稿する
            // 画像ファイル自体は「/data/」のAPIで送られていて
            // 画像のURLがreq.urlで送られてくるのでそれを保存する
            let nextid;
            if (db.timeline.length === 0) {
                // 初投稿はIDを1にする
                nextid = 1;
            } else {
                // 2つめ投稿以降は最新のID足す1
                nextid = db.timeline[0].id + 1;
            }

            /**
             * このぶぶんに書きましょう
             */
            let newpost = {
                image_url: req.image_url,
                tilte: req.title,
                user_name: req.user_name,
                description: req.description
            };

            // timeline配列の先頭に追加する
            db.timeline.unshift(newpost);
        }

        // DBの保存
        Deno.writeTextFileSync("db.json", JSON.stringify(db, null, "\t"));
        return resp;
    }
}
new MyServer(8001);
