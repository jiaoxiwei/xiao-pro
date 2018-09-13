<template>
  <clear-wrap class="body-content">
    <div>asd</div>
    <content-item v-for="(item, index) in [1,2,3,4,5]" :key="index" />
  </clear-wrap>
</template>

<script>
import ContentItem from '../item/index.vue'
export default {
  name: 'index',
  components: {
    ContentItem
  }
}
</script>

<style scoped>
.body-content{
  margin-top: 20px;
  box-sizing: border-box;
  width: 1002px;
}
</style>

<text>
  tian kong hao xiang xia yu
  wo hao xiang zhu ni ge bi
  sha zhan zai ni jia lou xia
  tai qi tou shu wu yun
  ru guo chang jing chu xian yi jia gang qin
  wo hui chang ge gei ni ting
  na pa hao duo peng shui wang xia ling
  xia tian kuai yao guo qu
  qing ni shao mai bing qi ling
  tian liang jiu bie chuang duan qun
  bie zai na me tao qi
  ru guo you shi bu na me kai xin
  wo yuan yi jinag ge kuo mi jie gei ni
  ni qi shi ming bai wo xin yi

  wei ni chang zhe gou ge mei you shi me feng ge
  ta jing jing dai bie zhe wo xiang ge ni kuai le
  wei ni jie dong bie he wei ni zuo yi zhi pu huo de fei e
  mei you shi me shi qing shi bu zhi de
  wei ni chang zhe shou ge mei you shi feng ge
  ta jing jing dai biao zhe wo xi wang ni kuai le
  wei ni zhan zhuan fan ce wei ni fang qi shi jian you he bu ke
  xia mo qiu liang li dai yi dian wen re you huan ji de yan se

  tian kong hao xiang xia yu
  wo hao xiang zhu ni ge bi
  sha zhan zai lou xia
  tai qi tou shu wu yun
  ru guo chang jing li chu xian yi jia gang qin
  wo hui chang ge gei ni ting
  na pa hao duo peng shui wang xia ling
  xia tian kuai yao guo qu
  qing ni shao mai bing qi ling
  tian liang jiu bie chuan duan qun
  bie zai na me tao qi
  ru guo you shi bu na me kai xin
  wo yuan yi jiang ge luo jie gei ni
  ni qi shi ming bai wo xin yi
  wei ni chang zhe shou ge mei you shi me feng ge
  ta jing jing dai bie zhe wo xiang gei kuai le
  wei ni jie dong bing he wei ni zuo yi zhi pu huo de fei e
  mei you shi me shi qing shi bu zhi de
  wi ni chang zhe shou ge mei you shi me feng ge
  ta jing jing dai bie zhe wo wang ni kuai le
  wei ni zhan zhuan fan ce wei ni fang qi shi jian you he bu ke
  xia mo qiu liang li dai yi dian wen re

  wei ni jie dong bing he wei ni zuo yi zhi pu huo de fei e
  mei you shi me shi qing shi bu zhi de
  ta jing jing dai biao zhe wo xi wang ni kuai le
  wei ni zhan zhuan fan ce wei ni fang qi shi jian you he bu ke
  xia mo qiu liang li dai yi dian wen re you huan ji de yan se

  zhong yu zhao dao jie kou zheng zui yi shang xin tou
  biao da wo suo you gan shou
  ji mo jian nong chen mo liu zai wu ci jiao luo
  ni shuo de tai shao huo tai duo
  dou hui rang wo geng huang kong
  shui ren you shui fang zong shui hui xian ran chu zhi you
  zui hou yi ding shi wo
  shuang jiao xuan kong zai ni leng ku re qing jian you zou
  bei qing zhan suo you hai yao xiao zhe jie shou
  wo ji du ni de ai qi shi ru hong
  xiang ge ren qi gao ju bu xia de tian hou
  ni yao de bu shi wo er shi yi zhong xu rong
  you ren teng cai xian de duo me chu zhong
  wo xian ru mang mu kuang lian de kuan rong
  cheng quan le ni wan zhong chong ai de tian hou
  ruo ai zhi sheng you huo zhi sheng bi ci ren shou
  bie zai hu xiang zhe mo
  ying wei wo meng dou you cuo
  tui kai chang bai de shou tui kai chang bai de si shou
  kuang ni you duo me shi cuo
  bie zai jiao wo xin ruan shi zui zhi ming de chui ruo
  wo ming ming dou dong qu ren ping si xiao zong
  wo ji du ni de ai qi shi ru hong
  xiang ge ren qi gao ju bu xia de tian hou
  ni yao de bu shi wo er shi yi zhong xu rong
  you ren teng cai xian de duo me chu zhong
  wo xian ru mang mu kuang lian de kuang rong
  cheng quan le ni wan zhong chong ai de tian hou
  ruo ai zhi sheng you huo zhi sheng bi ci ren shou
  bie zai hu xiang zhe mo
  yin wei wo meng dou you cuo
  ru guo you yi tian ai bu zai mi huo
  zu gou qu kan qin suo you shi fei dui cuo
  zhi dao ne gei shi hou ni zai wo de xin zhong
  jiang bu zai bei ge song
  ba ni dang zuo tian hou
  oooooo
  bu hui zai shi wo..................
</text>
