import dayjs from 'dayjs'

/**
 * 获取年份
 */
export function getYear(date: Date): number {
  return dayjs(date).year()
}

/**
 * 获取日期
 */
export function getDate(date: string | Date): string {
  const tempDate = dayjs(date)
  if (tempDate.year() === dayjs().year())
    return tempDate.format('MMM D')
  return tempDate.format('MMM D, YYYY')
}
