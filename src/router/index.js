import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'

import Projects from '@/components/projects'
import ProjectsHome from '@/components/projects/home'
import ProjectsTodoKit from '@/components/projects/todokit'
import ProjectsMiniappLGBT from '@/components/projects/miniapp-lgbt'
import ProjectsQAF from '@/components/projects/qaf'
import ProjectsPlayer from '@/components/projects/player'
import ProjectsYoumiao from '@/components/projects/miniapp-youmiao'

import NotFound from '@/components/notfound'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  // mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    { path: '/', name: 'Index', component: Index, meta: { title: 'Joe\'s' } },
    { path: '/projects',
      component: Projects,
      children: [
        { path: '', redirect: {name: 'ProjectsHome'} },
        { path: 'index', name: 'ProjectsHome', component: ProjectsHome },
        { path: 'todokit', name: 'ProjectsTodoKit', component: ProjectsTodoKit, meta: {title: 'TodoKit - Joe\'s projects.'} },
        { path: 'lgbt', name: 'ProjectsMiniappLGBT', component: ProjectsMiniappLGBT, meta: {title: '一息之间 - Joe\'s projects.'} },
        { path: 'qaf', name: 'ProjectsQAF', component: ProjectsQAF, meta: {title: '同志亦凡人 - Joe\'s projects.'} },
        { path: 'player', name: 'ProjectsPlayer', component: ProjectsPlayer, meta: {title: 'Players - Joe\'s projects.'} },
        { path: 'youmiao', name: 'ProjectsYoumiao', component: ProjectsYoumiao, meta: {title: 'Youmiao - Joe\'s projects.'} }
      ]
    },
    { path: '*', name: 'NotFound', component: NotFound }
  ]
})
