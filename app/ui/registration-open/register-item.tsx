import { format } from "date-fns/format";
import { parseISO } from "date-fns/parseISO";
import Image from "next/image";

interface Props {
    details: {
        tournamentName: string;
        host: string;
        tournamentTime: string;
        registrationLink: string;
    }

}

export const RegisterItem = ({ details }: Props) => {
    const time = parseISO(details.tournamentTime);
    return (
        <div className="flex flex-row gap-4">
            <div>
                <Image src="/test.png" alt="Profile Picture of the host" width={128} height={128} />
            </div>
            <div>
                <div>{details.tournamentName}</div>
                <div>{details.host}</div>
                <div>{format(time, "HH:mm, d LLL yy")}</div>
                <div>{details.registrationLink}</div>
            </div>
        </div>
    );
}

