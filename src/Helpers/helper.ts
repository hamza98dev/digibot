export function isIntger(value: string): boolean {
    if (parseInt(value, 10).toString() === value) {
        return true
    }
    return false;
}

export function TimeDiff(LAST_MESSAGE: string): number {
    let date = new Date();
    let date_last_message = new Date(LAST_MESSAGE);
    const diffTime = Math.abs(date.getTime() - date_last_message.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays
}