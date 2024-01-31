import Image from "next/image";
import RegistrationOverview from "./ui/registration-open/overview";
import ScheduleOverview from "./ui/scheduled/overview";

export default function Home() {
  return (
    <main className="min-h-screen p-24 flex flex-row gap-10">
      <RegistrationOverview />
      <ScheduleOverview />
    </main>
  );
}
