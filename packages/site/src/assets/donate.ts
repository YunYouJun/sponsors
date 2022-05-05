import type { MoneyMethod } from '@sponsors/types'

export const donateMethod: {
  [key in keyof typeof MoneyMethod]: {
    title: string
    url: string
  }
} = {
  ALI_PAY: {
    title: '支付宝',
    url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
  },
  WECHAT_PAY: {
    title: '微信支付',
    url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
  },
  WECHAT_REWARD: {
    title: '微信赞赏',
    url: 'https://cdn.yunyoujun.cn/img/donate/wechat-reward-code.jpg',
  },
  QQ_PAY: {
    title: 'QQ 钱包',
    url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
  },
}
