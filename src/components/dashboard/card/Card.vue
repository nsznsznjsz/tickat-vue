<template>
  <el-card shadow="hover" :body-style="{ padding: '0px' }">
    <!-- content -->
    <div :class="$style.content">
      <img :src="src" />
    </div>

    <!-- footer -->
    <div :class="$style.footer">
      <span>{{ card.content }}</span>
      <div :class="[$style.bottom, $style.clearfix]">
        <time>{{ card.createTime }}</time>
        <el-button type="text" :class="$style.button">开始</el-button>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Card from '@/models/Card.ts'

@Component
export default class AppCard extends Vue {
  @Prop({ type: Object, required: true }) card!: Card

  get src() {
    const image = this.card.image
    const protocol = image.startsWith('http://') || image.startsWith('https://')
    return protocol ? image : `${process.env.BASE_URL}${image}`
  }
}
</script>

<style lang="scss" module>
.content {
  img {
    width: 100%;
    display: block;
  }
}
.footer {
  padding: 14px;
  .bottom {
    margin-top: 13px;
    line-height: 12px;
    time {
      font-size: 13px;
      color: #999;
    }
    .button {
      padding: 0;
      float: right;
    }
  }
  .clearfix {
    &::before,
    &::after {
      display: table;
      content: '';
    }
    &::after {
      clear: both;
    }
  }
}
</style>
