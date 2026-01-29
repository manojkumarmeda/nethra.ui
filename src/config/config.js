/**
 * Environment Configuration
 * Central location for accessing all environment variables related to contact details
 */

export const config = {
  // Company Information
  company: {
    name: process.env.REACT_APP_COMPANY_NAME || "Nethra",
    email: process.env.REACT_APP_COMPANY_EMAIL || "contact@nethra.com",
    phone: process.env.REACT_APP_COMPANY_PHONE || "+1 (555) 123-4567",
    phoneSecondary:
      process.env.REACT_APP_COMPANY_PHONE_SECONDARY || "+1 (555) 123-4568",
  },

  // Address
  address: {
    street:
      process.env.REACT_APP_COMPANY_ADDRESS || "123 Brain Development Street",
    city: process.env.REACT_APP_COMPANY_CITY || "San Francisco",
    state: process.env.REACT_APP_COMPANY_STATE || "CA",
    zip: process.env.REACT_APP_COMPANY_ZIP || "94105",
    country: process.env.REACT_APP_COMPANY_COUNTRY || "United States",
    full: `${
      process.env.REACT_APP_COMPANY_ADDRESS || "123 Brain Development Street"
    }, ${process.env.REACT_APP_COMPANY_CITY || "San Francisco"}, ${
      process.env.REACT_APP_COMPANY_STATE || "CA"
    } ${process.env.REACT_APP_COMPANY_ZIP || "94105"}, ${
      process.env.REACT_APP_COMPANY_COUNTRY || "United States"
    }`,
  },

  // Social Media
  social: {
    facebook:
      process.env.REACT_APP_FACEBOOK_URL || "https://facebook.com/nethra",
    twitter: process.env.REACT_APP_TWITTER_URL || "https://twitter.com/nethra",
    linkedin:
      process.env.REACT_APP_LINKEDIN_URL ||
      "https://linkedin.com/company/nethra",
    instagram:
      process.env.REACT_APP_INSTAGRAM_URL || "https://instagram.com/nethra",
    youtube: process.env.REACT_APP_YOUTUBE_URL || "https://youtube.com/@nethra",
  },

  // Business Hours
  businessHours: {
    weekday:
      process.env.REACT_APP_BUSINESS_HOURS_WEEKDAY || "9:00 AM - 6:00 PM",
    weekend:
      process.env.REACT_APP_BUSINESS_HOURS_WEEKEND || "10:00 AM - 4:00 PM",
    timezone: process.env.REACT_APP_TIMEZONE || "PST",
  },

  // Support
  support: {
    email: process.env.REACT_APP_SUPPORT_EMAIL || "support@nethra.com",
    salesEmail: process.env.REACT_APP_SALES_EMAIL || "sales@nethra.com",
    careersEmail: process.env.REACT_APP_CAREERS_EMAIL || "careers@nethra.com",
  },

  // Website
  website: {
    url: process.env.REACT_APP_WEBSITE_URL || "https://nethra.com",
    helpCenter:
      process.env.REACT_APP_HELP_CENTER_URL || "https://help.nethra.com",
  },
};

/**
 * Get formatted phone number
 * @returns {string} Formatted phone number
 */
export const getPhoneNumber = () => config.company.phone;

/**
 * Get formatted address
 * @returns {string} Full formatted address
 */
export const getFullAddress = () => config.address.full;

/**
 * Get email based on type
 * @param {string} type - 'support', 'sales', 'careers', or 'general'
 * @returns {string} Email address
 */
export const getEmail = (type = "general") => {
  const emails = {
    support: config.support.email,
    sales: config.support.salesEmail,
    careers: config.support.careersEmail,
    general: config.company.email,
  };
  return emails[type] || config.company.email;
};

/**
 * Get all social media links
 * @returns {Object} Object containing all social media URLs
 */
export const getSocialLinks = () => config.social;

/**
 * Get business hours
 * @returns {Object} Business hours for weekday and weekend
 */
export const getBusinessHours = () => config.businessHours;

export default config;
