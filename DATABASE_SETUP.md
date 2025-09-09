# Database and Email Setup Instructions

## Prerequisites

1. **PostgreSQL Database**
   - Install PostgreSQL locally or use a cloud provider (Supabase, Railway, etc.)
   - Create a new database for this project

2. **Email Service**
   - Gmail account with App Password enabled, or
   - SMTP service (SendGrid, Mailgun, etc.)

## Setup Steps

### 1. Configure Environment Variables

Update the `.env.local` file with your actual database and email credentials:

```env
# Database - Replace with your PostgreSQL connection string
DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name"

# Email Configuration (Example with Gmail)
EMAIL_FROM="your-email@gmail.com"
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT=587
EMAIL_USER="your-email@gmail.com"
EMAIL_PASSWORD="your-gmail-app-password"
```

### 2. Database Migration

Run the following commands to set up your database:

```bash
# Create and apply the migration
npx prisma migrate dev --name init

# Generate Prisma client (if not already done)
npx prisma generate
```

### 3. Gmail App Password Setup (if using Gmail)

1. Enable 2-Factor Authentication on your Gmail account
2. Go to Google Account Settings > Security > App passwords
3. Generate a new App Password for "Mail"
4. Use this App Password in your `EMAIL_PASSWORD` environment variable

### 4. Test the Setup

1. Start the development server: `npm run dev`
2. Open the application and try submitting the form
3. Check your database to see if the record was created
4. Check your email for the notification and confirmation emails

## Database Schema

The form submissions are stored with the following structure:

```sql
CREATE TABLE "form_submissions" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "country" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    PRIMARY KEY ("id")
);
```

## Troubleshooting

### Database Connection Issues
- Ensure PostgreSQL is running
- Verify the DATABASE_URL format and credentials
- Check if the database exists

### Email Issues
- Verify SMTP credentials
- Check spam folder for test emails
- Ensure Gmail App Password is correct (not your regular password)

### Form Validation
- Company Name and Email are required fields
- Email must be in valid format
- Form shows error messages for validation failures

## Production Deployment

For production deployment:

1. Update DATABASE_URL with your production PostgreSQL database
2. Configure production email service credentials
3. Run `npx prisma migrate deploy` to apply migrations
4. Ensure environment variables are set in your deployment platform