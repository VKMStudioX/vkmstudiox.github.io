import VueWriter from "vue-writer";
import type { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.use(VueWriter)
}
