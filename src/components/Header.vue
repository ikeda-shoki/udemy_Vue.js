<template>
  <header>
    <div class="container">
      <div class="header-content">
        <HeaderTitle></HeaderTitle>
        <div class="header-lists">
          <ul>
            <li @click="topicsModalOpen">
              <i class="fas fa-external-link-square-alt header-list-item"></i>
            </li>
            <li @click="newsModalOpen">
              <i class="far fa-bell header-list-item bell"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- transitionを設定する場合は必ずname属性の付与が必要 -->
    <transition name="fade">
      <!-- 親コンポーネントではpropsは属性として受け取る、属性がデータの送り口 -->
      <Modal @modal-status="modalClose" modal-titles= "お知らせ" modal-sub-titles="3日前までのお知らせ" :modal-type="modalType" v-if="isShow ? true : false">
        <!-- 子コンポーネントにHTMLタグを含んだテンプレートを送ることが可能 -->
        <!-- 名前付きslot:下記のようにtemplateタグを用意し、そこでv-slot:引数(好き名前)を定義することで子コンポーネントで指定した場所にname属性を持ったtemplateを定義できる -->
        <template v-slot:modal-news>
          <li class="modal-body-list" v-for="item in news" :key="item.message">
            {{ item.message }}
          </li>
        </template>
        <template v-slot:modal-topics>
          <li class="modal-body-list" v-for="item in topics" :key="item.message">
            {{ item.message }}
          </li>
        </template>
      </Modal>
    </transition>
  </header>
</template>

<script>
import HeaderTitle from './HeaderTitle'
// 上記がローカルコンポーネントの読み込み方法
import Modal from './Modal'

export default {
  // コンポーネントではdataは関数でなければならない
  // template間でdataを共有してしてしまう為、関数で記載する
  data() {
    return{
      isShow: false,
      news: [
        { message: "1個目のお知らせです！" },
        { message: "2個目のお知らせです！" },
        { message: "3個目のお知らせです！" },
      ],
      topics: [
        { message: "1個目のトピックです！" },
        { message: "2個目のトピックです！" },
        { message: "3個目のトピックです！" },
        { message: "4個目のトピックです！" },
      ],
      modalType: "",
    }
  },
  components: {
    HeaderTitle,
    // ローカルコンポーネントを定義するHeaderTitle: HeaderTitleと同義
    Modal,
  },
  methods: {
    topicsModalOpen() {
      this.modalType = "topics"
      this.isShow = true
    },
    newsModalOpen() {
      this.modalType = "news"
      this.isShow = true
    },
    modalClose(status) {
      this.isShow = status
    },
  }
}
</script>

<style scoped>
/* transitionタグを定義した場合6つのname属性に関するものをstyleで定義する必要がある */
/* css animationを使用する場合は全ての状態を記載する必要はない！
なぜなら、@keyframsで始まりを終わりの状態を記載済みのため */
  .fade-enter {
    /* 現れる時の最初の状態 */
    opacity: 0;
  }
  .fade-enter-active {
    /* 現れる時のトランジションの状態 */
    transition: opacity .8s;
  }
  /* ここから下 */
  .fade-enter-to {
    /* 現れる時の最後の状態 */
    opacity: 1;
  }
  .fade-leave {
    /* 消える時の最初の状態 */
    opacity: 1;
  }
  /* ここから上はあってもなくても大丈夫 */
  .fade-leave-active {
    /* 消える時のトランジションの状態 */
    transition: opacity .8s;
  }
  .fade-leave-to {
    /* 消える時の最後の状態 */
    opacity: 0;
  }

  header {
    background-color: #e36962;
    height: 90px;
  }

  ul {
    display: flex;
  }

  .header-content {
    display: flex;
    align-items: center;
  }

  .header-lists {
    margin-left: auto;
  }

  .header-list-item {
    font-size: 25px;
    margin-right: 20px;
    color: #fffafb;
  }

  [aria-hidden] {
    display: none;
  }

  [aria-hidden="false"] {
    display: block;
  }
</style>