// 生产环境配置
window.APP_CONFIG = {
    environment: 'production',
    version: '2.0.5',
    apiUrl: 'https://api.myproject.com',
    debugMode: false,
    features: {
        newFeature: false,       // 新功能未正式发布
        experimentalUI: false,   // 不启用实验性功能
        debugPanel: false        // 生产环境不显示调试信息
    },
    database: {
        host: 'prod-db.myproject.com',
        name: 'myproject_prod'
    }
};

// 生产环境优化
console.log('🌐 生产环境已加载');