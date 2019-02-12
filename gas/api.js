function doGet(e) {
  var payload = JSON.stringify(getList());
  if (e.parameter.callback) {
    //callbackはクライアントアプリケーションから指定されるcallback関数名
    // JSONP
    return ContentService.createTextOutput(e.parameter.callback + '(' + payload + ')').setMimeType(ContentService.MimeType.JAVASCRIPT);
  } else {
    return ContentService.createTextOutput(payload).setMimeType(ContentService.MimeType.JSON);
  }
}

// リストから取得
function getList() {
  var list = [];

  // 処理対象のシートを取得
  var sheets = getSheets();
  for (var s = 0; s < sheets.length; s++) {
    var sheet = sheets[s];
    // シートから全部読み込む
    var tmp = sheet.getDataRange().getValues();

    // 必要なデータをオブジェクト配列に整形
    for (var i = 0; i < tmp.length; i++) {
      list.push({
        date: tmp[i][0],
        user: tmp[i][1],
        tweetId: tmp[i][3]
      });
    }
  }
  Logger.log(JSON.stringify(list, null, '  '));
  return list;
}

// 処理対象のシートを取得
function getSheets() {
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  var targetSheet = [];

  if (sheets.length >= 1) {
    for (var i = 0; i < sheets.length; i++) {
      // 「シートX」になってるやつを対象としたい
      if (!sheets[i].isSheetHidden() && sheets[i].getName().indexOf('シート') > -1) {
        targetSheet.push(sheets[i]);
      }
    }
  }
  return targetSheet;
}
