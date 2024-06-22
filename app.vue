<template>
  <NuxtLayout>
    <AppHeader />
    <NuxtPage keepalive/>
  </NuxtLayout>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "哔哩哔哩 (゜-゜)つロ 干杯~-bilibili",
  description:
    "热门 频道 专栏 直播 活动 课堂 社区中心 新歌热榜 总之就是非常心动! 毕业季 当时只道是寻常 当i人遇上心动的e人,他会... 分享备考攻略赢万元奖金>> 武林竞速赛来了! 更多 开庭!为什么那么多人相...",
  keywords: "B站,bilibili,哔哩哔哩,哔哩哔哩动画,动漫,电影,在线动漫,高清电影",
  // 绕开 B 站图片防盗链
  referrer: "no-referrer",
});
</script>
