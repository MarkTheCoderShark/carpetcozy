import Button from './Button';
import { Input } from './Input';
import { Textarea } from './Textarea';
import { Select } from './Select';
import { Label } from './Label';

export function ContactForm() {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/thank-you"
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="first-name">First Name</Label>
          <Input
            id="first-name"
            name="first-name"
            type="text"
            required
            placeholder="John"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">Last Name</Label>
          <Input
            id="last-name"
            name="last-name"
            type="text"
            required
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="john@example.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="(555) 555-5555"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service</Label>
        <Select id="service" name="service" required>
          <option value="">Select a service</option>
          <option value="residential-carpet-cleaning">Residential Carpet Cleaning</option>
          <option value="commercial-carpet-cleaning">Commercial Carpet Cleaning</option>
          <option value="area-rug-cleaning">Area Rug Cleaning</option>
          <option value="upholstery-cleaning">Upholstery Cleaning</option>
          <option value="tile-and-grout-cleaning">Tile & Grout Cleaning</option>
          <option value="post-construction-cleaning">Post-Construction Cleaning</option>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your cleaning needs..."
          className="min-h-[100px]"
        />
      </div>

      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  );
}