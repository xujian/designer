import './styles/quasar.styl'
import '@quasar/extras/material-icons/material-icons.css'

import {
  Quasar,
  QLayout,
  QHeader,
  QFooter,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QBtnGroup,
  QBtnDropdown,
  QIcon,
  QInput,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QScrollArea
} from 'quasar'

const install = (Vue, options) => {
  Vue.use(Quasar, {
    components: {
      QLayout,
      QFooter,
      QHeader,
      QDrawer,
      QPageContainer,
      QPage,
      QToolbar,
      QToolbarTitle,
      QBtnDropdown,
      QBtnGroup,
      QBtn,
      QIcon,
      QInput,
      QList,
      QItem,
      QItemSection,
      QItemLabel,
      QScrollArea
    },
    directives: {
    },
    plugins: {
    }
  })
}

export { install }
