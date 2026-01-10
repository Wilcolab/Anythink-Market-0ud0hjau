function toCamelCase(str) {
    return str
        .split(/[-_\s]+/) // Split by hyphens, underscores, or spaces
        .map((word, index) => {
            word = word.toLowerCase();
            // Capitalize first letter of each word except the first one
            return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

// Test cases
console.log(toCamelCase('first name'));        // firstName
console.log(toCamelCase('user_id'));           // userId
console.log(toCamelCase('SCREEN_NAME'));       // screenName
console.log(toCamelCase('mobile-number'));     // mobileNumber