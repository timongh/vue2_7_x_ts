import { defineComponent } from 'vue'

defineComponent({
  data() {
    return {
      data1: this.method1(),
    }
  },
  methods: {
    method1(): number {
      return 1
    }
  }
})
