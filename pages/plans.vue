<template>
  <PlansHero />
  <PlansList />
</template>
<script>
export default defineNuxtComponent({
  head(nuxtApp) {
    return {
      title: 'Obboco | Plans',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'Obboco',
          name: 'description',
          content:
            'Obboco helps you to manage your activities, bookings, customers and revenue for free.'
        }
      ],
      link: [{ rel: 'icon', type: 'image/svg', href: '/favicon.ico' }]
    };
  }
});
</script>
