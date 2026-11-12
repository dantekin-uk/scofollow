/**
 * Central configuration for the Scoreline Insurance Brokers
 * "Follow & Win" campaign.
 *
 * Update the social media links and handles below.
 */

export const BRAND = {
  name: 'Scoreline Insurance Brokers',
  shortName: 'Scoreline',
  tagline: 'Cover that keeps you ahead.',
  supportEmail: 'info@scoreline.co.ke',
  logo: `${import.meta.env.BASE_URL}logo.png`,
}

/**
 * Social pages participants must follow to qualify for the weekly draw.
 * Replace the `url` values with the official Scoreline pages.
 */
export const SOCIALS = [
  {
    key: 'instagram',
    label: 'Instagram',
    handle: '@scorelineinsurancebrokers',
    url: 'https://www.instagram.com/scorelineinsurancebrokers/',
    // brand colours used for the button hover / icon
    tint: '#e1306c',
  },
  {
    key: 'facebook',
    label: 'Facebook',
    handle: 'Scoreline Insurance Brokers',
    url: 'https://web.facebook.com/profile.php?id=61560721971232',
    tint: '#1877f2',
  },
  {
    key: 'tiktok',
    label: 'TikTok',
    handle: '@scorelinebrokers',
    url: 'https://www.tiktok.com/@scorelinebrokers',
    tint: '#010101',
  },
  {
    key: 'x',
    label: 'X',
    handle: '@ScorelineI',
    url: 'https://x.com/ScorelineI',
    tint: '#000000',
  },
]

/**
 * Final deployed URL the QR code always points to. Fixed in code so it is the
 * same everywhere and can never be changed by visitors.
 */
export const PUBLIC_BASE_URL = 'https://scofollow-a3pb.vercel.app'

/** Path of the participant landing page (hash route). */
export const ENTRY_PATH = '/follow'
