<template>
  <div id="su-home">
    <div class="input">
      <div class="form">
        <div class="i">
          <input type="text" placeholder="Input full URL here, like: https://www.google.com" v-model="urlFull"/>
        </div>
        <div class="b">
          <button @click="getUrlShort()">Make Short</button>
        </div>
      </div>
    </div>
    <div class="result">
      <p v-show="showRes">Your short url: <a :href="urlShort" target="_blank">{{ urlShort }}</a></p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        showRes: false,
        urlFull: '',
        urlShort: ''
      }
    },
    methods: {
      getUrlShort() {
        let self = this;
        let matcher = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
        if (!matcher.test(self.urlFull)) {
          alert("Illegal URL");
          return;
        }
        axios.post(window.config.serverAddress + '/', {'url': self.urlFull})
          .then(function (response) {
            self.urlShort = response.data.short_url;
            self.showRes = true;
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  };
</script>

<style lang="scss">
  #su-home {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .input {
      flex-grow: 1;
      display: flex;
      .form {
        margin: auto;
        div {
          float: left;
        }
        input {
          width: 400px;
          height: 30px;
          padding: 0 0 0 5px;
          border: 1px solid #dadada;
          border-right: 0;
          border-radius: 0; // For IOS
        }
        input:focus {
          outline-offset: 0;
          outline: none;
        }
        button {
          height: 32px;
          background-color: #fff;
          border: 1px solid #dadada;
          margin: 0; // For Safari
        }
        button:focus {
          outline-offset: 0;
          outline: none;
        }
      }
    }
    .result {
      flex-grow: 1;
      text-align: center;
    }
  }

  @media screen and (max-width: 1000px) {
    #su-home {
      .input {
        .form {
          display: flex;
          justify-content: space-between;
          width: 90%;
          margin: auto;
          .i {
            flex-grow: 2;
            input {
              width: 100%;
            }
          }
          .b {
            button {
              width: 100px;
            }
          }
        }
      }
    }
  }
</style>
