import * as request from 'request-promise';
import logger from './logger';
import * as configModule from 'config';
import { Config, GasGetResponse, Tweet, GasResponseTweet } from '../types';
import { nHourAfter } from './util';
const config: Config = configModule.util.toObject(configModule);

/**
 * スプレッドシートからデータ取得
 * @return ツイートリスト
 */
export const getTweetList = async (): Promise<Tweet[]> => {
  const options: request.Options = {
    uri: `${config.google.url}`,
    json: true
  };
  try {
    logger.access.info(options.uri);
    const response: GasGetResponse<GasResponseTweet[]> = await request.get(options);
    logger.access.trace(JSON.stringify(response, null, '  '));
    if (!response.isOK) throw response.message;

    // IFTTTが設定するcreate_atをちゃんとしたDate型に入れなおす
    const tweetList: Tweet[] = [];
    for (const list of response.payload) {
      let newDate = new Date(list.date.replace(/(at)|(AM)|(PM)/g, ''));
      if (list.date.includes('PM')) {
        newDate = nHourAfter(newDate, 12);
      }

      tweetList.push({
        ...list,
        date: newDate
      });
    }

    return tweetList;
  } catch (e) {
    logger.system.error('URI: ' + options.uri);
    logger.system.error(e);
    return [];
  }
};
