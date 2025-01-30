const formatEventDate = (dateString) => {
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const addOrdinalSuffix = (day) => {
        if (day > 3 && day < 21) return `${day}th`; // Special case for 11th-13th
        switch (day % 10) {
            case 1: return `${day}st`;
            case 2: return `${day}nd`;
            case 3: return `${day}rd`;
            default: return `${day}th`;
        }
    };

    const [day, month, year] = dateString.split("-").map(Number);
    return `${addOrdinalSuffix(day)} ${months[month - 1]} ${year}`;
};

export default formatEventDate;