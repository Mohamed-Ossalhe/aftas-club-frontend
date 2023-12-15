/**
 * 
 * @param date string represent the date in format (yy-MM-dd)
 * @param time string represent the time in format (hh:MM:ss)
 * @returns `Date Object` including the date and time params combined
 */
export function generateDate(date: string, time: string): Date | null {
    const currentDate = new Date(date);
    const [hh, mm, ss] = time.split(":").map(Number);
    if (hh !== undefined && mm !== undefined && ss !== undefined)
        return new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hh, mm, ss);
    return null;
}