'use server'

import { z } from 'zod'

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(data: z.infer<typeof contactFormSchema>) {
    const parsed = contactFormSchema.safeParse(data);
    
    if (parsed.success) {
        // In a real application, you would send an email, save to a database, etc.
        console.log('New contact form submission:', parsed.data);
        return { success: true, message: "Thank you for your message! I'll get back to you soon." };
    } else {
        const errorMessages = parsed.error.issues.map(issue => issue.message).join(' ');
        console.error('Form submission error:', errorMessages);
        return { success: false, message: "There was an error with your submission. Please check the fields and try again." };
    }
}
