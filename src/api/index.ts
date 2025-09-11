/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { openNotification } from '../utils/feedback';


export type ResType = {
  code: number;
  msg: string;
  data: any;
};

const http = axios.create({
  baseURL: '/api',
  timeout: 30 * 1000,
});

http.interceptors.response.use(
  res => {
    const resData = (res.data || {}) as ResType;
    const { code, data, msg } = resData;

    if (code) {
      openNotification({ title: '请求失败', msg });
      throw new Error(msg || '');
    }

    return data as any;
  },
  err => Promise.reject(err)
);

export type ResDataType = {
  [key: string]: any;
};

export default http;