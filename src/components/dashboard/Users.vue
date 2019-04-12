<template>
  <div id="users">
    <h1>Admin Users</h1>
    <div class="line"></div>

    <div class="options margins">
      <div class="card table-responsive">
    <div class="card-body">

        <!-- Grid row -->
        <div class="row">

            <!-- Grid column -->
            <div class="col-md-12 mt-4">

              <div class="input-group">
                <span class="input-group-btn">
                  <button class="btn btn-default" type="button"><i class="fas fa-search"></i></button>
                </span>
                <input type="text" class="form-control" placeholder="Search user">
              </div>

            </div>
            <!-- Grid column -->

        </div>
        <!-- Grid row -->

        <!--Table-->
        <table class="table table-striped">

            <!--Table head-->
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nickname</th>
                    <th>GroupId</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <!--Table head-->

            <!--Table body-->
            <tbody>
                <tr v-for="(user,index) in users" :class="{notSee: setClass(index)}">
                    <td>{{index}}</td>
                    <td>{{user.name}}</td>
                    <td>Otto</td>
                    <td style="display:flex;"><button class="btn btn-info"><i class="fas fa-info"></i></button><button class="btn btn-danger"><i class="far fa-trash-alt"></i></button></td>
                </tr>
            </tbody>
            <!--Table body-->
        </table>
        <!--Table-->
        <ul class="pagination" style="float:right;">
          <li class="" :class="{disabled: selected == 1}"><a>&laquo;</a></li>
          <li class="" v-for="page in count" :class="{active: page == selected}" @click="setSelector(page)"><a>{{page}}<span class="sr-only">(current)</span></a></li>
          <li :class="{disabled: selected == count}"><a>&raquo;</a></li>
        </ul>
    </div>
</div>
  <h2>Selected User</h2>
<div class="row">

  <div class="img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxHMZ61_YBq_vUIGkG7MHRA9cSztvgRAMIdGu-i9b0RFb4zLDa_g"/></div>
  <h3 class="text-center" style="margin-bottom:50px;">{{userInfo.rank + ' ' + userInfo.nick}}</h3>
   <div class="col-xs-12 col-sm-6 col-sm-offset-3">
     <div class="col-xs-12">
       <h3 class="text-center" style="margin-bottom:40px;">GENERAL INFO</h3>
       <div class="general">
         <div class="row lista">
           <div class="col-xs-2">
             <i class="fas fa-envelope fa-2x"></i>
           </div>
           <div class="col-xs-10">
             <h4 style="margin-bottom:4px;">EMAIL</h4>
             <h4><b>{{userInfo.email}}</b></h4>
           </div>
         </div>
         <div class="row lista">
           <div class="col-xs-2">
             <i class="fas fa-shield-alt fa-2x"></i>
           </div>
           <div class="col-xs-10">
             <h4 style="margin-bottom:4px;">ACCOUNT STATUS</h4>
             <h4><b>{{userInfo.accountStatus}}</b></h4>
           </div>
         </div>
         <div class="row lista">
           <div class="col-xs-2">
             <i class="fas fa-users fa-2x"></i>
           </div>
           <div class="col-xs-10">
             <h4 style="margin-bottom:4px;">CLAN</h4>
             <h4><b>{{userInfo.clan}}</b></h4>
           </div>
         </div>
         <div class="row lista">
           <div class="col-xs-2">
             <i class="fab fa-discord fa-2x"></i>
           </div>
           <div class="col-xs-10">
             <h4 style="margin-bottom:4px;">DISCORD</h4>
             <h4><b>{{userInfo.discord}}</b></h4>
           </div>
         </div>
         <div class="row lista">
           <div class="col-xs-2">
             <i class="fas fa-server fa-2x"></i>
           </div>
           <div class="col-xs-10">
             <h4 style="margin-bottom:4px;">SERVET TOKEN STATUS</h4>
             <h4><b>{{userInfo.serverToken.status}}</b></h4>
           </div>
         </div>
       </div>
     </div>
     <div class="actions">
       <h3>Actions</h3>
       <button class="btn btn-primary">Ban/Unban</button><button class="btn btn-primary">Ban Token/Unban</button><button class="btn btn-primary">Delete</button>
     </div>

  </div>
</div>
    </div>

    <div class="view">

    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return{
      maxWidth: '',
      profileOptions: [
        {link:'', name: 'SETTINGS'},
        {link:'', name: 'TICKETS'},
        {link:'', name: 'SEND TICKET'},
      ],
      userInfo: {
        email: 'wojtas1146@gmail.com',
        nick: 'Spray',
        rank: 'DEV',
        accountStatus: 'none',
        serverToken: {
          token: 'add23131fdsfdsa',
          status: 'none'
        },
        clan: 'unavaiable',
        discord: 'unavaiable'
      },
      users:[
        {name:'1', groupId: 1},
        {name:'2', groupId: 1},
        {name:'3', groupId: 1},
        {name:'4', groupId: 1},
        {name:'5', groupId: 1},
        {name:'6', groupId: 1},
        {name:'7', groupId: 1},
        {name:'8', groupId: 1},
        {name:'9', groupId: 1},
        {name:'10', groupId: 1},
        {name:'11', groupId: 1},
        {name:'12', groupId: 1},
        {name:'13', groupId: 1},
        {name:'14', groupId: 1},
        {name:'15', groupId: 1},
        {name:'16', groupId: 1},
        {name:'17', groupId: 1},
        {name:'18', groupId: 1},
        {name:'19', groupId: 1},
        {name:'20', groupId: 1},
        {name:'21', groupId: 1},
        {name:'22', groupId: 1},
        {name:'23', groupId: 1},
      ],
      maxCount: 10,
      selected: 1,
      count: 0
    }
  },
  methods: {
    setClass: function(index){
      if(index + 1 <= parseInt(`${this.selected}0`) )
      {
        console.log(index + 1 +' zakres ' + parseInt(`${this.selected}0`) + ' zwracam false');
        return false
      } else {
        console.log(index + 1 +' zakres ' + parseInt(`${this.selected}0`) + ' zwracam true');
        return true;
      }
    },
    fetchData: function(){
        let count = 0;

        for(var i = 0; i<this.users.length; i++)
        {
          if(i % 10 == 0 && i != 0)
          {
            count++;
          }

        }
        return count;
    },
    setSelector: function(number){
      this.selected = number;
    }
  },
  mounted(){
    this.count = this.fetchData();
  }
}
</script>

<style scoped>
#users h1{ margin-left: 3%; margin-top:3%;}
.margins{ margin-left: 3% !important; margin-right: 3% !important;}
.line{border-top: 1px solid black; width: 94%; margin: 0 auto; margin-bottom: 3%;}
.options ul{list-style: none;}
.options ul li{display: inline; margin-right: 10px;}
.options ul li:last-child{margin-right: 0px;}
.input-group.md-form.form-sm.form-2 input {
    border: 1px solid #bdbdbd;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
}
.input-group.md-form.form-sm.form-2 input.grey-border  {
    border: 1px solid #e9ecef;
}
.input-group input[type=text]:focus:not([readonly]) {
    box-shadow: none;
}
.form-2 .input-group-text {
    border: 1px solid #e9ecef;
}

tr button{margin-right: 10px;}

.img {height: 150px; width: 150px; margin: 0 auto; margin-top: 50px; border-radius: 50%; position: relative; text-align: center;}
.img img{width: 100%; height: 100%; border:2px solid black; border-radius: 50%;}
.lista h4{margin: 0;}
.lista {margin-bottom: 30px;}
.actions button{margin-right: 10px;}
.actions h3{margin-bottom: 30px;}
.actions {margin-bottom: 30px;}
.see{display: table-row;}
.notSee{display: none;}
</style>
