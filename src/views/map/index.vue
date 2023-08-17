<template>
  <div class="flex flex-1 flex-col items-stretch">
    <div class="mb-4">
      <el-button type="primary" :disabled="historyMapList.length <= 1" @click="back">返回上一级</el-button>
    </div>
    <div ref="echartsRef" class="flex-1"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, reactive, ref } from 'vue'
import { GeoJSON } from '@/api/map.d'
import api from '@/api'

const echartsRef = ref()
let myChart: echarts.ECharts

onMounted(async () => {
  myChart = echarts.init(echartsRef.value)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  myChart.on('click', (e: any) => {
    if (e.data.level === 'district') return
    const { adcode, name } = e.data
    historyMapList.push({ adcode, name })
    loadMap()
  })
  loadMap()
})

//记录上一级的地图
const historyMapList = reactive([{ adcode: 100000, name: '中国' }])

const back = () => {
  historyMapList.pop()
  loadMap()
}

//加载地图
const loadMap = async () => {
  const map = historyMapList[historyMapList.length - 1]
  const { adcode, name } = map
  const res = await api.map.bound(adcode)
  echarts.registerMap(name, res)
  myChart.setOption({
    series: [
      {
        type: 'map',
        map: name,
        data: generateSeriesData(res),
      },
    ],
  })
}
const generateSeriesData = (geoJson: GeoJSON) => {
  return geoJson.features.map((item) => {
    return { ...item.properties }
  })
}
</script>
