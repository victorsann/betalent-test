
export function dateFormatter(date: string) {
    let incomingDate = new Date(date).toLocaleString().split(' ');
    return incomingDate[0].replace(/,/g, "");
}


