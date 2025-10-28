type AppConfig = {
    teams?: string | any;
};

const clientApp = (): AppConfig => {
    const appConfig: AppConfig = {
        teams: process.env.TM_ENDPOINT,
    };

    return appConfig;
};

export default clientApp;
