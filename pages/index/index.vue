<template>
  <!-- 频道模块 -->
  <van-tabs>
    <van-tab v-for="item in channelList" :key="item.id" :title="item.name" />
  </van-tabs>
  <!-- 视频列表 -->
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="去 bilibili App 看更多"
    @load="onLoad"
  >
    <div class="flex flex-wrap px-[5px] py-[10px]">
      <AppVideo v-for="item in list" :key="item.bvid" :item="item" />
    </div>
  </van-list>
</template>

<script setup lang="ts">
import type { VideoItem } from "~/types/video";
import { fetchChannel, fetchVideList } from "~/api/apis";

const { data: channelList } = await fetchChannel();
const { data: videoList } = await fetchVideList();

const loading = ref(false);
const finished = ref(false);
const list = ref<VideoItem[]>([]);

let page = 1;
let pageSize = 20;

// 触底加载
const onLoad = () => {
  // 表示正在加载
  loading.value = false;
  // 根据当前页码提取数据
  const data = videoList.value?.slice(
    (page - 1) * pageSize,
    page * pageSize
  ) as VideoItem[];
  // 追加到用于渲染的数组中
  list.value.push(...data);
  // 页码累加
  page++;
  // 加载结束
  if (videoList.value?.length === list.value.length) {
    finished.value = true;
  }
};
onLoad();
</script>

<style lang="scss" scoped></style>
