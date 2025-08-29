declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: {
        [key: string]: any;
        event_category?: string;
        event_label?: string;
        value?: number;
        send_to?: string;
      }
    ) => void;
    dataLayer: any[];
  }
}

export {};
