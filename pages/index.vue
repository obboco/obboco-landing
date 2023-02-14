<template>
  <LandingHero />
  <LandingFeatures />
  <LandingDescription />
  <LandingPostHero />
</template>
<script>
export default {
  head: {
    title: 'Obboco.com | Open Source booking system',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'Obboco',
        name: 'description',
        content:
          'Open source booking system: Obboco.com helps you to manage your activities, bookings, customers and revenue with no effort. Free for individuals and Open Source'
      },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', content: 'https:obboco.com' },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Obboco.com | Open Source booking system'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Open source booking system: Obboco.com helps you to manage your activities, bookings, customers and revenue with no effort. Free for individuals and open source'
      },
      { hid: 'og:url', name: 'og:url', content: 'https:obboco.com' }
    ],
    link: [{ rel: 'icon', type: 'image/svg', href: '/favicon.ico' }]
  }
};
</script>
