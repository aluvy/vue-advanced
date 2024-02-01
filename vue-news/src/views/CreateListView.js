import ListView from './ListView.vue';
import EventBus from '../utils/EventBus.js';

// high order component
export default function createListView(name) {
  return {
    // 재사용 할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    name: name,
    mounted() {
      console.log('high order component');
      EventBus.$emit('end:spinner');
    },
    // render() 로 컴포넌트를 로딩한다.
    render(createElement) {
      return createElement(ListView);
    },
  };
}
