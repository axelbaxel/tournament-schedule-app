import { format } from "date-fns/format";
import { parseISO } from "date-fns/parseISO";
import Image from "next/image";


interface Props {
    details: {
        name: string;
        host: string;
        time: string;
        watchLink: string;
    }

}

export const ScheduledItem = ({ details }: Props) => {
    const time = parseISO(details.time);
    return (
        <div className="flex flex-row gap-4">
            <div>
                <Image src="/test.png" alt="Profile picture of host" width={128} height={128} />
            </div>
            <div>
                <div>{details.name}</div>
                <div>{details.host}</div>
                <div>{format(time, "HH:mm, d LLL yy")}</div>
                <div>{details.watchLink}</div>
            </div>
        </div>
    );
}

