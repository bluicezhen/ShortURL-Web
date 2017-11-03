<template>
  <div id="app">
    <div class="top">
      <h1>Bluice Short URL</h1>
    </div>
    <router-view class="content"></router-view>
    <div class="foot">
      <p>
      Power by <a href="https://github.com/bluicezhen/ShortURL">ShortURL</a> & <a href="https://github.com/bluicezhen/ShortURL-Web">ShortURL-Web</a>
      </p>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
  // To remove default <input>'s inner shadow for IOS dev
  input {
    -webkit-appearance: none;
  }
  #app {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100vh;
    .top {
      height: 50px;
      width: 100%;
      display: flex;
      h1 {
        font-size: 20px;
        margin: auto 10px;
        font-weight: initial;
      }
    }
    .content {
      flex-grow: 1;
    }
    .foot {
      height: 50px;
      width: 100%;
      display: flex;
      p {
        font-size: 10px;
        color: #888;
        margin: auto;
        a {
          color: #888;
        }
      }
    }
  }

</style>
