<template>
  <div class="app-container home">
    <el-row :gutter="20">
      <el-col :sm="24" :lg="12" style="padding-left: 20px">
          <h1>
            饮茶时光 / TeaTime
            <br />
              <h1>
                泡杯茶,休息一下吧🍵
              </h1>
          </h1>
      </el-col>
      <el-col :sm="24" :lg="12" style="padding-left: 50px">
          <p>
            这是一个面向个人生活使用的网站,打开它看视频,听音乐,下下资源
          </p>
          <p>
            的确, 现在很多app都可以实现功能,付费的话还可以得到更好的体验
          </p>
          <p>
            但是我还是想自己把很多功能实现,简约化,保留核心功能,将它集成在一起,打造一个属于自己的个人生活系统
          </p>
          <p>
            未来也许会开发微信小程序,这样也方便
          </p>
      </el-col>
    </el-row>
    <el-divider />
    <el-row :gutter="20">
      <el-col :sm="24" :lg="12" style="padding-left: 20px">
        <h2>
          后端: Flask / JWT验证 / 没有使用ORM(基于psycopg2的封装访问模块) / celery
        </h2>
        <h3>
          前端: 若依管理系统(VUE3) / ElementUI
        </h3>
      </el-col>
    </el-row>
  </div>
</template>

<script setup name="Index">
const version = ref('3.8.7')

function goTarget(url) {
  window.open(url, '__blank')
}
</script>

<style scoped lang="scss">
.home {
  blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
  .col-item {
    margin-bottom: 20px;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #676a6c;
  overflow-x: hidden;

  ul {
    list-style-type: none;
  }

  h4 {
    margin-top: 0px;
  }

  h2 {
    margin-top: 10px;
    font-size: 26px;
    font-weight: 100;
  }

  p {
    margin-top: 10px;

    b {
      font-weight: 700;
    }
  }

  .update-log {
    ol {
      display: block;
      list-style-type: decimal;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding-inline-start: 40px;
    }
  }
}
</style>

