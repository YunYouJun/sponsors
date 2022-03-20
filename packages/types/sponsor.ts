export enum MoneyMethod {
  WECHAT_PAY = '微信支付',
  WECHAT_REWARD = '微信赞赏',
  ALI_PAY = '支付宝',
  QQ_PAY = 'QQ 钱包',
}

// export const MoneyMethod = {
//   WECHAT_PAY: '微信支付',
//   WECHAT_REWARD: '微信赞赏',
//   ALI_PAY: '支付宝',
//   QQ_PAY: 'QQ 钱包',
// }

export type OtherMethod = '其他'

export type SponsorMethod = MoneyMethod | OtherMethod

interface BaseSponsor {
  /**
   * 赞助者名称
   */
  name: string
  /**
   * 头像
   */
  avatar?: string
  /**
   * 赞助者链接
   */
  url?: string
  /**
   * 赞助日期
   */
  date: Date
  /**
   * 赞助方式
   */
  method: SponsorMethod | string
  /**
   * 备注内容
   */
  memo?: string
}

/**
 * 金钱赞助者
 */
export interface MoneySponsor extends BaseSponsor {
  /**
   * 赞助金额
   */
  amount: number
}

/**
 * 其他形似的赞助者
 */
export interface OtherSponsor extends BaseSponsor {
  method: OtherMethod
  /**
   * 赞助内容
   */
  content: string
}

export type Sponsor = MoneySponsor | OtherSponsor

/**
 * 排序赞助者
 */
export interface RankSponsor {
  name: string
  url?: string
  avatar?: string
  /**
   * 总额
   */
  total: number
  children: Sponsor[]
}
