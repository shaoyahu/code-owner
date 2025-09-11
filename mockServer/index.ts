import express from 'express';
import cors from 'cors';
import os from 'os';
import co from './api/co.ts';

const app = express();
const port = 7030;

// 中间件
app.use(cors());
app.use(express.json({ limit: '50mb' })); // 解析 JSON 请求体,请求体大小限制
// 路由
app.get('/', (_, res) => {
  res.send('服务器运行中');
});
app.get('/api', (_, res) => {
  res.send('服务器运行中 /api');
});

app.use('/', co);

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name in interfaces) {
    for (const iface of interfaces[name]) {
      // 只考虑 IPv4 且非 127.0.0.1 地址
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return '127.0.0.1'; // fallback
}

// 启动服务器
app.listen(port, '0.0.0.0', () => {
  console.log(`服务器运行在 http://${getLocalIP()}:${port}`);
});
