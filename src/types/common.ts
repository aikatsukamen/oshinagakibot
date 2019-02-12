/***************************
 * 共通の型定義
 **************************/

/** Config */
export type Config = {
  /** Discordの設定 */
  twitter: {
    consumer_key: string;
    consumer_secret: string;
    access_token_key: string;
    access_token_secret: string;
  };
  google: {
    url: string;
  };

  /** ログの設定 */
  log4js: {
    appenders: {
      [logType: string]: {
        type: string;
        filename?: string;
        maxLogSize?: number;
        backups?: number;
      };
    };
    categories: {
      [logType: string]: {
        appenders: string[];
        level: string;
      };
    };
  };
};

/** GASとの通信レスポンス */
export type GasGetResponse<T> = {
  isOK: boolean;
  message: string;
  payload: T;
};

export type Tweet = {
  date: Date;
  user: string;
  tweetId: string;
};

export type GasResponseTweet = {
  date: string;
  user: string;
  tweetId: string;
};
