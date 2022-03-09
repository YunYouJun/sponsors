import 'dotenv/config'
import Afdian from 'afdian-api'

const token = process.env.AFDIAN_API_TOKEN || ''
const userId = process.env.AFDIAN_USER_ID || ''

if (!token) console.error('Token is null')
if (!userId) console.error('UserId is null')

const afdian = new Afdian({
  token,
  userId,
})

async function getSponsors() {
  const { data } = await afdian.querySponsor(1)
  return data.list
}

async function run() {
  // check ping
  const res = await afdian.ping()
  if (res.ec !== 200) {
    console.error('Can not connect afdian!')
    return
  }

  const sponsors = await getSponsors()
  console.log(sponsors)
}

run()
