const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    icon: path.join(__dirname, "public/icon.png"),
  });

  // 判断是开发环境还是生产环境
  const isDev = process.env.NODE_ENV !== "production";

  if (isDev) {
    // 开发环境加载Vite开发服务器地址
    win.loadURL("http://localhost:5173");
    // 打开开发者工具
    win.webContents.openDevTools();
  } else {
    // 生产环境加载打包后的文件
    win.loadFile(path.join(__dirname, "dist/index.html"));
  }
};

// 当 Electron 完成初始化时为 ready 事件添加一个监听器
app.whenReady().then(() => {
  createWindow();
  //如果没有任何打开的browserwindow,则新建一个
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// 当所有窗口都被关闭后退出
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
