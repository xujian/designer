import { Vue, Component, Watch } from 'vue-property-decorator'
import Prop from '../../../core/models/Prop'

@Component({
  props: {
    value: Prop
  },
  template: ''
})
export default class PropInput extends Vue {
  
  get prop () {
    return this.value
  }

  emitChange (payload: any) {
    this.$emit('change', payload)
  }
}