/*************************************
 * 共通で使えそうなやつら
 *************************************/

/**
 * Dateオブジェクトを、YYYY/MM/DD HH:MM形式にする
 * @param date
 */
export const converDateToStr = (date: Date): string => {
  const year = `0000${date.getFullYear()}`.slice(-4);
  const month = `00${date.getMonth() + 1}`.slice(-2);
  const day = `00${date.getDate()}`.slice(-2);
  const hour = `00${date.getHours()}`.slice(-2);
  const minute = `00${date.getMinutes()}`.slice(-2);
  return `${year}/${month}/${day} ${hour}:${minute}`;
};

/**
 * 今からNヵ月前
 * @param ago Nヵ月前の値
 */
export const nMonthAgo = (ago: number): Date => {
  const now = new Date();
  now.setMonth(now.getMonth() - ago);
  return now;
};

/**
 * 指定時刻からN時間後
 * @param date 基準の時刻
 * @param after N時間後
 */
export const nHourAfter = (date: Date, after: number): Date => {
  date.setHours(date.getHours() + after);
  return date;
};

/**
 * 整数の乱数を返す
 * @param maxNum 乱数最大値
 */
export const randomInteger = (maxNum: number): number => {
  const num = Math.floor(Math.random() * maxNum);
  return num;
};
