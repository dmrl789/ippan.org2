# IPPAN Foundation Website

A modern Next.js 14 + Tailwind + Supabase forum website with authentication and admin moderation tools.

## Features

- **Modern UI**: Clean, responsive design with Tailwind CSS
- **Authentication**: Email/password authentication with Supabase
- **Forum System**: Categories, threads, and posts with Markdown support
- **Admin Dashboard**: Moderation tools for managing content and users
- **Role-based Access**: Admin, Moderator, and Member roles
- **Real-time Updates**: Supabase real-time subscriptions
- **Deploy Ready**: Optimized for Vercel deployment

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, RLS)
- **Deployment**: Vercel

## Quick Start

### 1. Prerequisites

- Node.js 20+
- A Supabase project (free tier works)
- A Vercel account

### 2. Install Dependencies

```bash
npm install
```

### 3. Set up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run the contents of `supabase-schema.sql`
3. Go to **Authentication > Providers** and enable Email/Password
4. Set the redirect URL to: `https://your-domain.com/auth/callback`

### 4. Environment Variables

Copy `.env.local.example` to `.env.local` and provide your Supabase project values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 6. Create Admin User

1. Sign up for an account
2. Go to Supabase **Authentication > Users**
3. Copy your user UUID
4. Run this SQL in the SQL Editor:

```sql
UPDATE public.profiles 
SET role = 'admin' 
WHERE id = 'your-user-uuid';
```

## Admin Features

The admin dashboard (`/admin`) includes:

- **Thread Management**: View and delete threads
- **Post Management**: View and delete posts
- **User Management**: Change user roles (Member/Moderator/Admin)
- **Category Management**: Add and delete forum categories

Access is restricted to users with `admin` or `mod` roles.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy!

### Environment Variables for Production

In Vercel **Project Settings > Environment Variables**:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Project Structure

```
├── app/
│   ├── admin/                 # Admin dashboard
│   ├── auth/                  # Authentication pages
│   ├── forum/                 # Forum pages
│   ├── profile/               # User profile
│   └── layout.tsx             # Root layout
├── lib/
│   └── supabase/              # Supabase client config
├── middleware.ts              # Route protection
└── supabase-schema.sql        # Database schema
```

## Database Schema

- **profiles**: User profiles with roles
- **categories**: Forum categories
- **threads**: Discussion threads
- **posts**: Thread replies

All tables have Row Level Security (RLS) enabled with appropriate policies.

## Customization

### Branding

Update colors in `tailwind.config.ts`:

```typescript
colors: {
  brand: {
    DEFAULT: '#0B7F52',    // Your primary color
    dark: '#095F3E',       // Darker shade
    light: '#27A379'       // Lighter shade
  }
}
```

### Adding Features

- **Rich Text Editor**: Replace textarea with TipTap or similar
- **Notifications**: Add real-time notifications
- **Search**: Implement full-text search
- **Reactions**: Add like/dislike system
- **File Uploads**: Enable image/file attachments

## Security

- All write operations require authentication
- Row Level Security (RLS) protects data access
- Admin routes are protected by middleware
- OAuth providers are properly configured

## Support

For issues or questions:
- Check the [Supabase documentation](https://supabase.com/docs)
- Review [Next.js documentation](https://nextjs.org/docs)
- Open an issue in this repository

## License

MIT License - see LICENSE file for details.
