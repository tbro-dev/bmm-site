import DOMPurify from 'dompurify';

const sanitizeInput = (input: string): string => {
    // Sanitize and trim
    const clean = DOMPurify.sanitize(input, {
        ALLOWED_TAGS: [],      // Allow no HTML tags (pure text)
        ALLOWED_ATTR: []       // Allow no attributes
    });

    // Optionally limit the length
    return clean.trim().substring(0, 10000);
};


export default sanitizeInput;
