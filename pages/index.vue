<template>
  <LandingHero />
  <LandingFeatures />
  <LandingDescription />
  <LandingPostHero />
</template>
<script>
export default {
  head: {
    title: 'Obboco',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'Obboco',
        name: 'description',
        content:
          'Obboco helps you to manage your activities, bookings, customers and revenue with no effort and free'
      }
    ],
    link: [{ rel: 'icon', type: 'image/svg', href: '/favicon.ico' }]
  }
};
</script>
