'use client';

import { useEffect } from 'react';

function getDeviceInfo() {
  if (typeof navigator === 'undefined') {
    return { os: 'Unknown OS', browser: 'Unknown Browser', deviceType: 'Desktop' };
  }

  const ua = navigator.userAgent;

  // Operating System
  let os = 'Unknown OS';
  if (/Windows/i.test(ua)) os = 'Windows';
  else if (/Android/i.test(ua)) os = 'Android';
  else if (/iPhone|iPad|iPod/i.test(ua)) os = 'iOS';
  else if (/Mac/i.test(ua)) os = 'macOS';
  else if (/Linux/i.test(ua)) os = 'Linux';

  // Browser
  let browser = 'Unknown Browser';
  if (/Edg\//i.test(ua)) browser = 'Edge';
  else if (/Chrome\//i.test(ua) && !/Edg\//i.test(ua)) browser = 'Chrome';
  else if (/Safari\//i.test(ua) && !/Chrome\//i.test(ua)) browser = 'Safari';
  else if (/Firefox\//i.test(ua)) browser = 'Firefox';
  else if (/OPR\//i.test(ua) || /Opera/i.test(ua)) browser = 'Opera';

  // Device Type
  let deviceType = 'Desktop';
  if (/Mobi|Android|iPhone/i.test(ua)) deviceType = 'Mobile';
  else if (/iPad|Tablet/i.test(ua)) deviceType = 'Tablet';

  return { os, browser, deviceType };
}

export default function VisitorNotifier() {
  useEffect(() => {
    // Only run in the browser
    if (typeof window === 'undefined') return;

    // Skip localhost and dev servers to avoid self-alerting
    const isLocalhost =
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1' ||
      window.location.hostname.endsWith('.local') ||
      process.env.NODE_ENV === 'development';

    if (isLocalhost) return;

    // Skip automated crawlers/bots
    if (navigator.webdriver) return;

    // Prevent duplicate notifications in the same browser session
    const SESSION_KEY = 'portfolio_visit_notified';
    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, '1');

    try {
      const topic = process.env.NEXT_PUBLIC_NTFY_TOPIC || '712004_Abhi';
      const { os, browser, deviceType } = getDeviceInfo();
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Unknown';
      const referrer = document.referrer ? new URL(document.referrer).hostname : 'Direct / Bookmark';
      const search = window.location.search;
      const screenSize = `${window.screen?.width || 0}x${window.screen?.height || 0}`;
      const language = navigator.language || 'Unknown';

      const details = [
        `📍 Timezone: ${timeZone}`,
        `🔗 Source: ${referrer}`,
        ...(search ? [`🏷️ Query: ${search}`] : []),
        `💻 Device: ${deviceType} (${os} · ${browser})`,
        `📐 Screen: ${screenSize}`,
        `🌐 Language: ${language}`,
      ].join('\n');

      fetch(`https://ntfy.sh/${topic}`, {
        method: 'POST',
        headers: {
          Title: '🎮 New Portfolio Visit!',
          Priority: '3',
          Tags: 'eyes,rocket',
        },
        body: details,
      }).catch(() => {
        // Silently ignore network failures to never disrupt visitor UX
      });
    } catch {
      // Silently catch unexpected errors
    }
  }, []);

  return null;
}
