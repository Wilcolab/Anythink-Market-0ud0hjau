/**
 * Converts a string to camelCase format.
 * 
 * Splits the input string by whitespace, underscores, or hyphens, filters out empty strings,
 * and joins the words back together where the first word is lowercase and subsequent words
 * have their first letter capitalized.
 * 
 * @param {string} str - The input string to convert. Can contain spaces, underscores, or hyphens as separators.
 * @returns {string} The converted camelCase string.
 * 
 * @example
 * toCamelCase("hello-world"); // returns "helloWorld"
 * toCamelCase("hello_world_foo"); // returns "helloWorldFoo"
 * toCamelCase("hello world"); // returns "helloWorld"
 */

/**
 * Converts a string to dot.case format.
 * 
 * Splits the input string by whitespace, underscores, or hyphens, filters out empty strings,
 * converts all words to lowercase, and joins them with dots as separators.
 * 
 * @param {string} str - The input string to convert. Can contain spaces, underscores, or hyphens as separators.
 * @returns {string} The converted dot.case string with all words in lowercase joined by dots.
 * 
 * @example
 * toDotCase("hello-world"); // returns "hello.world"
 * toDotCase("hello_world_foo"); // returns "hello.world.foo"
 * toDotCase("hello world"); // returns "hello.world"
 */
function toCamelCase(str) {
    return str
        .split(/[\s_-]+/)
        .filter(word => word.length > 0)
        .map((word, index) => {
            const lowerWord = word.toLowerCase();
            return index === 0 ? lowerWord : lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
        })
        .join('');
}

function toDotCase(str) {
    return str
        .split(/[\s_-]+/)
        .filter(word => word.length > 0)
        .map(word => word.toLowerCase())
        .join('.');
}

