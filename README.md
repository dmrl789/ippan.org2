# IPPAN Foundation Website

<<<<<<< HEAD
A modern Next.js 14 + Tailwind + Supabase forum website with OAuth authentication and admin moderation tools.

## Features

- **Modern UI**: Clean, responsive design with Tailwind CSS
- **Authentication**: Email/password + OAuth (GitHub, Google)
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

=======
A modern, responsive website for the IPPAN Foundation built with React, TypeScript, and Tailwind CSS.

## About IPPAN Foundation

The IPPAN Foundation supports the research and stewardship of the Immutable Proof & Availability Network. We convene contributors across cryptography, distributed systems, and finance to advance verifiable, energy‑efficient infrastructure.

## Features

- **Modern Design**: Clean, professional design with IPPAN brand colors
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Fast Performance**: Built with Vite for optimal development and build performance
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## Pages

- **Home**: Hero section with mission overview and feature cards
- **About**: Detailed information about the foundation, mission, and programs
- **Contact**: Contact information and partnership opportunities
- **Legal**: Terms of use, privacy policy, and intellectual property information

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vite-react
```

2. Install dependencies:
>>>>>>> 3d1a40b3c90f3603c697e9e075d31f7e3b395a0f
```bash
npm install
```

<<<<<<< HEAD
### 3. Set up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run the contents of `supabase-schema.sql`
3. Go to **Authentication > Providers** and enable:
   - Email/Password
   - GitHub OAuth
   - Google OAuth
4. Configure OAuth providers with your app credentials
5. Set the redirect URL to: `https://your-domain.com/auth/callback`

### 4. Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 5. Run Development Server

=======
3. Start the development server:
>>>>>>> 3d1a40b3c90f3603c697e9e075d31f7e3b395a0f
```bash
npm run dev
```

<<<<<<< HEAD
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

## OAuth Setup

### GitHub OAuth

1. Go to GitHub **Settings > Developer settings > OAuth Apps**
2. Create a new OAuth App
3. Set Authorization callback URL: `https://your-supabase-project.supabase.co/auth/v1/callback`
4. Copy Client ID and Secret to Supabase **Authentication > Providers > GitHub**

### Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `https://your-supabase-project.supabase.co/auth/v1/callback`
6. Copy Client ID and Secret to Supabase **Authentication > Providers > Google**

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
=======
4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Technology Stack

- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and development server
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing
>>>>>>> 3d1a40b3c90f3603c697e9e075d31f7e3b395a0f

## Project Structure

```
<<<<<<< HEAD
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
=======
src/
├── components/          # Reusable components
│   └── Layout.tsx      # Main layout component
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── About.tsx       # About page
│   ├── Contact.tsx     # Contact page
│   └── Legal.tsx       # Legal page
├── App.tsx             # Main app component with routing
├── main.tsx            # Application entry point
├── index.css           # Global styles and Tailwind imports
└── App.css             # Component-specific styles
```

## Customization

### Brand Colors

The IPPAN brand colors are defined in `tailwind.config.js`:

- Primary: `#0B7F52` (IPPAN Green)
- Dark: `#095F3E` (Darker Green)
- Light: `#27A379` (Light Green)

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route to `src/App.tsx`
3. Update the navigation in `src/components/Layout.tsx`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions about this website or the IPPAN Foundation, please visit our [Contact page](/contact) or email us at info@ippan.org.
>>>>>>> 3d1a40b3c90f3603c697e9e075d31f7e3b395a0f
