interface RecaptchaRenderOptions {
  sitekey: string;
  callback?: (token: string) => void;
  "error-callback"?: () => void;
  "expired-callback"?: () => void;
}

interface Grecaptcha {
  render: (
    element: string | HTMLElement,
    options: RecaptchaRenderOptions
  ) => number;
  getResponse: (widgetId?: number) => string;
  reset: (widgetId?: number) => void;
}

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
    onloadCallback?: () => void;
  }
}

export {};
