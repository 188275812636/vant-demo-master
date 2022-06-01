<template>
  <div class="cssnj">
    <van-form>
      <van-cell-group>
        <van-field v-model="nsrxx.nsrsbh" label="纳税人识别号：" readonly/>
        <van-field v-model="nsrxx.nsrmc" label="纳税人名称：" readonly/>
      </van-cell-group>
      <van-cell-group>
        <van-field label="有效期起：" is-link placeholder="选择有效期起" v-model="dateyxqq" @click="showyxqq = true" />
        <van-calendar  v-model:show="showyxqq" :min-date="minDate" @confirm="onConfirmyxqq" />
      </van-cell-group>
      <van-cell-group>
        <van-field  label="有效期止：" is-link placeholder="选择有效期止" v-model="dateyxqz" @click="showyxqz = true" />
        <van-calendar v-model:show="showyxqz" :min-date="minDate" @confirm="onConfirmyxqz" />
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="kjzdValue" is-link readonly label="会计制度名称" placeholder="请选择会计制度" @click="showkjzd = true"/>
        <van-popup v-model:show="showkjzd" round position="bottom">
          <van-cascader v-model="cascaderValuekjzd" title="请选择会计制度"  :options="kjoptions" @close="showkjzd = false" @finish="onFinishkjzd"/>
        </van-popup>
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="report.hjzdbz" label="会计制度备注" />
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="cwzdValue" is-link readonly label="财务制度" placeholder="请选择财务制度" @click="showcwzd = true"/>
        <van-popup v-model:show="showcwzd" round position="bottom">
          <van-cascader v-model="cascaderValuecwzd" title="请选择财务制度" :options="cwoptions" @close="showcwzd = false" @finish="onFinishcwzd"/>
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <div class="van-cell">
          <div class="van-cell__title">
            <span>财务会计核算、<br/>使用说明书附件:</span><!---->
          </div>
          <div class="van-cell__value">
            <van-uploader v-model="fileList" multiple accept="	image/*,.txt,.doc,.docx"/>
          </div>
        </div>

      </van-cell-group>
      <van-cell-group>
        <div class="van-cell">
          <div class="van-cell__title">
            <span>财务会计制度备案<br/>-会计报表情况</span><!---->
          </div>
          <div class="van-cell__value">
            <van-button type="primary" @click="onClickaddkjbg">添加</van-button>
          </div>
        </div>
      </van-cell-group>
      <van-cell-group v-for="(item, index) in list" :key="id">
        <input type="hidden" v-model="id">
        <van-field v-model="kjbbValue" is-link readonly label="会计报表名称" placeholder="请选择会计报表" @click="showkjbb = true"/>
        <van-popup v-model:show="showkjbb" round position="bottom">
          <van-cascader v-model="cascaderValuekjbb" title="请选择会计报表"  :options="kjbboptions" @close="showkjbb = false" @finish="onFinishkjbb"/>
        </van-popup>
      </van-cell-group>
    </van-form>



    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit" @click="onClicktj">
        提交
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
  Uploader    ,
  Toast
} from 'vant';

import { ref } from 'vue';

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
    [Cascader.name]: Cascader,
    [Field.name]: Field,
    [Popup.name]: Popup,
    [Uploader.name]: Uploader,
    [Toast.name]: Toast
  },

  data() {
    return {
      nsrxx: {
        nsrsbh: '91420281MA4F17HB04',
        nsrmc: '北京威特空间科技黄石分公司',
      },
      report:{
        hjzdbz:'',
      },
      list: [
      ]
    }
  },
  methods: {
    onClicktj() {
      this.$router.push('success');
    },
    onClickaddkjbg(){
      this.list.unshift({
        id: this.id,
        kjbbmc: this.kjbbmc,
        bssj: this.bssj,
        bsqx: this.bsqx,
        kjbblx: this.kjbblx,
        kjbbbz: this.kjbbbz,
        czlx: this.czlx,
      });
    }
  },
  setup() {
    //会计制度
    const showkjzd = ref(false);
    const kjzdValue = ref('');
    const cascaderValuekjzd = ref('');

    const kjoptions = [
      { text: '101企业会计准则', value: '101' },
      { text: '102小企业会计准则', value: '102' },
      { text: '222民间非盈利组织会计制度', value: '222' },
      { text: '237政府会计制度准则', value: '237' }
    ];
    const onFinishkjzd = ({ selectedOptions }) => {
      showkjzd.value = false;
      kjzdValue.value = selectedOptions.map((option) => option.text).join('/');
    };

    //财务制度
    const showcwzd = ref(false);
    const cwzdValue = ref('');
    const cascaderValuecwzd = ref('');
    const cwoptions = [
      { text: '01企业财务通则', value: '01' },
      { text: '02金融企业财务规定', value: '02' },
      { text: '07运输企业财务制度', value: '07' },
    ];
    const onFinishcwzd = ({ selectedOptions }) => {
      showcwzd.value = false;
      cwzdValue.value = selectedOptions.map((option) => option.text).join('/');
    };

    //日历显示年月
    const formatDate_month = (date) => `${date.getFullYear()}/${date.getMonth() + 1}`;

    const dateyxqq = ref('');
    const showyxqq = ref(false);

    const onConfirmyxqq = (value) => {
      showyxqq.value = false;
      dateyxqq.value = formatDate_month(value);
    };

    const dateyxqz = ref('');
    const showyxqz = ref(false);
    const onConfirmyxqz = (value) => {
      showyxqz.value = false;
      dateyxqz.value = formatDate_month(value);
    };

    //附件上传
    const fileList = ref([

    ]);

    //会计报表名称
    const showkjbb = ref(false);
    const kjbbValue = ref('');
    const cascaderValuekjbb = ref('');
    const kjbboptions = [
      { text: '01资产负债表', value: '01' },
      { text: '02利润表', value: '02' },
      { text: '03现金流量表', value: '03' },
    ];
    const onFinishkjbb = ({ selectedOptions }) => {
      showkjbb.value = false;
      kjbbValue.value = selectedOptions.map((option) => option.text).join('/');
    };
    return {
      showkjzd,
      kjoptions,
      onFinishcwzd,
      kjzdValue,
      cascaderValuekjzd,
      minDate: new Date(2010, 0, 1),
      dateyxqq,
      showyxqq,
      onConfirmyxqq,
      dateyxqz,
      showyxqz,
      onConfirmyxqz,
      showcwzd,
      cwoptions,
      onFinishkjzd,
      cwzdValue,
      cascaderValuecwzd,
      fileList,
      showkjbb,
      kjbboptions,
      onFinishkjbb,
      kjbbValue,
      cascaderValuekjbb,
    };
  },
};

</script>

<style lang="less">
.van-cell__title{
  width: 30% !important;
}
</style>
