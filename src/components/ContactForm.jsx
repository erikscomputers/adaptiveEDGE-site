
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const formSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  serviceInterest: z.string().min(1, 'Please select a service interest'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Store in localStorage
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({
        ...data,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

      setIsSubmitted(true);
      toast.success('Thank you for your inquiry. We will contact you within 1-2 business days.');
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-foreground">Full Name</Label>
          <Input
            id="fullName"
            type="text"
            placeholder="Maya Chen"
            className="bg-input text-foreground border-border focus-visible:ring-secondary rounded-lg"
            {...register('fullName')}
          />
          {errors.fullName && (
            <p className="text-sm text-destructive">{errors.fullName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="maya.chen@company.com"
            className="bg-input text-foreground border-border focus-visible:ring-secondary rounded-lg"
            {...register('email')}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-foreground">Phone</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            className="bg-input text-foreground border-border focus-visible:ring-secondary rounded-lg"
            {...register('phone')}
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="company" className="text-foreground">Company</Label>
          <Input
            id="company"
            type="text"
            placeholder="Meridian Labs"
            className="bg-input text-foreground border-border focus-visible:ring-secondary rounded-lg"
            {...register('company')}
          />
          {errors.company && (
            <p className="text-sm text-destructive">{errors.company.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="serviceInterest" className="text-foreground">Service Interest</Label>
        <Select onValueChange={(value) => setValue('serviceInterest', value)}>
          <SelectTrigger id="serviceInterest" className="bg-input text-foreground border-border focus:ring-secondary rounded-lg">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent className="bg-popover border-border">
            <SelectItem value="corporate">Corporate Solutions</SelectItem>
            <SelectItem value="personal development">Personal Development</SelectItem>
            <SelectItem value="services">Services</SelectItem>
            <SelectItem value="products">Products</SelectItem>
            <SelectItem value="courses">Courses</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        {errors.serviceInterest && (
          <p className="text-sm text-destructive">{errors.serviceInterest.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-foreground">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your needs and how we can help..."
          rows={5}
          className="bg-input text-foreground border-border focus-visible:ring-secondary resize-none rounded-lg"
          {...register('message')}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      {isSubmitted && (
        <div className="p-4 rounded-lg bg-secondary/10 text-secondary border border-secondary/20">
          <p className="text-sm font-medium">
            Thank you for your inquiry. We will contact you shortly.
          </p>
        </div>
      )}

      <Button
        type="submit"
        className="w-full button-primary py-6 text-base"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  );
};

export default ContactForm;
