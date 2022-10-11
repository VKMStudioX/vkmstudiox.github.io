import 'swiper.css'
// import 'swiper-effect-fade.css'
import 'swiper-navigation.css'
import 'swiper-pagination.css'
import 'swiper-scrollbar.css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.component('Swiper', Swiper).component('SwiperSlide', SwiperSlide)
}
