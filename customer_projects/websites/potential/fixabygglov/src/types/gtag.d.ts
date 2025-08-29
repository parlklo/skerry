declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: {
        [key: string]: string | number | boolean;
        event_category?: string;
        event_label?: string;
        value?: number;
        send_to?: string;
      }
    ) => void;
    dataLayer: Record<string, unknown>[];
  }
}

export {};
