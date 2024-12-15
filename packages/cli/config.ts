import path from 'node:path'

export const config = {
  distDataFolder: path.resolve(__dirname, 'dist/data'),
  siteDataFolder: path.resolve(__dirname, '../site/src/assets/data'),
  sitePublicFolder: path.resolve(__dirname, '../site/public'),
  sitePublicDataFolder: path.resolve(__dirname, '../site/public/data'),
}
