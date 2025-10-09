import { BookingWidget } from "@/components/booking-widget";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="max-w-5xl mx-auto px-6">
        <BookingWidget domeName="The Domestead" />
      </div>
    </main>
  );
}
