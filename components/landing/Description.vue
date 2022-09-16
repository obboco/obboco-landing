<template>
  <div class="min-h-screen flex justify-center">
    <div
      class="p-4 grid grid-cols-1 md:grid-cols-2 gap-4"
      style="width: 1200px"
    >
      <div class="p-4 leading-relaxed antialiased flex flex-col justify-center">
        <p class="text-gray-600 text-4xl lg:text-5xl font-bold">
          Your activites, bookings and customers under control.
        </p>
        <p class="text-gray-900 text-xl font-bold mt-4">
          Create your own activities. Add your customers and guest. Plan your
          events in seconds. Match and book your daily events with your
          customer.
        </p>
      </div>
      <div>
        <div class="olele">
          <img
            class="img"
            src="~/assets/img/description-1.png"
            alt="Obboco activity page"
          />
        </div>
      </div>
      <div>
        <div class="olele2">
          <img
            class="img2"
            src="~/assets/img/description-2.png"
            alt="Obboco activity page"
          />
        </div>
      </div>
      <div class="p-4 leading-relaxed antialiased flex flex-col justify-center">
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
.olele {
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
.img {
  @apply rounded-lg shadow-lg;
  width: 61%;
  position: absolute;
  top: 8%;
  transform: translateX(10vw);
}

.olele2 {
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
.img2 {
  @apply rounded-lg shadow-lg;
  width: 61%;
  position: absolute;
  top: 8%;
  transform: translateX(0vw);
}
</style>
