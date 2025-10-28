type AppConfig = {
    teams?: string | any;
};

const clientApp = (): AppConfig => {

    const appConfig: AppConfig = {
        teams: process.env.TM_HOST,
    };

    console.log(appConfig.teams);

    return appConfig;
};

export default clientApp;
