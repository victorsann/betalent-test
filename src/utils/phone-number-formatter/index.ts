export function phoneNumberFormatter(
    phoneNumber: string,
    pattern: string = '+## (##) #####-####'
): string {
    const cleaned = phoneNumber.replace(/\D/g, '');
    let index = 0;

    return pattern.replace(/#/g, () => {
        return cleaned[index++] || '#';
    });
}