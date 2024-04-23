import posthog from 'posthog-js'

export default {
    install(app){
        app.config.globalProperties.$posthog = posthog.init(
            "phc_jwnr5o3EoT8pSuZkqGXD12vftOpAd0uq63o2Pf0TCV6",
            {
                api_host: "https://eu.i.posthog.com",
            }
        );
    }
}