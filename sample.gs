
//LocalよりPush 2021/04/15 15:10
// Messaging APIのチャネルアクセストークン
const CHANNEL_ACCESS_TOKEN = "wIalaUwle5sIGg3nOtvrfUY4XMJ0Y/TZS4TOsxPbC0vO7BOGBNtJ1tpOsnidI8X6k56ly0mYFNdXFeeMfmq7bBpeXU0Yj6dLR4iN7lVhWSZImgqFKHxsqdfETO2OyqohXDMeaJkmAuMmp0eQWeKG4gdB04t89/1O/w1cDnyilFU=";


//GitHub


/*
 * ボットにイベントが発生したときの（メイン）処理
 * （例）メッセージの受信、フォローされた、アンフォローされた
 */
function doPost(e) {
  const events = JSON.parse(e.postData.contents).events;
  events.forEach((event) => {
    // イベントがメッセージの受信だったとき
    if(event.type == "message") {
      reply(event);
    }
 });
}

/*
 * オウム返しをする処理
 */
function reply(e) {
  // 受信したメッセージをそのまま送信
  const message = {
    "replyToken": e.replyToken,
    "messages": [
      {
        "type": "text",
        "text": e.message.text
      }
    ]
  };
  // 送信のための諸準備
  const replyData = {
    "method": "post",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + CHANNEL_ACCESS_TOKEN
    },
    "payload": JSON.stringify(message)
  };
  // JSON形式でAPIにポスト
  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/reply", replyData);
}
