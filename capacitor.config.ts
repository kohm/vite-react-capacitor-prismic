import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'vite.cnp',
  appName: 'vite-cnp',
  webDir: 'dist',
  server: {
    url: 'http://192.168.86.27:3000',
  },
};

export default config;
