export const calcTime = (time) => {
    const Today = new Date();
    const date = new Date(time);

    const diff = Math.abs(Today - date);

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));
    const seconds = Math.floor(diff / 1000);

    if(years > 0) {
        return years + " year" + (years > 1 ? "s" : "") + " ago";
    }
    if(months > 0) {
        return months + " month" + (months > 1 ? "s" : "") + " ago";
    }
    if(days > 0) {
        return days + " day" + (days > 1 ? "s" : "") + " ago";
    }
    if(hours > 0) {
        return hours + " hour" + (hours > 1 ? "s" : "") + " ago";
    }
    if(minutes > 0) {
        return minutes + " minute" + (minutes > 1 ? "s" : "") + " ago";
    }
    if(seconds > 0) {
        return seconds + " second" + (seconds > 1 ? "s" : "") + " ago";
    }
} 