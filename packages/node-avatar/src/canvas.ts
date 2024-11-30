// import { createCanvas } from 'canvas'

// /**
//  * get avatar base64 by name
//  */
// export function generateAvatarByName(name: string, format: 'base64' | 'buffer' = 'base64') {
//   const canvas = createCanvas(100, 100)
//   canvas.width = 100
//   canvas.height = 100
//   const ctx = canvas.getContext('2d')

//   if (!ctx) {
//     throw new Error('Canvas Error!')
//   }

//   // 设置背景色
//   ctx.fillStyle = '#f0f0f0'
//   ctx.fillRect(0, 0, canvas.width, canvas.height)

//   // 设置文字
//   ctx.font = '50px Arial'
//   ctx.fillStyle = '#ff0000'
//   const firstChar = name.charAt(0).toUpperCase()
//   ctx.fillText(firstChar, canvas.width / 2, canvas.height / 2)

//   // 将canvas转换为base64编码的图片
//   if (format === 'base64') {
//     return canvas.toDataURL('image/png')
//   } else if (format === 'buffer') {
//     return canvas.toBuffer()
//   }
// }
