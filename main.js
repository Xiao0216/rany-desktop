const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });
  win.loadFile("index.html");
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
