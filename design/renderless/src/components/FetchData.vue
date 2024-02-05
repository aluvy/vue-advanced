<script>
import axios from 'axios'

export default {
  props: {
    url: String
  },
  data() {
    return {
      response: null,
      loading: true,
    }
  },
  created() {
    axios.get(this.url)
      .then( res => {
        this.response = res.data;
        this.loading = false;
      })
      .catch( e => {
        alert('[ERROR] fetching the data', e);
        console.log(e);
      })
  },
  // render : 컴포넌트를 그리는 것
  // 컴포넌트를 그릴 때 데이터만 넘겨주도록 한다
  render() {
    console.log(this);
    return this.$scopedSlots.default({
      response: this.response,
      loading: this.loading
    })
  }
}
</script>
