<template>
<div>
<v-card>
    <v-card-title>
      通讯录
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="查询"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
    :headers="headers"
    :items="projects"
    :items-per-page="10"
    class="elevation-1"
    :search="search"
  ></v-data-table>
  </v-card>
  <div class="text-center">
    <v-btn
      color="blue"
      dark
      @click="sheet = !sheet"
    >
      添加/更新我的联系方式
    </v-btn>
    <v-bottom-sheet v-model="sheet">
      <v-sheet class="text-center" height="365px">
        <!-- <v-btn
          class="mt-6"
          text
          color="red"
          @click="sheet = !sheet"
        >close</v-btn> -->
        <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="姓名"
      required
    ></v-text-field>

    <v-text-field
      v-model="connect"
      label="联系方式"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="类型"
      required
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <!-- <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn> -->
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="submit"
    >
      提交
    </v-btn>
    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      清空表单
    </v-btn>

    <!-- <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn> -->
  </v-form>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</div>
</template>

<style>

</style>

<script>
  export default {
    name: 'projects',
    components: {
    },
    data() {
      return {
        search: '',
        projects: [],
      page: 1,
      sheet: false,
      tiles: [
        { img: 'keep.png', title: 'Keep' },
        { img: 'inbox.png', title: 'Inbox' },
        { img: 'hangouts.png', title: 'Hangouts' },
        { img: 'messenger.png', title: 'Messenger' },
        { img: 'google.png', title: 'Google+' },
      ],
       headers: [
          {
            text: '序号',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: '姓名', value: 'name' },
          { text: '联系方式', value: 'connect' },
          { text: '更新时间', value: 'updatetime' },
          { text: '是否有效', value: 'iseffective' },
        ],
         valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      connect: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        '电话',
        'QQ',
        '微信',
      ],
      checkbox: false,
      //projects: []
      }
    },
    created() {
      this.$http.get('http://121.4.138.96/home/getconnects',{}).then((response) => {
                console.log(response);
                this.projects = response.data
      });
    },
    methods: {
      sortBy(prop) {
        this.projects.sort((a,b) => a[prop] < b[prop] ? -1:1)
      },
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      submit(){
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var Hours = date.getHours();
        var Minutes = date.getMinutes();
        var Seconds = date.getSeconds();
        if (month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }
        var s_createtime = year + '-' + month + '-' + day + ' ' + Hours + ':' + Minutes + ':' + Seconds;
        this.$http.post('http://121.4.138.96/home/addconnect','name='+this.name + "&" + "connect=" + this.connect + '&' + "updatetime=" + s_createtime + "&" + "iseffective=" + "有效").then((response) => {
                console.log(response.data[0]);
                this.state = response.data[0]
      });
      this.$http.get('http://121.4.138.96/home/getconnects',{}).then((response) => {
                console.log(response);
                this.projects = response.data
      });
      }
    }
  }
</script>