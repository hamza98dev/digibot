import * as dayjs from 'dayjs'


export function isIntger(value: string): boolean {
    if (parseInt(value, 10).toString() === value) {
        return true
    }
    return false;
}

export function TimeDiff(LAST_MESSAGE: string): number {

    return dayjs().diff(LAST_MESSAGE, 'hour')
}