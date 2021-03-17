export type SponsorMethod = "支付宝" | "微信支付" | "QQ 转账" | "QQ 红包";

export interface Sponsor {
  /**
   * 赞助者名称
   */
  name: string;
  /**
   * 赞助者链接
   */
  url?: string;
  /**
   * 赞助日期
   */
  date: Date;
  /**
   * 赞助方式
   */
  method: SponsorMethod;
  /**
   * 赞助金额
   */
  amount: number;
  /**
   * 备注内容
   */
  memo: string;
}

export interface RankSponsor {
  name: string;
  url?: string;
  avatar?: string;
  /**
   * 总额
   */
  total: number;
  children: Sponsor[];
}
