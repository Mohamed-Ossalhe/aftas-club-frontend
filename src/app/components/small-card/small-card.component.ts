import { Component, Input } from '@angular/core';
import { Competition } from '@app/interfaces/competition';
import { generateDate } from '@app/utils/generateDate';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.less'],
})
export class SmallCardComponent {
  @Input({ required: true }) data!: Competition;

  public constructor() {
  }

  /**
   * 
   * @param date competition date
   * @param time competition start time
   * @returns `Date Object` including the date and time params combined
   */
  generateCompetitionDate(date: string, time: string) {
    return generateDate(date, time)?.toDateString();
  }

  /**
   * 
   * @param date competition date
   * @param startTime competition start time
   * @param endTime competition end time
   * @returns `status`-string value.
   * @summary (competition date & competition start & end time > current date) = upcoming
   * @summary (competition date & competition start & end time < current date) = expired
   * @summary (competition date & competition start & end time == current date) = started
   */
  generateStatus(date: string, startTime: string, endTime: string) {
    const currentDate = new Date();
    const competitionStartDate = generateDate(date, startTime);
    const competitionEndDate = generateDate(date, endTime);
    
    if (competitionStartDate !== null && competitionEndDate !== null) {
      if (competitionStartDate > currentDate) {
        return "upcoming";
      } else if (competitionEndDate < currentDate) {
        return "expired";
      } else {
        return "started";
      }
    }
    return null;
  }
}
