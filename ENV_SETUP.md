# Environment Configuration Documentation

## Overview

This document explains how to configure environment variables for contact details and other configuration in the Nethra UI application.

## Setup Instructions

### 1. Copy Environment File

Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

### 2. Configure Variables

Edit the `.env` file in the root directory and update the values according to your needs.

## Available Environment Variables

### Company Information

- `REACT_APP_COMPANY_NAME` - Name of your company (default: Nethra)
- `REACT_APP_COMPANY_EMAIL` - General contact email
- `REACT_APP_COMPANY_PHONE` - Primary phone number
- `REACT_APP_COMPANY_PHONE_SECONDARY` - Secondary phone number (optional)

### Address Information

- `REACT_APP_COMPANY_ADDRESS` - Street address
- `REACT_APP_COMPANY_CITY` - City name
- `REACT_APP_COMPANY_STATE` - State/Province abbreviation
- `REACT_APP_COMPANY_ZIP` - ZIP/Postal code
- `REACT_APP_COMPANY_COUNTRY` - Country name

### Social Media URLs

- `REACT_APP_FACEBOOK_URL` - Facebook page URL
- `REACT_APP_TWITTER_URL` - Twitter/X profile URL
- `REACT_APP_LINKEDIN_URL` - LinkedIn company page URL
- `REACT_APP_INSTAGRAM_URL` - Instagram profile URL
- `REACT_APP_YOUTUBE_URL` - YouTube channel URL

### Business Hours

- `REACT_APP_BUSINESS_HOURS_WEEKDAY` - Weekday hours (e.g., "9:00 AM - 6:00 PM")
- `REACT_APP_BUSINESS_HOURS_WEEKEND` - Weekend hours (e.g., "10:00 AM - 4:00 PM")
- `REACT_APP_TIMEZONE` - Timezone (e.g., "PST", "EST", "UTC")

### Support Emails

- `REACT_APP_SUPPORT_EMAIL` - Support team email
- `REACT_APP_SALES_EMAIL` - Sales team email
- `REACT_APP_CAREERS_EMAIL` - Careers/HR email

### Website Information

- `REACT_APP_WEBSITE_URL` - Main website URL
- `REACT_APP_HELP_CENTER_URL` - Help/Knowledge base center URL

## Usage in Components

### Import the Configuration

```javascript
import {
  config,
  getEmail,
  getFullAddress,
  getSocialLinks,
} from "../config/config";
```

### Access Company Information

```javascript
// Access company details
const email = config.company.email;
const phone = config.company.phone;
const name = config.company.name;

// Get formatted address
const fullAddress = config.address.full;

// Get specific email
const supportEmail = getEmail("support");
const salesEmail = getEmail("sales");
const careersEmail = getEmail("careers");

// Get social media links
const socialLinks = getSocialLinks();
console.log(socialLinks.facebook);
console.log(socialLinks.linkedin);

// Get business hours
const weekdayHours = config.businessHours.weekday;
const weekendHours = config.businessHours.weekend;
```

### In Footer Component Example

```javascript
import { config, getSocialLinks } from "../config/config";

const Footer = () => {
  return (
    <footer>
      {/* Company Name */}
      <h3>{config.company.name}</h3>

      {/* Social Links */}
      <a href={getSocialLinks().facebook}>Facebook</a>
      <a href={getSocialLinks().linkedin}>LinkedIn</a>

      {/* Contact Info */}
      <p>Email: {config.company.email}</p>
      <p>Phone: {config.company.phone}</p>
      <p>Address: {config.address.full}</p>
    </footer>
  );
};
```

## Important Notes

### Security

⚠️ **Important**: The `.env` file contains sensitive information:

- Add `.env` to your `.gitignore` file (already configured)
- Never commit the `.env` file to version control
- Use `.env.example` as a template for team members
- Keep actual credentials secure

### Development vs Production

For different environments, you can create:

- `.env` - Local development
- `.env.production` - Production environment
- `.env.staging` - Staging environment

### React Environment Variables

All environment variables must be prefixed with `REACT_APP_` to be accessible in your React application. This is a Create React App requirement.

## Restarting the Application

After updating the `.env` file, you need to restart your development server:

```bash
# Stop the current server (Ctrl+C)
# Then restart
npm start
```

## Example Configuration

```env
# Contact Details Configuration
REACT_APP_COMPANY_NAME=Nethra
REACT_APP_COMPANY_EMAIL=contact@nethra.com
REACT_APP_COMPANY_PHONE=+1 (555) 123-4567

# Address
REACT_APP_COMPANY_ADDRESS=123 Brain Development Street
REACT_APP_COMPANY_CITY=San Francisco
REACT_APP_COMPANY_STATE=CA
REACT_APP_COMPANY_ZIP=94105
REACT_APP_COMPANY_COUNTRY=United States

# Social Media
REACT_APP_FACEBOOK_URL=https://facebook.com/nethra
REACT_APP_LINKEDIN_URL=https://linkedin.com/company/nethra

# Support
REACT_APP_SUPPORT_EMAIL=support@nethra.com
REACT_APP_SALES_EMAIL=sales@nethra.com
```

## Troubleshooting

### Changes Not Appearing

If environment variables are not updating:

1. Make sure you restarted the development server
2. Check that variable names are prefixed with `REACT_APP_`
3. Verify the `.env` file is in the root directory

### Undefined Values

If values appear as `undefined`:

1. Check the variable name spelling
2. Ensure the `.env` file is properly formatted
3. Look at the default fallback values in `config/config.js`

## File Locations

- `.env` - Root directory (local, not committed)
- `.env.example` - Root directory (template, committed)
- `src/config/config.js` - Configuration utility functions
- `.gitignore` - Ensures .env is not committed
