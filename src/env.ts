declare global {
    interface Window {
      env: {
        APP_TEST: string;
        APP_BASE_URL: string;
        APP_VERSION: string;
        APP_IDLE_TIME: number;
      }
    }
  }
  
  const env = {
    APP_TEST: window.env.APP_TEST,
    APP_BASE_URL: window.env.APP_BASE_URL,
    APP_VERSION: window.env.APP_VERSION,
    APP_IDLE_TIME: window.env.APP_IDLE_TIME
  };
  
  export default env;