import { fireEvent } from "./gtag";

export function trackBookingClick(buttonLabel: string) {
  fireEvent("booking_cta_click", { label: buttonLabel });
}
