import axios from 'axios'
import { GeoJSON } from './map.d'
export async function bound(adcode: number) {
  const data = await axios<GeoJSON>(`https://geo.datav.aliyun.com/areas_v3/bound/${adcode}_full.json`, {
    method: 'get',
  })
  return data.data
}
