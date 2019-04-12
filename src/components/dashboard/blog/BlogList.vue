<template>
  <div class="launcher">
    <div class="container-fluid margins">
      <div class="row">
        <div class="header" style="margin-bottom:50px;">
          <h2>Blog List</h2>
        </div>
        <div class="col-md-12">
            <div class="panel panel-default panel-table">
              <div class="panel-body table-responsive">
                <table class="table table-striped table-bordered table-list">
                  <thead>
                    <tr>

                        <th class="hidden-xs">ID</th>
                        <th>Title</th>
                        <th>Created by</th>
                        <th><em class="fa fa-cog"></em></th>
                    </tr>
                  </thead>
                  <tbody>
                          <tr v-for="(news,index) in fakeNews">
                            <td class="hidden-xs">{{news._id}}</td>
                            <td>{{news.title}}</td>
                            <td>{{news.createdBy}}</td>
                            <td align="center" style="display:flex; color:white;">
                              <a class="btn btn-default" @click="fetchDataToStore(index)"><em class="fas fa-edit"></em></a>
                              <a class="btn btn-danger"><em class="fa fa-trash"></em></a>
                            </td>
                          </tr>
                        </tbody>
                </table>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>


<script>
import {mapGetters,mapActions} from 'vuex'

export default {
  name: 'app',
  data(){
    return{
      fakeNews:[
        {_id:'2313sadsad213',title: 'Dupa jasia',createdBy:'Dupa'},
        {_id:'2313sadsad2131',title: 'Dupa Ani',createdBy:'Pizdon'},
        {_id:'2313sadsad213132',title: 'Dupa Cwela',createdBy:'Cwel'},
      ],
      selectedData: {}
    }
  },
  computed:{
    ...mapGetters([
      'getBlogInfo',
      'getBlogObject'
    ]),
    getData: function(){
      return this.selectedData
    }
  },
  methods:{
    ...mapActions([
      'setBlogInfoData',
      'setFullBlogData',
      'wipeBlogInfo'
    ]),
    fetchDataToStore: function(index){
      this.setBlogInfoData(this.fakeNews[index]);
      setTimeout(()=>{
        this.selectedData = this.getBlogInfo;
        this.$router.push({name:'BlogEdit',params:{id:this.selectedData._id}, query:{title:this.selectedData.title}});
        console.log(this.selectedData)
      },100);
    },
    openEditor: function(){}
  }
}
</script>


<style scoped>
.margins{ margin-left: 3% !important; margin-right: 3% !important;}
h2 {
    overflow: hidden;
}

h2:after {
    content:"";
    display: inline-block;
    height: 0.5em;
    vertical-align: bottom;
    width: 100%;
    margin-right: -100%;
    margin-left: 10px;
    border-top: 1px solid black;
}
.container-fluid{margin: 0; padding: 0;}

.panel-table .panel-body{
  padding:0;
}

.panel-table .panel-body .table-bordered{
  border-style: none;
  margin:0;
}

.panel-table .panel-body .table-bordered > thead > tr > th:last-of-type {
    text-align:center;
    width: 100px;
}

.panel-table .panel-body .table-bordered > thead > tr > th:last-of-type,
.panel-table .panel-body .table-bordered > tbody > tr > td:last-of-type {
  border-right: 0px;
}

.panel-table .panel-body .table-bordered > thead > tr > th:first-of-type,
.panel-table .panel-body .table-bordered > tbody > tr > td:first-of-type {
  border-left: 0px;
}

.panel-table .panel-body .table-bordered > tbody > tr:first-of-type > td{
  border-bottom: 0px;
}

.panel-table .panel-body .table-bordered > thead > tr:first-of-type > th{
  border-top: 0px;
}

</style>
