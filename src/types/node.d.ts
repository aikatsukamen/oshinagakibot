declare namespace NodeJS {
  interface Global {
    tweetList: {
      date: Date;
      user: string;
      tweetId: string;
    }[];
  }
}
