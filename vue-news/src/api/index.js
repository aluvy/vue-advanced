import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
};

// 2. API 함수들을 정리
// const fetchNewsList = function () {
//   return axios.get(`${config.baseUrl}news/1.json`);
// };

// const fetchJobsList = function () {
//   return axios.get(`${config.baseUrl}jobs/1.json`);
// };

// const fetchAskList = function () {
//   return axios.get(`${config.baseUrl}ask/1.json`);
// };

const fetchList = async function (pageName) {
  try {
    const res = await axios.get(`${config.baseUrl}${pageName}/1.json`);
    return res;
  } catch (e) {
    console.log(e);
  }
};

const fetchUserInfo = async function (user) {
  try {
    const res = await axios.get(`${config.baseUrl}user/${user}.json`);
    return res;
  } catch (e) {
    console.log(e);
  }
};

const fetchItemView = async function (id) {
  try {
    const res = await axios.get(`${config.baseUrl}item/${id}.json`);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export { fetchList, fetchUserInfo, fetchItemView };
