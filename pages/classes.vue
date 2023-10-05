<template>
  <div class="mx-auto text-center leading-10">
    <!-- OBJECT CLASSES  -->
    <div
      class="text-blue-500 font-bold text-xl text-center p-10"
      :class="{ hover: object.isActive, 'text-red-600': object.hasError }"
    >
      INI CLASSES
    </div>
    <!-- atau dirender di js script -->
    <div :class="object.classObject">Hellow C2</div>

    <!-- ARRAY CLASSES  -->
    <div>
      <div :class="[array.activeClass, array.errorClass]">Array h1</div>
      <div :class="[object.isActive ? array.activeClass : 'font-mono', array.errorClass]">Heelo Ternary Condiiton</div>
    </div>

    <!-- INLINE STYLES PROPERTY -->
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">INLINE CLASSES</div>
    <!-- CLEAN SYNTAX -->
    <div :style="styleObject">OBJECT INLINE CLASSES</div>
    <!-- Array ultiple  -->
    <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      styleObject: {
      color: 'blue',
      fontSize: '13px'
      },

      // Inline variables
      activeColor: 'red',
      fontSize: 20,

      array: {
        activeClass: 'text-blue-500',
        errorClass: 'font-bold'
      },
      // data adalah object
      object: {
        isActive: false,
        hasError: true,

        classObject: {
          'text-red-500': true,
          'font-bold': false,
        },
      },
    }
  },
}
</script>