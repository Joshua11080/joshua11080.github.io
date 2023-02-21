<template>
  <div class="home">
    <el-row id="artList" type="flex" justify="space-around">
      <el-col :span="16">
        <el-row class="art-item">
          <el-card shadow="hover">
            <h5><router-link to="/article/1" tag="span" class="art-title">鼠标悬浮时显示</router-link></h5>
            <el-row class="art-info d-flex align-items-center justify-content-start">
              <div class="art-time"><i class="el-icon-time" />：2019-03-24</div>
              <div class="d-flex align-items-center"><img class="tag" src="../assets/tag.png">：
                <el-tag size="mini">swagger2</el-tag>
              </div>
            </el-row>
            <el-row class="art-body">
              <div class="side-img hidden-sm-and-down"><img class="art-banner" src="../assets/vue.jpg"></div>
              <div class="side-abstract">
                <div class="art-abstract">
                  Iconfont-国内功能很强大且图标内容很丰富的矢量图标库, 提供矢量图标下载、在快照 在小程序中使用阿里文字图标在小程序中使用阿里文字图标库前在小程序中使用阿里文字图标库前库前端开发的便捷工具 - AndrewNeo - CSDN博客
                </div>
                <div class="art-more">
                  <router-link to="/article/1" tag="span">
                    <el-button plain>{{ $t('home.readMore') }}</el-button>
                  </router-link>
                  <div class="view"><i class="el-icon-view" />12414</div>
                </div>
              </div>
            </el-row>
          </el-card>
          <img class="star" src="../assets/star.png">
        </el-row>
        <el-row class="art-item">
          <el-card shadow="hover">
            <h5><router-link to="/article/1" tag="span" class="art-title">鼠标悬浮时显示</router-link></h5>
            <el-row class="art-info d-flex align-items-center justify-content-start">
              <div class="art-time"><i class="el-icon-time" />：2019-03-24</div>
              <div class="d-flex align-items-center"><img class="tag" src="../assets/tag.png">：
                <el-tag size="mini">swagger2</el-tag>
              </div>
            </el-row>
            <el-row class="art-body">
              <div class="side-img hidden-sm-and-down"><img class="art-banner" src="../assets/vue.jpg"></div>
              <div class="side-abstract">
                <div class="art-abstract">
                  Iconfont-国内功能很强大且图标内容很丰富的矢量图标库, 提供矢量图标下载、在快照 在小程序中使用阿里文字图标在小程序中使用阿里文字图标库前在小程序中使用阿里文字图标库前库前端开发的便捷工具 - AndrewNeo - CSDN博客
                </div>
                <div class="art-more">
                  <router-link to="/article/1" tag="span">
                    <el-button plain>{{ $t('home.readMore') }}</el-button>
                  </router-link>
                  <div class="view"><i class="el-icon-view" />12414</div>
                </div>
              </div>
            </el-row>
          </el-card>
          <img class="star" src="../assets/star.png">
        </el-row>
        <el-row class="art-item">
          <el-card shadow="hover">
            <h5><router-link to="/article/1" tag="span" class="art-title">鼠标悬浮时显示</router-link></h5>
            <el-row class="art-info d-flex align-items-center justify-content-start">
              <div class="art-time"><i class="el-icon-time" />：2019-03-24</div>
              <div class="d-flex align-items-center"><img class="tag" src="../assets/tag.png">：
                <el-tag size="mini">swagger2</el-tag>
              </div>
            </el-row>
            <el-row class="art-body">
              <div class="side-img hidden-sm-and-down"><img class="art-banner" src="../assets/vue.jpg"></div>
              <div class="side-abstract">
                <div class="art-abstract">
                  Iconfont-国内功能很强大且图标内容很丰富的矢量图标库, 提供矢量图标下载、在快照 在小程序中使用阿里文字图标在小程序中使用阿里文字图标库前在小程序中使用阿里文字图标库前库前端开发的便捷工具 - AndrewNeo - CSDN博客
                </div>
                <div class="art-more">
                  <router-link to="/article/1" tag="span">
                    <el-button plain>{{ $t('home.readMore') }}</el-button>
                  </router-link>
                  <div class="view"><i class="el-icon-view" />12414</div>
                </div>
              </div>
            </el-row>
          </el-card>
          <img class="star" src="../assets/star.png">
        </el-row>
        <el-row class="art-item">
          <el-card shadow="hover">
            <h5><router-link to="/article/1" tag="span" class="art-title">鼠标悬浮时显示</router-link></h5>
            <el-row class="art-info d-flex align-items-center justify-content-start">
              <div class="art-time"><i class="el-icon-time" />：2019-03-24</div>
              <div class="d-flex align-items-center"><img class="tag" src="../assets/tag.png">：
                <el-tag size="mini">swagger2</el-tag>
              </div>
            </el-row>
            <el-row class="art-body">
              <div class="side-img hidden-sm-and-down"><img class="art-banner" src="../assets/vue.jpg"></div>
              <div class="side-abstract">
                <div class="art-abstract">
                  Iconfont-国内功能很强大且图标内容很丰富的矢量图标库, 提供矢量图标下载、在快照 在小程序中使用阿里文字图标在小程序中使用阿里文字图标库前在小程序中使用阿里文字图标库前库前端开发的便捷工具 - AndrewNeo - CSDN博客
                </div>
                <div class="art-more">
                  <router-link to="/article/1" tag="span">
                    <el-button plain>{{ $t('home.readMore') }}</el-button>
                  </router-link>
                  <div class="view"><i class="el-icon-view" />12414</div>
                </div>
              </div>
            </el-row>
          </el-card>
          <img class="star" src="../assets/star.png">
        </el-row>
        <div class="block pagination">
          <el-pagination background="#f9f9f9" layout="prev, pager, next" :total="50" />
        </div>
      </el-col>
      <el-col id="side" :span="6" class="hidden-sm-and-down">
        <div class="item">
          <tag />
        </div>
        <div class="item">
          <friend />
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import friend from '../components/friend'
import tag from '../components/tag'

export default {
  name: 'Index',
  components: {
    friend,
    tag
  },
  data() {
    return {
      artList: [],
      queryParam: {
        pagesize: 10,
        pagenum: 1
      },
      currentPage: 1,
      count: 0,
      total: 0
    }
  },
  mounted() {
    this.getArtList()
  },
  methods: {
    handleCurrentChange: function(currentPage) {
      this.queryParam.pagenum = currentPage
      // eslint-disable-next-line no-console
      console.log(this.currentPage) // 点击第几页
      this.getArtList()
    },
    // 获取文章列表
    async getArtList() {
      const { data: res } = await this.$http.get('article', {
        params: {
          pagesize: this.queryParam.pagesize,
          pagenum: this.queryParam.pagenum
        }
      })
      this.artList = res.data
      this.total = res.total
      // eslint-disable-next-line no-console
      console.log(this.artList)
    }
  }
}
</script>

<style scoped>
#side .item {
  margin-bottom: 30px;
}

.art-item {
  margin-bottom: 30px;
  position: relative;
}

.art-item .star {
  width: 60px;
  height: 60px;
  position: absolute;
  top: 0;
  right: 0;
}

img.tag {
  width: 16px;
  height: 16px;
}

.art-title {
  border-left: 3px solid #F56C6C;
  padding-left: 5px;
  cursor: pointer;
}

.art-title:hover {
  padding-left: 10px;
  color: #409EFF;
}

.art-time {
  margin-right: 20px;
}

.art-body {
  display: flex;
  padding: 10px 0;
}

.side-img {
  height: 150px;
  width: 270px;
  overflow: hidden;
  margin-right: 10px;
}

img.art-banner {
  width: 100%;
  height: 100%;
  transition: all 0.6s;
}

img.art-banner:hover {
  transform: scale(1.4);
}

.side-abstract {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.art-abstract {
  flex: 1;
  color: #aaa;
}

.art-more {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.art-more .view {
  color: #aaa;
}
h5{
  font-size: 18px;
}
.pagination {
  background-color: #F9F9F9;
}
</style>
