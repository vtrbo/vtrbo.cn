import dayjs from 'dayjs';

export function getYear(date: string | Date): number {
	return dayjs(date).year();
}

export function getDate(date: string | Date): string {
	const tempDate = dayjs(date);
	if (tempDate.year() === dayjs().year()) return tempDate.format('MMM D');
	return tempDate.format('MMM D, YYYY');
}
