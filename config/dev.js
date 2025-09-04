// 开发环境配置
window.APP_CONFIG = {
    environment: 'development',
    version: '2.1.0-dev',
    apiUrl: 'https://dev-api.myproject.com',
    debugMode: true,
    features: {
        newFeature: true,        // 开发中的新功能
        experimentalUI: true,    // 实验性界面
        debugPanel: true         // 调试面板
    },
    database: {
        host: 'dev-db.myproject.com',
        name: 'myproject_dev'
    }
};

// 开发环境专用功能
console.log('🚧 开发环境已加载');
console.log('配置信息:', window.APP_CONFIG);