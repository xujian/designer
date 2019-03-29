import { Vue, Component, Watch } from 'vue-property-decorator'
import Prop from '../../../core/models/Prop'

@Component({
  props: {
    value: Prop
  },
  template: ''
})
export default class PropInput extends Vue {
  
  private __prop = this.value

  get prop () {
    return this.value
  }

  set prop (v) {
    console.log('PropInput<><>><><><><><><><>',)
    this.__prop = v
  }

  emitChange (data: any) {
    this.$emit('change', data)
  }
}