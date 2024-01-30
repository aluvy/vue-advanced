import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItemView } from '../api/index';

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(({ data }) => context.commit('SET_NEWS', data))
      .catch((e) => console.log(e));
  },
  FETCH_JOBS(context) {
    fetchJobsList()
      .then((res) => context.commit('SET_JOBS', res.data))
      .catch((e) => console.log(e));
  },
  FETCH_ASK(context) {
    fetchAskList()
      .then((res) => context.commit('SET_ASK', res.data))
      .catch((e) => console.log(e));
  },
  FETCH_USER(context, user) {
    fetchUserInfo(user)
      .then(({ data }) => {
        context.commit('SET_USER', data);
      })
      .catch((e) => console.log(e));
  },
  FETCH_ITEM(context, id) {
    fetchItemView(id)
      .then(({ data }) => {
        context.commit('SET_ITEM', data);
      })
      .catch((e) => console.log(e));
  },
};
