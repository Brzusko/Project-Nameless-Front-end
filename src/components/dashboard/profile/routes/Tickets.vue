<template>
  <div id="tickets">
    <div class="header">
      <h2>TIckets</h2>
      <div class="span5">
            <table class="table table-striped table-condensed">
                  <thead>
                  <tr>
                      <th>Ticket's Topic</th>
                      <th>Date Created</th>
                      <th>Status</th>
                  </tr>
              </thead>
              <tbody>
                <tr v-for="n in 5">
                    <td>Problem with server</td>
                    <td>2018/05/06</td>
                    <td><span class="label label-success">Solved</span>
                    </td>
                </tr>
              </tbody>
            </table>
            </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return{
    }
  },
}
</script>

<style scoped>
#tickets{margin-top:30px; margin-left: 3%; margin-right: 3%;}
h2 {
    overflow: hidden;
}
tr{cursor: pointer;}
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
</style>
