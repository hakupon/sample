
function doPost(e) {
  const events = JSON.parse(e.postData.contents).events;
  events.forEach((event) => {
    // イベントがメッセージの受信だったとき
//    if(event.type == "message") {
//      reply(event);
//    }
 });
}

