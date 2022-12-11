<template>
  <div class="min-h-screen flex justify-center">
    <div
      class="p-4 grid grid-cols-1 md:grid-cols-2 gap-4"
      style="width: 1200px"
    >
      <div
        class="p-4 leading-relaxed antialiased flex flex-col justify-center order-1 lg:order-1"
      >
        <p class="text-gray-600 text-4xl lg:text-5xl font-bold">
          Your activites, bookings and customers under control.
        </p>
        <p class="text-gray-900 text-xl font-bold mt-4">
          Create your own activities. Add your customers and guest. Plan your
          events in seconds. Match and book your daily events with your
          customer.
        </p>
      </div>
      <div class="flex justify-center order-2 lg:order-2">
        <iframe
          width="400"
          height="655"
          src="https://www.loom.com/embed/93756581ebc24c1984b1f2c8b24b09b6"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe>
      </div>
      <div class="flex justify-center order-4 lg:order-3">
        <iframe
          width="400"
          height="655"
          src="https://www.loom.com/embed/a05d742de4fa48e38861bd038dc2b67a"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe>
      </div>
      <div
        class="p-4 leading-relaxed antialiased flex flex-col justify-center order-3 lg:order-4"
      >
        <p class="text-gray-600 text-4xl lg:text-5xl font-bold">
          Check your revenue, fast.
        </p>
        <p class="text-gray-900 text-xl font-bold mt-4">
          Sell bookings or passes. Check you monthly revenue. Download your
          income to create invoices and declare taxes with ease in a few
          minutes!
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bookings {
  width: 100%;
  height: 680px;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  isolation: isolate;
  max-width: 1100px;
  background: rgb(200, 157, 88);
  background: linear-gradient(
    297deg,
    rgba(200, 157, 88, 1) 0%,
    rgba(224, 199, 160, 1) 21%,
    rgba(249, 250, 251, 1) 100%
  );
}
.bookings-img {
  @apply rounded-lg shadow-lg;
  width: 61%;
  position: absolute;
  top: 8%;
  transform: translateX(10vw);
}

.wallet {
  width: 100%;
  height: 680px;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  isolation: isolate;
  max-width: 1100px;
  background: rgb(203, 124, 122);
  background: linear-gradient(
    94deg,
    rgba(203, 124, 122, 1) 0%,
    rgba(215, 156, 154, 1) 18%,
    rgba(249, 250, 251, 1) 100%
  );
}
.wallet-img {
  @apply rounded-lg shadow-lg;
  width: 61%;
  position: absolute;
  top: 8%;
  transform: translateX(0vw);
}
</style>
