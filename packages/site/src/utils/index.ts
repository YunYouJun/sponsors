import dayjs from 'dayjs'
import type { RankSponsor } from '@sponsors/types'

export const isProd = import.meta.env?.PROD === true

export * from './name'
export * from './money'

/**
 * 格式化日期
 * @param val
 */
export function formatDate(val: any) {
  return dayjs(val).format('YYYY-MM-DD')
}

/**
 * 对 sponsor 进行排序
 * @param sponsors
 */
export function sortSponsor(sponsors: RankSponsor[]) {
  return sponsors.sort((a, b) => {
    return b.total - a.total
  })
}
