import axios from 'axios'
import jsSHA from 'jssha'

const getAuthorizationHeader = () => {
  //  填入自己 ID、KEY 開始
  const AppID = import.meta.env.VITE_APP_ID
  const AppKey = import.meta.env.VITE_APP_KEY
  //  填入自己 ID、KEY 結束
  const GMTString = new Date().toGMTString()
  const JsSHA = jsSHA
  const ShaObj = new JsSHA('SHA-1', 'TEXT')
  ShaObj.setHMACKey(AppKey, 'TEXT')
  ShaObj.update('x-date: ' + GMTString)
  const HMAC = ShaObj.getHMAC('B64')
  const Authorization =
    'hmac username="' +
    AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"'
  return { Authorization: Authorization, 'X-Date': GMTString }
}

const baseRequest = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC/v2/',
  headers: getAuthorizationHeader()
})

// 取得指定城市自行車租借站位資料
export const apiGetBikeStation = (city) =>
  baseRequest.get(`Bike/Station/${city}?$format=JSON`)

// 取得指定城市自行車道路
export const apiGetCyclingShape = (city) =>
  baseRequest.get(`Cycling/Shape/${city}?$format=JSON`)

// 取得指定城市即時車位
export const apiGetBikeAvailability = (city) =>
  baseRequest.get(`Bike/Availability/${city}?$format=JSON`)

// 取得指定城市觀光景點
export const apiGetScenicSpot = (city) =>
  baseRequest.get(`Tourism/ScenicSpot/${city}?$orderby=Address&$format=JSON`)

// 取得指定城市觀光餐飲資料
export const apiGetRestaurant = (city) =>
  baseRequest.get(`Tourism/Restaurant/${city}?$orderby=Address&$format=JSON`)
