<template>
  <div class="cssnj">
<!--    <div>提交成功</div>-->


    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="return" @click="returnPortal">
        返回首页
      </van-button>
    </div>
  </div>
</template>

<script>
import {
  Calendar,
  Field,
  CellGroup,
  Cell,
  Form,
  Picker,
  Button,
  Cascader ,
  Popup  ,
  Toast
} from 'vant';


export default {
  components: {
    [Calendar.name]: Calendar,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [Cell.name]: Cell,
    [Form.name]: Form,
    [Picker.name]: Picker,
    [Button.name]: Button,
    [Cascader .name]: Cascader ,
    [Field  .name]: Field  ,
    [Popup  .name]: Popup  ,
    [Toast.name]: Toast
  },

  data() {
    return {
    }
  },
  methods: {
    returnPortal() {

      this.$router.push('cwkj');
    },
  },
  setup() {
    Toast.success('提交成功!');
  },
};
</script>

<style lang="less">

</style>
