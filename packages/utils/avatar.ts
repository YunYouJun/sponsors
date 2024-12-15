export const defaultAvatarUrl = 'https://cdn.jsdelivr.net/gh/YunYouJun/cdn@latest/img/avatar/none.png'

export function getQQAvatarUrl(qq: number | string) {
  // return `https://q1.qlogo.cn/g?b=qq&nk=${qq}&s=640`
  return `https://q1.qlogo.cn/g?b=qq&nk=${qq}&s=640`.replaceAll('&', '&amp;')
}
