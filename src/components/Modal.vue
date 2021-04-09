<template>
  <div class="overray">
    <div class="modal">
      <div class="modal-header">
        <h3 class="modal-header-title">{{ modalTitles }}</h3>
        <p class="modal-header-sub-title">{{ modalSubTitles }}</p>
      </div>
      <div class="modal-body">
        <!-- name属性を指定することで親コンポーネントでv-slotで指定した引数のテンプレートを描画できる -->
        <slot name="modal-news">
          <!-- 親コンポーネントからslotが送られてこない時は下記の内容がデフォルトとして表示される -->
          現在の新しい情報はありません
        </slot>
        <p class="modal-body-subtitile">途中経過</p>
        <!-- 下記のname属性を指定していないslotは親コンポーネントのタグ内のtemplateタグ以外の部分が全て描写される -->
        <!-- 下記の場合は親コンポーネントに何も記載がないため下記slot内のデフォルトの内容が描画されている -->
        <slot>
          現在の新しい情報はありません
        </slot>
      </div>
      <div class="modal-footer">
        <button @click="modalClose">閉じる</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
      }
    },
    methods: {
      modalClose() {
        this.$emit("modal-status", true)
      }
    },
    props: {
      // propsは基本は配列、下記のようなオブジェクトでデータを親から受け取ることも可能、下記はバリデーションをかけている
      // propsはデータの受け口
      modalTitles: {
        type: String,
        required: true,
      },
      // propsを複数使用する場合は、下記のようにオブジェクトにして渡す
      modalSubTitles: {
        type: String
      },
    },
    // ファイル名やコンポーネントは単語の初めが大文字(パスカルケース)、propsはvueではキャメルケース(繋がる単語の先頭を大文字)、HTMLではケバブケース(ハイフンで繋ぐ)
  }
</script>

<style scoped>
  .overray {
    z-index: 10;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color:rgba(0,0,0,0.5);
    justify-content: center;
  }

  .modal {
    width: 500px;
    background-color: #fffafb;
    margin: 200px auto 0;
    padding: 20px 30px;
    border-radius: 10px;
  }

  .modal-header-title {
    font-size: 30px;
    text-align: center;
  }

  .modal-header-sub-title {
    text-align: center;
    margin: 20px 0;
  }

  .modal-body-lists {
    display: flex;
    flex-direction: column;
  }

  .modal-body-list {
    margin-bottom: 10px;
    padding-bottom: 5px;
    font-size: 20px;
    border-bottom: solid 1px #afa7a4;
  }

  .modal-body-subtitile {
    margin: 40px 0 20px;
    text-align: center;
  }

  .modal-footer {
    text-align: right;
  }
</style>