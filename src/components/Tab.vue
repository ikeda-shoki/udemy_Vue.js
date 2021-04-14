<template>
  <!-- css animationを使用したvue.js -->
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
      <transition name="slide" appear>
        <keep-alive>
            <compornent :is="TabType"></compornent>
        </keep-alive>
      </transition>
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

  .slide-enter {
    transform: translate(-100px, 0);
    opacity: 0;
  }

  .slide-enter-active {
    transition: all 1s .5s ease;
  }

  .slide-leave {
    transform: translate(0, 0);
  }

  .slide-leave-to {
    transform: translate(100px, 0);
  }

  .slide-leave-active {
    transition: all .5s ease;
  }

  .tab {
    margin-top: 30px;
    height: 200px;
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

  .tab-component {
    opacity: 0;
  }
</style>