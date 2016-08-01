/**
 * Created by cw on 16/7/28.
 */

export function formatDataString(timestamps) {
    const date = new Date(parseInt(timestamps) * 1000);
    const year = date.getFullYear();
    const month = parseInt(date.getMonth()) +1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return `${year}-${month}-${day}`;
}