/**
 * Twitterのなんやかんや
 * @see https://developer.twitter.com/en/docs
 */
import * as twitter from 'twitter';
import { randomInteger, nMonthAgo } from './util';
import { Tweet, Config } from '../types';
import logger from './logger';
import * as configModule from 'config';
const config: Config = configModule.util.toObject(configModule);

/**
 * ランダムにRTする
 */
export const randomRetweet = (): void => {
  try {
    // ツイートリスト
    const tweetList: Tweet[] = [];
    const baseDate = nMonthAgo(2);
    // 期間が離れすぎてるやつは対象外にする
    for (const tweet of global.tweetList) {
      if (tweet.date > baseDate) {
        tweetList.push(tweet);
      }
    }
    // ツイート対象が無ければ中止
    if (tweetList.length === 0) return;

    // ツイート対象をランダムに選択
    const random = randomInteger(tweetList.length - 1);
    logger.console.debug(random);
    const targetTweet = tweetList[random];

    // RT実行
    const tweetId: string = targetTweet.tweetId.match(/status\/([0-9]+)/)![1]; // ツイートURLのID部分を抽出
    logger.access.info(`ランダムツイート：${tweetId}`);
    const params = { trim_user: true };
    const client = new twitter(config.twitter);
    client.post(`statuses/retweet/${tweetId}.json`, params, (error, text, response) => {
      if (!error) logger.system.error(text);
    });
  } catch (e) {
    logger.system.error(e);
  }
};
