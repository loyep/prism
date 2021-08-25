module.exports = {
  apps: [
    {
      name: 'kovajs',
      script: 'dist/src/main.js',
      exec_mode: 'cluster',
      max_memory_restart: '800M',
      instances: 0,
      env: {
        NODE_ENV: 'production',
        ENABLE_NODE_LOG: 'YES',
      },
    },
  ],
}
