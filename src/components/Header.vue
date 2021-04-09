<template>
  <header>
    <div class="container">
      <div class="header-content">
        <HeaderTitle></HeaderTitle>
        <div class="header-lists">
          <ul>
            <li @click="modalOpen">
              <i class="far fa-bell header-list-item bell"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 親コンポーネントではpropsは属性として受け取る、属性がデータの送り口 -->
    <Modal @modal-status="modalClose" modal-titles= "お知らせ" modal-sub-titles="3日前までのお知らせ" :aria-hidden="isShow ? true : false">
      <!-- 子コンポーネントにHTMLタグを含んだテンプレートを送ることが可能 -->
      <!-- 名前付きslot:下記のようにtemplateタグを用意し、そこでv-slot:引数(好き名前)を定義することで子コンポーネントで指定した場所にname属性を持ったtemplateを定義できる -->
      <template v-slot:modal-news>
        <ul class="modal-body-lists">
          <li class="modal-body-list" v-for="item in news" :key="item.message">
            {{ item.message }}
          </li>
        </ul>
      </template>
    </Modal>
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
      isShow: true,
      news: [
        { message: "1個目のお知らせです！" },
        { message: "2個目のお知らせです！" },
        { message: "3個目のお知らせです！" },
      ]
    }
  },
  components: {
    HeaderTitle,
    // ローカルコンポーネントを定義するHeaderTitle: HeaderTitleと同義
    Modal,
  },
  methods: {
    modalOpen() {
      this.isShow = false
    },
    modalClose(status) {
      this.isShow = status
    },
  }
}
</script>

<style scoped>
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