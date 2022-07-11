export interface ProjectItem {
  emoji?: string
  /**
   * 项目名称
   */
  name?: string
  /**
   * 项目描述
   */
  desc?: string
  /**
   * 代表色
   */
  color?: string
  /**
   * 强制覆盖文本色
   */
  textColor?: string
  github?: string
  url?: string
  /**
   * 文档链接
   */
  docs?: string
}
