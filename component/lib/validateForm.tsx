export interface FormData {
    name: string;
    email: string;
    phone: string;
}

export interface ValidationResult {
    isValid: boolean;
    errors: {
        name: string;
        email: string;
        phone: string;
    };
}

export const validateForm = (form: FormData): ValidationResult => {
    const errors = { name: '', email: '', phone: '' };
    let isValid = true;

    if (!form.name.trim()) {
        errors.name = 'Name is required';
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
        errors.email = 'Email is required';
        isValid = false;
    } else if (!emailRegex.test(form.email)) {
        errors.email = 'Enter a valid email';
        isValid = false;
    }

    const phoneRegex = /^\+?[0-9\s\-()]{7,}$/;
    if (!form.phone.trim()) {
        errors.phone = 'Phone number is required';
        isValid = false;
    } else if (!phoneRegex.test(form.phone)) {
        errors.phone = 'Enter a valid phone number';
        isValid = false;
    }

    return { isValid, errors };
};