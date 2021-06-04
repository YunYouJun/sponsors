import { ViteSSGContext } from "vite-ssg";
export type UserModule = (ctx: ViteSSGContext) => void;

export enum SponsorMethod {
  ALI_PAY = "支付宝",
  WECHAT_PAY = "微信支付",
  QQ_PAY = "QQ 钱包",
  OTHER = "其他",
}

interface BaseSponsor {
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
}

/**
 * 金钱赞助者
 */
export interface MoneySponsor extends BaseSponsor {
  method:
    | SponsorMethod.ALI_PAY
    | SponsorMethod.WECHAT_PAY
    | SponsorMethod.QQ_PAY;
  /**
   * 赞助金额
   */
  amount: number;
  /**
   * 备注内容
   */
  memo: string;
}

/**
 * 其他形似的赞助者
 */
export interface OtherSponsor {
  method: SponsorMethod.OTHER;
  /**
   * 赞助内容
   */
  content: string;
}

export type Sponsor = MoneySponsor | OtherSponsor;

/**
 * 排序赞助者
 */
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
