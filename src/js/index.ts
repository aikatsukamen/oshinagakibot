import logger from './logger';
import { CronJob } from 'cron';
import { getTweetList } from './gas';
import { randomRetweet } from './twitter';

// 起動時メッセージ
logger.system.info('きらあこ～');

/** ツイート情報 */
global.tweetList = [];

// ツイートリスト取得
new CronJob('0 * * * *', async () => {
  const tweet = await getTweetList();
  if (tweet.length > 0) global.tweetList = tweet;
}).start();

// ランダムリツイート
new CronJob('*/15 * * * *', randomRetweet).start();

//  手動で動かすテスト
// (async () => {
//   global.tweetList = await getTweetList();
//   logger.console.info(global.tweetList);
//   await randomRetweet();
// })();

/**
 * シャットダウン処理
 * FIXME: pm2経由だと上手く動かない
 */
const shutdown = () => {
  logger.system.info('終了信号を受信しました。');
  setTimeout(() => {
    process.exit(0);
  }, 1500);
};
// 終了信号を受信
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
