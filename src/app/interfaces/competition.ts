import { Ranking } from "./ranking"

export interface Competition {
    code: string,
    date: string,
    startTime: string,
    endTime: string,
    numberOfParticipants: number,
    location: string,
    amount: number
    ranking: Ranking[]
}
