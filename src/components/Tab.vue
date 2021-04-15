<template>
  <!-- css animationを使用したvue.js -->
  <div class="tab">
    <ul class="tab-lists">
      <li v-for="item in tabLists" :key="item.tabList" class="tab-list" @click="TabType=item.tabList">
        {{ item.tabList }}
      </li>
    </ul>
    <div class="tab-main">
      <!-- appearを使用することで画面の読み込み時もトランジションが読み込まれるようになる -->
      <!-- 簡単なアニメーションを作成する場合はクラス要素にanimate_animatedで読み込んだanimate.cssを使用することが可能 -->
      <!-- animate.cssはtransitionでも使用可能で、enter-active-class="animate__animated animate__bounce"のように記述すると
      enter-activeが上書きされ使用することが可能になる -->
      <div class="tab-content-top">
        <transition
          name="slide"
          mode="out-in"
          appear>
        <!-- 動的コンポーネントは:is="データ名"を使用することでそのデータ名のコンポーネントを呼び出すことができる -->
        <!-- 指定したコンポーネントを切り替えが可能になる -->
        <!-- keep-aliveタグで動的コンポーネントを囲む場合、動的コンポーネントはコンポーネントを切り替える際に作り替えられない -->
          <keep-alive>
              <compornent :is="TabType"></compornent>
          </keep-alive>
        </transition>
      </div>
      <button @click="show = !show">切り替え</button>
      <!-- transitionにmodeをつけることで前の要素が消えてから表示することができるのでアニメーションが滑らかになる -->
      <transition name="fade" mode="out-in">
        <!-- 同じタグにアニメーションをつける場合、タグを識別するためにkeyをつけないといけない -->
        <!-- なぜ？ 同じタグの場合、vue.jsはタグの中身だけ(要素)を変更する、そのためアニメーションを発火させるにはタグごと変更する必要があるため -->
        <p v-if="show" key="bye">さようなら</p>
        <p v-else key="hello">こんにちは</p>
      </transition>
      <br>
        <button @click="add">追加</button>
        <ul>
          <!-- transition-groupは複数の要素を中に入れることが可能！ -->
          <!-- また必ずkeyが必要になる -->
          <!-- transition-groupは自動ではspanタグになる tag="div"などで変更可能 -->
          <!-- transition modeはない -->
          <!-- transition-groupにはv-move-class(7つ目のクラス)が存在する -->
          <transition-group name="fade">
            <!-- remove(index)を指定することで、削除する繰り返し要素を特定できる -->
            <li v-for="(number, index) in numbers" :key="number" @click="remove(index)" style="cursor: pointer;">
              {{ number }}
            </li>
          </transition-group>
        </ul>
      <br>
      <!-- transitionでJavaScriptのアニメーションを作成する場合、8つのフックをもちこれをmethodsで定義することでアニメーションを作成することが可能である -->
      <!-- javascriptしか使用しない場合下記のような:css="false"を記述する -->
      <transition
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
      <!-- 下記がjavescriptを使用したアニメーションを製作する際に使用する8つのフックについてです -->
        <!-- @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"

        @before-leave="before-Leave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled" -->
        <div class="circle" v-if="show"></div>
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
      show: true,
      numbers: [0, 1, 2],
      nextNumber: 3,
    }
  },
  components: {
    News,
    Notifications,
    About,
  },
  methods: {
    // 全てelを引数にとる、elとはelemntの略でHTML要素のことを指す
    // また、enterとleaveはdoneと言う引数もとる
    // doneは関数として使用する、アニメーションが終わりましたと教える関数、基本的には非同期の処理で使用する
    // cssアニメーションを同時に使用しない場合は必ずdoneを使用しなければならない、使っている場合はどっちでもいい
    beforeEnter(el) {
      // 現れる前
      el.style.transform = 'scale(0)'
    },
    enter(el, done) {
      // 現れる時、現れている時 actionと同様
      let scale = 0;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale += 0.1
        if (scale > 1 ) {
          clearInterval(interval);
          done();
        }
      }, 20)
    },
    // afterEnter() {
    //   // 現れた後
    // },
    // enterCancelled() {
    //   // 現れるアニメーションがキャンセルされた時
    // },
    // beforeLeave() {
    //   // 消える前
    // },
    leave(el, done) {
      // 消える時、消えている時
      let scale = 1;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale -= 0.1
        if (scale < 0 ) {
          clearInterval(interval);
          done();
        }
      }, 20)
    },
    // afterLeave() {
    //   // 消えた後
    // },
    // leaveCancelled() {
    //   // 消えるアニメーションがキャンセルされた時
    //   // v-showが適用されている場合だけ使用可能
    // },
    // numbersの個数の間の整数をランダムで計算する 例)1~5 = 0~4までの数字かランダムで計算される例は動的に変化しても対応する
    randomIndex() {
      return Math.floor(Math.random() * this.numbers.length);
    },
    // numbersにnextNumberをpushしているようなもの、上記のランダムな位置に追加し、nextNumberを＋1している
    add() {
      this.numbers.splice(this.randomIndex(), 0, this.nextNumber);
      this.nextNumber += 1;
    },
    // クリックしたindexを配列の中から削除している
    remove(index){
      this.numbers.splice(index, 1);
    }
  }
}
</script>

<style scoped>

  .slide-enter {
    transform: translate(-100px, 0);
    opacity: 0;
  }

  .slide-enter-active {
    transition: all 1s ease;
  }

  .slide-leave {
    transform: translate(0, 0);
  }

  .slide-leave-to {
    transform: translate(100px, 0);
    opacity: 0;
  }

  .slide-leave-active {
    transition: all .5s ease;
  }

  .tab {
    margin-top: 30px;
    height: 200px;
  }

  .tab-content-top {
    height: 50px;
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

  .circle {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    background-color: deeppink;
    border-radius: 50%;
  }
</style>