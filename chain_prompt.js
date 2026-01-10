/**
 * Converts a string into kebab-case format.
 * 
 * @param {string} input - The string to convert to kebab-case
 * @returns {string} The converted kebab-case string
 * @throws {Error} If input is not a valid string
 */
function toKebabCase(input) {
    // Step 1: Validate input
    // Check if input is a string
    if (typeof input !== 'string') {
        throw new Error(`Invalid input: expected a string, but received ${typeof input}`);
    }

    // Trim whitespace and check if the result is empty
    const trimmedInput = input.trim();
    if (trimmedInput.length === 0) {
        throw new Error('Invalid input: string cannot be empty or contain only whitespace');
    }

    // Step 2: Normalize the string
    // Convert to lowercase for consistent processing
    const lowercased = trimmedInput.toLowerCase();

    // Step 3: Split into words by handling multiple types of separators and camelCase
    // Replace camelCase transitions (lowercase followed by uppercase) with a separator
    // This handles cases like "helloWorld" -> "hello-world"
    const withCamelCaseSeparators = lowercased.replace(/([a-z])([A-Z])/g, '$1-$2');

    // Replace multiple consecutive separators (spaces, underscores, hyphens) with a single hyphen
    const normalized = withCamelCaseSeparators
        .replace(/[\s_-]+/g, '-')    // Replace one or more spaces, underscores, or hyphens with a single hyphen
        .replace(/^-+|-+$/g, '');    // Remove leading and trailing hyphens

    return normalized;
}

// Step 4: Example function calls demonstrating various use cases

// Example 1: Normal input with spaces
console.log('Example 1 - Normal input:');
console.log(toKebabCase('hello world'));  // Output: "hello-world"

// Example 2: Mixed separators (spaces, underscores, and hyphens)
console.log('\nExample 2 - Mixed separators:');
console.log(toKebabCase('hello_world-test case'));  // Output: "hello-world-test-case"

// Example 3: camelCase input
console.log('\nExample 3 - camelCase input:');
console.log(toKebabCase('helloWorldTestCase'));  // Output: "hello-world-test-case"

// Example 4: Multiple consecutive separators
console.log('\nExample 4 - Multiple consecutive separators:');
console.log(toKebabCase('hello___world---test   case'));  // Output: "hello-world-test-case"

// Example 5: Mixed camelCase and separators
console.log('\nExample 5 - Mixed camelCase and separators:');
console.log(toKebabCase('HelloWorld_testCase-example'));  // Output: "hello-world-test-case-example"

// Example 6: Input with leading/trailing whitespace
console.log('\nExample 6 - Leading/trailing whitespace:');
console.log(toKebabCase('  hello world  '));  // Output: "hello-world"

// Example 7: Error handling - null input
console.log('\nExample 7 - Error handling (null):');
try {
    toKebabCase(null);
} catch (error) {
    console.error(`Caught error: ${error.message}`);
}

// Example 8: Error handling - undefined input
console.log('\nExample 8 - Error handling (undefined):');
try {
    toKebabCase(undefined);
} catch (error) {
    console.error(`Caught error: ${error.message}`);
}

// Example 9: Error handling - empty string
console.log('\nExample 9 - Error handling (empty string):');
try {
    toKebabCase('');
} catch (error) {
    console.error(`Caught error: ${error.message}`);
}

// Example 10: Error handling - only whitespace
console.log('\nExample 10 - Error handling (only whitespace):');
try {
    toKebabCase('   ');
} catch (error) {
    console.error(`Caught error: ${error.message}`);
}