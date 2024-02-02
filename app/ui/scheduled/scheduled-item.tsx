import { Tournament } from "@/app/lib/definitions";
import { format } from "date-fns/format";
import Image from "next/image";


interface Props {
    details: Tournament;
}

export const ScheduledItem = ({ details }: Props) => {
    const time = new Date(details.time);
    return (
        <div className="flex flex-row gap-4">
            <div>
                <Image src="/test.png" alt="Profile picture of host" width={128} height={128} />
            </div>
            <div>
                <div>{details.name}</div>
                <div>{details.host}</div>
                <div>{format(time, "HH:mm, d LLL yy")}</div>
                <div>{details.watch_link}</div>
            </div>
        </div>
    );
}

