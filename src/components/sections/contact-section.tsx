'use client'

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { submitContactForm } from '@/app/actions';
import { useToast } from "@/hooks/use-toast"
import { useLanguage } from '@/hooks/use-language';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Send } from 'lucide-react';


const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

const translations = {
    sectionTitle: { en: "Get In Touch", es: "Ponte en Contacto" },
    sectionDescription: { en: "Have a project in mind, a question, or just want to connect? Send me a message!", es: "¿Tienes un proyecto en mente, una pregunta o simplemente quieres conectar? ¡Envíame un mensaje!" },
    nameLabel: { en: "Name", es: "Nombre" },
    namePlaceholder: { en: "Your Name", es: "Tu Nombre" },
    emailLabel: { en: "Email", es: "Correo Electrónico" },
    emailPlaceholder: { en: "your.email@example.com", es: "tu.email@ejemplo.com" },
    messageLabel: { en: "Message", es: "Mensaje" },
    messagePlaceholder: { en: "Tell me about your project or inquiry...", es: "Cuéntame sobre tu proyecto o consulta..." },
    sendButton: { en: "Send Message", es: "Enviar Mensaje" },
    toastSuccessTitle: { en: "Message Sent!", es: "¡Mensaje Enviado!" },
    toastSuccessDescription: { en: "Thank you for your message! I'll get back to you soon.", es: "¡Gracias por tu mensaje! Me pondré en contacto contigo pronto." },
    toastErrorTitle: { en: "Uh oh! Something went wrong.", es: "¡Uy! Algo salió mal." },
    toastErrorDescription: { en: "There was an error with your submission. Please check the fields and try again.", es: "Hubo un error con tu envío. Por favor, revisa los campos e inténtalo de nuevo." },
}

export function ContactSection() {
  const { toast } = useToast()
  const { language } = useLanguage();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    const result = await submitContactForm(values);

    if (result.success) {
      toast({
        title: translations.toastSuccessTitle[language],
        description: translations.toastSuccessDescription[language],
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: translations.toastErrorTitle[language],
        description: translations.toastErrorDescription[language],
      });
    }
  }

  return (
    <section id="contact" className="w-full bg-secondary">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">{translations.sectionTitle[language]}</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-xl mx-auto">
            {translations.sectionDescription[language]}
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{translations.nameLabel[language]}</FormLabel>
                    <FormControl>
                      <Input placeholder={translations.namePlaceholder[language]} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{translations.emailLabel[language]}</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder={translations.emailPlaceholder[language]} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{translations.messageLabel[language]}</FormLabel>
                    <FormControl>
                      <Textarea placeholder={translations.messagePlaceholder[language]} className="min-h-[150px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end">
                <Button type="submit" size="lg" disabled={isSubmitting}>
                   {isSubmitting ? <Loader2 className="animate-spin" /> : <Send />}
                  {translations.sendButton[language]}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}