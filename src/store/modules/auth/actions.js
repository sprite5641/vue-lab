
import VueCookies from 'vue-cookies'

export default {
  login(context, payload) {

    VueCookies.set('cookie_token',payload.data.accessToken)
    context.commit('auth', payload.data.accessToken)
      
  },
  logout(context, payload) {

    VueCookies.remove('cookie_token')
    context.commit('auth', payload)
      
  },
  auth(context, payload) {

    context.commit('auth', payload)
      
  },
};
