import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/welcome/Welcome.vue'

import Play from '@/components/play/Play.vue'
import Blog from '@/components/blog/Blog.vue'
import BlogView from '@/components/blog/BlogView.vue'
import Native from '@/components/native/Native.vue'

import Panel from '@/components/signPanel/Panel.vue'
import Login from '@/components/signPanel/Login.vue'
import Register from '@/components/signPanel/Register.vue'

import Dashboard from '@/components/dashboard/Dashboard.vue'
import Profile from '@/components/dashboard/profile/Profile.vue'
import Settings from '@/components/dashboard/profile/routes/Settings.vue'
import Tickets from '@/components/dashboard/profile/routes/Tickets.vue'
import SendTicket from '@/components/dashboard/profile/routes/SendTicket.vue'
import Serverlist from '@/components/dashboard/servers/Serverlist.vue'
import Download from '@/components/dashboard/download/Download.vue'
import Launcher from '@/components/dashboard/download/Launcher.vue'
import AdminBlog from '@/components/dashboard/blog/AdminBlog.vue'
import BlogList from '@/components/dashboard/blog/BlogList.vue'
import BlogEdit from '@/components/dashboard/blog/BlogEdit.vue'
import BlogCreate from '@/components/dashboard/blog/BlogCreate.vue'
import AdminUser from '@/components/dashboard/Users.vue'
//playground routes
// import User from '@/components/playground/User.vue'
// import UserEdit from '@/components/playground/UserEdit.vue'
// import UserDetail from '@/components/playground/UserDetail.vue'
// import UserStart from '@/components/playground/UserStart.vue'
// import HomePlay from '@/components/playground/Router.vue'


Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'WelcomePage',
      component: Welcome
    },
    {
      path: '/play',
      name: 'Playground',
      component: Play
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {path: '/blog/view', name: 'BlogDetail', component: BlogView},
    {path: '/projects/native', name:'Native', component: Native},
    {path: '/panel', component:Panel, children: [
      {path:'', name: 'Login', component: Login},
      {path:'register', name: 'Register', component: Register}
    ]},
    {path: '/dashboard',  component: Dashboard, children:[
      {path: '',component: Profile, children:[
        {path: '', name:'Settings', component:Settings},
        {path: 'tickets',name:'Tickets',component:Tickets},
        {path: 'sendticket', name:'Send', component:SendTicket}
      ]},
      {path: 'serverlist', component:Serverlist, name:'Serverlist'},
      {path: 'download',component:Download, children:[
        {path: '', component: Launcher, name: 'Launcher'}
      ]},
      {path: 'blog', component:AdminBlog, children:[
        {path: '',component: BlogList, name:'BlogList'},
      ]},
      {path: '/dashboard/adminusers',component: AdminUser, name:'AdminUsers'}
    ]},
    {path: '/dashboard/blog/edit/:id',component: BlogEdit, name:'BlogEdit'},
    {path: '/dashboard/blog/create/',component: BlogCreate, name:'BlogCreate'},

    // {
    //   path: '*',
    //   redirect: '/'
    // }
    // {path: '/user', component: User, children: [
    //   {path: ':id/edit', name: 'UserEdit', component: UserEdit, name: 'userEdit'},
    //   {path: ':id', name: 'UserDetail', component: UserDetail},
    //   {path: '', name: 'UserStart', component: UserStart}
    // ]},
    {path: '*', redirect: '/'}
  ],
})
