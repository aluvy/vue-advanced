import { fetchList, fetchUserInfo, fetchItemView } from '../api/index';

export default {
  // promise
  // FETCH_LIST(context, pageName) {
  //   return fetchList(pageName)
  //     .then(({ data }) => context.commit('SET_LIST', data))
  //     .catch((e) => console.log(e));
  // },

  // async
  // async 함수는 무조건 promise를 리턴한다.
  async FETCH_LIST(context, pageName) {
    const res = await fetchList(pageName);
    context.commit('SET_LIST', res.data);
    return res;
  },
  async FETCH_USER(context, user) {
    const res = await fetchUserInfo(user);
    context.commit('SET_USER', res.data);
    return res;
  },
  async FETCH_ITEM(context, id) {
    let res = await fetchItemView(id);
    context.commit('SET_ITEM', res.data);
    return res;
  },
};
