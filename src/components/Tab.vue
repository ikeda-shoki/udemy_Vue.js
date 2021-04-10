<template>
  <div class="tab">
    <ul class="tab-lists">
      <li v-for="item in tabLists" :key="item.tabList" class="tab-list" @click="TabType=item.tabList">
        {{ item.tabList }}
      </li>
    </ul>
    <div class="tab-main">
      <!-- 動的コンポーネントは:is="データ名"を使用することでそのデータ名のコンポーネントを呼び出すことができる -->
      <!-- 指定したコンポーネントを切り替えが可能になる -->
      <!-- keep-aliveタグで動的コンポーネントを囲む場合、動的コンポーネントはコンポーネントを切り替える際に作り替えられない -->
      <keep-alive>
        <compornent :is="TabType"></compornent>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import News from './TabType/TabNews.vue'
import Notifications from './TabType/TabNotifications.vue'
import About from './TabType/TabAbout.vue'

export default {
  data(){
    return {
      tabLists: [
        { tabList: "News" },
        { tabList: "Notifications" },
        { tabList: "About" },
      ],
      TabType: "News",
    }
  },
  components: {
    News,
    Notifications,
    About,
  }
}
</script>

<style scoped>
  .tab {
    margin-top: 30px;
  }

  .tab-lists {
    display: flex;
  }

  .tab-list {
    margin-right: 20px;
    padding: 10px 15px;
    background-color: #e36962;
    color: #fffafb;
    border-radius: 10px;
    margin-bottom: 30px;
  }

  .tab-list:hover {
    opacity: 0.8;
  }
</style>