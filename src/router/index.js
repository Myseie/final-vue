import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import FizzBuzzView from '../views/FizzBuzzView.vue'
import TjView from '../views/TjView.vue'
import TictactoeView from '../views/TictactoeView.vue'
import CompanyPageView from '../views/CompanyPageView.vue'
import CompanyImageCodeView from '../views/CompanyImageCodeView.vue'
import CompanyImageResView from '../views/CompanyImageResView.vue'
import RecipeListView from '../views/RecipeListView.vue'
import RecipeListSqlView from '../views/RecipeListSqlView.vue'
import BloggSQLView from '@/views/BloggSQLView.vue'
import BloggSQLCodeView from '@/views/BloggSQLCodeView.vue'
import BloggSQLResView from '@/views/BloggSQLResView.vue'
import TJSQLView from '@/views/TJSQLView.vue'
import TJSQLCode from '@/views/TJSQLCodeView.vue'
import TJSQLRes from '@/views/TJSQLResView.vue'
import RecipeAPI from '@/views/RecipeAPIView.vue'
import BloggAPIMongoView from '@/views/BloggAPIMongoView.vue'
import ResturantView from '@/views/ResturantView.vue'
import ResturantCode from '@/views/ResturantCode.vue'
import ResturantRes from '@/views/ResturantRes.vue'
import TodoView from '@/views/TodoView.vue'
import ShopView from '@/views/ShopView.vue'
import ShopCodeView from '@/views/ShopCodeView.vue'
import ShopResView from '@/views/ShopResView.vue'
import BooksAndLoansView from '@/views/BooksAndLoansView.vue'
import BloggAPISQLView from '@/views/BloggAPISQLView.vue'
import BloggFrontAndBack from '@/views/BloggFrontAndBack.vue'
import BloggFABCodeView from '@/views/BloggFABCodeView.vue'
import BloggFABResView from '@/views/BloggFABResView.vue'
import TodoAPIAndVueView from '@/views/TodoAPIAndVueView.vue'
import TodoAAVCodeView from '@/views/TodoAAVCodeView.vue'
import TodoAAVResView from '@/views/TodoAAVResView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/fizzbuzz',
    name: 'fizzbuzz',
    component:FizzBuzzView
  },
  {
    path:'/tj',
    name: 'tj',
    component:TjView
  },
  {
    path:'/tictactoe',
    name:'tictactoe',
    component:TictactoeView
  },
  {
    path:'/companypage',
    name:'companypage',
    component: CompanyPageView
  },
  {
    path:'/companyimagecode',
    name:'companyimagecode',
    component:CompanyImageCodeView
  },
  {
    path:'/companyimageres',
    name:'companyimageres',
    component:CompanyImageResView
  },
  {
    path:'/recipelist',
    name:'recipelist',
    component:RecipeListView
  },
  {
    path:'/recipelistsql',
    name:'recipelistsql',
    component:RecipeListSqlView
  },
  {
    path:'/bloggsql',
    name:'bloggsql',
    component:BloggSQLView
  },
  {
    path:'/bloggsqlcode',
    name:'bloggsqlcode',
    component:BloggSQLCodeView
  },
  {
    path:'/bloggsqlres',
    name:'bloggsqlres',
    component:BloggSQLResView
  },
  {
    path:'/tjsql',
    name:'tjsql',
    component: TJSQLView
  },
  {
    path:'/tjsqlcode',
    name:'tjsqlcode',
    component:TJSQLCode
  },
  {
    path:'/tjsqlres',
    name:'tjsqlres',
    component:TJSQLRes
  },
  {
    path:'/recipeapi',
    name:'recipeapi',
    component:RecipeAPI
  },
  {
    path:'/bloggapimongo',
    name:'bloggapimongo',
    component:BloggAPIMongoView
  },
  {
    path:'/resturant',
    name:'resturant',
    component:ResturantView
  },
  {
    path:'/resturantcode',
    name:'resturantcode',
    component:ResturantCode
  },
  {
    path:'/resturantres',
    name:'resturantres',
    component:ResturantRes
  },
  {
    path:'/todovue',
    name:'todovue',
    component:TodoView
  },
  {
    path:'/shopvue',
    name:'shopvue',
    component:ShopView
  },
  {
    path:'/shopcode',
    name:'shopcode',
    component:ShopCodeView
  },
  {
    path:'/shopres',
    name:'shopres',
    component:ShopResView
  },
  {
    path:'/booksandloans',
    name:'booksandloans',
    component:BooksAndLoansView
  },
  {
    path:'/bloggapisql',
    name:'bloggapisql',
    component:BloggAPISQLView
  },
  {
    path:'/bloggfrontandback',
    name:'bloggfrontandback',
    component:BloggFrontAndBack

  },
  {
    path:'/bloggfabcode',
    name:'bloggfabcode',
    component:BloggFABCodeView
  },
  {
    path:'/bloggfabres',
    name:'bloggfabres',
    component: BloggFABResView
  },
  {
    path:'/todoapiandvue',
    name:'todoapiandvue',
    component:TodoAPIAndVueView
  },
  {
    path:'/todoaavcode',
    name:'todoaavcode',
    component:TodoAAVCodeView
  },
  {
    path:'/todoaavres',
    name:'todoaavres',
    component:TodoAAVResView
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
