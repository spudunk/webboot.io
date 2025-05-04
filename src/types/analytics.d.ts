declare module '@analytics/simple-analytics' {
    interface SimpleAnalyticsConfig {
        customDomain?: string;
        collectDnt?: boolean;
        hashMode?: boolean;
        ignorePages?: string[];
        allowParams?: string[];
        nonUniqueHostnames?: boolean;
        strictUtms?: boolean;
    }
    
    interface SimpleAnalyticsPlugin {
        name: 'simple-analytics';
        config?: SimpleAnalyticsConfig;
        EVENTS: {
            PAGE: string;
            TRACK: string;
        };
    }
    
    function simpleAnalyticsPlugin(config?: SimpleAnalyticsConfig): SimpleAnalyticsPlugin;
    export default simpleAnalyticsPlugin;
}

declare module 'analytics' {
    interface AnalyticsInstance {
        page: (options?: { [key: string]: any }) => void;
        track: (event: string, payload?: { [key: string]: any }) => void;
        identify: (userId: string, traits?: { [key: string]: any }) => void;
        ready: (callback: () => void) => void;
        on: (event: string, callback: (data: any) => void) => void;
    }

    interface AnalyticsConfig {
        app: string;
        plugins?: any[];
        debug?: boolean;
    }

    export default function Analytics(config: AnalyticsConfig): AnalyticsInstance;
} 