/**
 * Auto Copyright Year Updater
 */
function updateCopyright(startYear = new Date().getFullYear()) {
    const currentYear = new Date().getFullYear();
    const yearText = startYear === currentYear ?
        startYear : `${startYear} - ${currentYear}`;

    const copyright = document.getElementById('copyright');
    if (copyright) copyright.textContent = yearText;

    return yearText;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => updateCopyright(2025));