export function containsNumbers(input: string): input is string {
    return /\d/.test(input);
}