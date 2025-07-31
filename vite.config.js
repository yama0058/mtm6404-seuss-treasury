export default {
  server: {
    proxy: {
      '/api': {
        target: 'https://seussology.info',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '/api'),
      },
    },
  },
};
