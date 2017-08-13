import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import User from '@/components/User/User'
import UserDashboard from '@/components/User/UserDashboard'
import UserInfoMain from '@/components/User/UserInfoMain'
import UserInfoPersonal from '@/components/User/UserInfoPersonal'
import UserInfoAllergies from '@/components/User/UserInfoAllergies'
import UserInfoMedications from '@/components/User/UserInfoMedications'
import UserInfoMedicalHistory from '@/components/User/UserInfoMedicalHistory'
import UserInfoProcedures from '@/components/User/UserInfoProcedures'
import UserInfoFamilyHistory from '@/components/User/UserInfoFamilyHistory'
import UserInfoQuestions from '@/components/User/UserInfoQuestions'
import UserInfoPharmacy from '@/components/User/UserInfoPharmacy'
import UserInfoPayment from '@/components/User/UserInfoPayment'
import UserInfoDoctors from '@/components/User/UserInfoDoctors'
import UserInfoSettings from '@/components/User/UserInfoSettings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/user',
      component: User,
      children: [
        { path: '', component: UserDashboard },
        {
          name: 'userInfoMain',
          path: '/user/info',
          component: UserInfoMain,
          children: [
            { path: '/user/info/personal', component: UserInfoPersonal },
            { path: '/user/info/allergies', component: UserInfoAllergies },
            { path: '/user/info/medications', component: UserInfoMedications },
            { path: '/user/info/medical-history', component: UserInfoMedicalHistory },
            { path: '/user/info/procedures', component: UserInfoProcedures },
            { path: '/user/info/family-history', component: UserInfoFamilyHistory },
            { path: '/user/info/questions', component: UserInfoQuestions },
            { path: '/user/info/pharmacy', component: UserInfoPharmacy },
            { path: '/user/info/payment', component: UserInfoPayment },
            { path: '/user/info/doctors', component: UserInfoDoctors },
            { path: '/user/info/settings', component: UserInfoSettings },
          ]
        },
      ]
    }
  ]
})
