/**
 * Internal logger for consistent error handling and development warnings.
 * This is tree-shaken out in production builds for "warn" and "debug" levels.
 */



class Logger {
    private prefix = '[react-meta-seo]';

    private format(message: string): string {
        return `${this.prefix} ${message}`;
    }

    info(message: string, ...args: any[]) {
        if (process.env.NODE_ENV === 'development') {
            console.info(this.format(message), ...args);
        }
    }

    warn(message: string, ...args: any[]) {
        if (process.env.NODE_ENV === 'development') {
            console.warn(this.format(message), ...args);
        }
    }

    error(message: string, ...args: any[]) {
        // Errors are always logged, even in production, as they indicate critical failures
        console.error(this.format(message), ...args);
    }

    debug(message: string, ...args: any[]) {
        if (process.env.NODE_ENV === 'development') {
            // Uncomment if verbose debugging is needed
            // console.debug(this.format(message), ...args);
            // Prevent unused variable lints
            void message;
            void args;
        }
    }
}

export const logger = new Logger();
