import type { Metadata } from 'next'
import ForumClient from './ForumClient'

export const metadata: Metadata = {
  title: 'IPPAN Community Forum',
  description:
    'Participate in the IPPAN Foundation forum to discuss protocol research, builder integrations, governance proposals, and infrastructure best practices.',
  alternates: {
    canonical: '/forum',
  },
  openGraph: {
    title: 'IPPAN Community Forum',
    description:
      'Join technical leaders, node operators, and community members collaborating on the IPPAN Network.',
    url: '/forum',
  },
  twitter: {
    title: 'IPPAN Community Forum',
    description:
      'Collaborate with the IPPAN Network community on research, integrations, and governance priorities.',
  },
}

export default function ForumPage() {
  return <ForumClient />
}
