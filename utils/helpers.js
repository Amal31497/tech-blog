module.exports = {
    formatted_date: (date) => {
        // Format date as MM/DD/YYYY
        let d = new Date();
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        return `${da}-${mo}-${ye}`;
    }
}