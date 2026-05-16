import { sendGTMEvent } from "@next/third-parties/google";

export const trackEvent = (action: string, category: string, label: string, value?: number) => {
    if (typeof window !== "undefined") {
        sendGTMEvent({
            event: action,
            category,
            label,
            value,
        });
        console.log(`Event Tracked: ${action}`, { category, label, value });
    }
};
