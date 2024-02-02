import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { Tournament } from "./definitions";

export async function fetchOpenTournaments() {
  noStore();
  try {
    const data = await sql<Tournament>`
        SELECT tournaments.id, tournaments.name, tournaments.host, tournaments.time, tournaments.watch_link, tournaments.registration_link
        FROM tournaments
        WHERE tournaments.registration_open = true
        ORDER BY tournaments.time ASC`;

    //   const latestInvoices = data.rows.map((invoice) => ({
    //     ...invoice,
    //     amount: formatCurrency(invoice.amount),
    //   }));
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest open Tournaments.");
  }
}

export async function fetchScheduledTournaments() {
  noStore();
  try {
    const data = await sql<Tournament>`
          SELECT tournaments.id, tournaments.name, tournaments.host, tournaments.time, tournaments.watch_link
          FROM tournaments
          WHERE tournaments.registration_open = false
          ORDER BY tournaments.time ASC`;

    //   const latestInvoices = data.rows.map((invoice) => ({
    //     ...invoice,
    //     amount: formatCurrency(invoice.amount),
    //   }));
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest cheduled tournaments.");
  }
}
