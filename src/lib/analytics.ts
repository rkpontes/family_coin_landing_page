export const analytics = {
  track: (event: string, payload?: Record<string, unknown>) => {
    if (process.env.NODE_ENV !== "production") {
      console.info(`[analytics] ${event}`, payload ?? {});
    }
    // Hook your analytics provider (GA, Umami, etc.) here.
  }
};
