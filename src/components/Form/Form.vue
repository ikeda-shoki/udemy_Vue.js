<template>
  <div class="form">
    <div class="form-item">
      <h2>イベントのフォーム</h2>
      <label for="title" class="title">名前</label>
      <!-- lazy修飾詞をつけることで選択が外れた時に下記の<p>が変化するようになる
        正確には文字が入力された時に発火するjsのinputというイベントからフォーカス(選択が外れた時)に発火するchangeというイベントに
        .lazyをつけることで変化する！ -->
        <!-- どういった時に使用するのか？→メールアドレスのバリデーションを使用する際に入力している時はエラーが出ず、決定した時にエラーが発生するようにしたい時など -->
      <input type="text" id="title" v-model.lazy="eventData.name">
      <!-- preタグは入力された文字の空白や改行までしっかりと表示させるタグ -->
      <pre>{{ eventData.name }}</pre>
      <FormText v-model.lazy="eventData.name" form-title="名前" form-type="text"></FormText>
    </div>

    <div class="form-item">
      <FormText v-model.lazy="eventData.email" form-title="Email" form-type="text"></FormText>
      <!-- 上記のコンポーネントでv-modelを使用する際には要するに、:value = "eventData.email"
        @input =  "eventData.email = $event"このような形になっている。
        これを子コンポーネントでうまく利用する必要がある
        ちなみにこれはtype="text"の場合なので他のtypeの場合は違うプロパティになるので注意！-->
    </div>
    <div class="form-item">
      <label for="maxNumber">最大人数</label>
      <!-- number修飾詞をつけることでinputに数字を入力する際、入力された後に形式がstringになることを防いでnumberのままになる -->
      <input type="number" id="maxNumber" v-model.number="eventData.maxNumber">
      <p>{{ typeof eventData.maxNumber }}人</p>
      <FormText v-model.number="eventData.maxNumber" form-title="最大人数" form-type="number"></FormText>
    </div>

    <div class="form-item">
      <label for="host">主催者</label>
      <!-- trim修飾詞をつけることで頭とけつの空白を取ってしまう -->
      <input type="text" id="host" v-model.trim="eventData.host">
      <pre>{{ eventData.host }}</pre>
      <FormText v-model.trim="eventData.host" form-title="主催者" form-type="text"></FormText>
    </div>
    <div class="form-item">
      <label for="detail">詳細</label>
      <!-- number修飾詞をつけることでinputに数字を入力する際、入力された後に形式がstringになることを防いでnumberのままになる -->
      <textarea type="text" id="detail" v-model="eventData.detail"></textarea>
      <pre>{{ eventData.detail }}</pre>
      <FormTextArea v-model.trim="eventData.detail" form-title="詳細" form-type="text"></FormTextArea>
    </div>
    <div class="form-item">
      <label for="isPrivate">公開ステータス</label>
      <!-- chckboxでは:checkedで初期値を設定可能(dataの値も入力可能な為、dataで設定した初期値がそのまま選択されることになる) -->
      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate" :checked="eventData.isPrivate">
      <p v-if="eventData.isPrivate === true">公開</p>
      <p v-else>非公開</p>
      <FormCheckbox v-model="eventData.isPrivate" form-title="公開ステータス"></FormCheckbox>
    </div>
    <div class="form-item">
      <label>参加条件</label>
      <!-- chckboxでは複数chckできる使用の場合、data属性の値を空の配列にすれば可能 -->
      <input type="checkbox" id="10" value="10代" v-model="eventData.target">
      <label for="10">10代</label>
      <input type="checkbox" id="20" value="20代" v-model="eventData.target">
      <label for="20">20代</label>
      <input type="checkbox" id="30" value="30代" v-model="eventData.target">
      <label for="30">30代</label>
      <p v-if="eventData.target.length">{{ eventData.target }}</p>
      <p v-else>選択されていません</p>
      <FormArrayCheckbox v-model="eventData.target" form-title="参加条件"></FormArrayCheckbox>
    </div>
    <div class="form-item">
      <label>参加費</label>
      <!-- v-modelを同様のものにすると、紐づけてくれる -->
      <input type="radio" id="free" value="無料" v-model="eventData.price">
      <label for="free">無料</label>
      <input type="radio" id="paid" value="有料" v-model="eventData.price">
      <label for="paid">有料</label>
      <p v-if="eventData.price.length">{{ eventData.price }}</p>
      <p v-else>選択されていません</p>
    </div>
    <div class="form-item">
      <label>開催場所</label>
      <!-- selectboxではmultipleをselectタグに使用することで複数選択が可能になる -->
      <select v-model="eventData.location">
        <option v-for="location in locations" :key="location">
          {{ location }}
        </option>
      </select>
      <p>{{ eventData.location }}</p>
    </div>
  </div>
</template>

<script>
import FormText from './FormText'
import FormTextArea from './FormTextArea'
import FormCheckbox from './FormCheckbox'
import FormArrayCheckbox from './FormArrayCheckbox'

export default {
  data() {
    return{
      locations: ["東京", "大阪", "名古屋", "福岡"],
      eventData: {
        name: "名前",
        email: "email",
        maxNumber: 0,
        host: "主催者",
        detail: "詳細内容",
        isPraivate: false,
        target: [],
        price: "",
        location: "東京",
      }
    }
  },
  components: {
    FormText,
    FormTextArea,
    FormCheckbox,
    FormArrayCheckbox
  },
  methods : {
  }
}
</script>

<style scoped>
  .form {
    margin-top: 50px;
  }
  h2 {
    margin-bottom: 20px;
  }
  label {
    margin-right: 20px;
  }
  .form-item {
    margin-bottom: 20px;
  }
</style>