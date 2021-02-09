<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Pokeball',
});
</script>

<template>
  <div class="pokeball">
    <div class="pixel"></div>
  </div>
</template>

<style scoped>
.pokeball {
  width: 12rem;
  height: 12rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}

.pixel {
  width: 1rem;
  height: 1rem;
  box-shadow:
    /* row 1 */ 4rem 0rem 0 -0.05rem #222,
    5rem 0rem 0 -0.05rem #222, 6rem 0rem 0 -0.05rem #222,
    7rem 0rem 0 -0.05rem #222, 2rem 1rem 0 -0.05rem #222,
    3rem 1rem 0 -0.05rem #222, 4rem 1rem 0 -0.05rem #f00,
    5rem 1rem 0 -0.05rem #f00, 6rem 1rem 0 -0.05rem #f00,
    7rem 1rem 0 -0.05rem #f00, 8rem 1rem 0 -0.05rem #222,
    9rem 1rem 0 -0.05rem #222, /* row 3 */ 1rem 2rem 0 -0.05rem #222,
    2rem 2rem 0 -0.05rem #f00, 3rem 2rem 0 -0.05rem #f00,
    4rem 2rem 0 -0.05rem #f00, 5rem 2rem 0 -0.05rem #f00,
    6rem 2rem 0 -0.05rem #f00, 7rem 2rem 0 -0.05rem #f00,
    8rem 2rem 0 -0.05rem #f00, 9rem 2rem 0 -0.05rem #f00,
    10rem 2rem 0 -0.05rem #222, /* row 4 */ 1rem 3rem 0 -0.05rem #222,
    2rem 3rem 0 -0.05rem #f00, 3rem 3rem 0 -0.05rem #f00,
    4rem 3rem 0 -0.05rem #f00, 5rem 3rem 0 -0.05rem #f00,
    6rem 3rem 0 -0.05rem #f00, 7rem 3rem 0 -0.05rem #f00,
    8rem 3rem 0 -0.05rem #f00, 9rem 3rem 0 -0.05rem #f00,
    10rem 3rem 0 -0.05rem #222, /* row 5 */ 0rem 4rem 0 -0.05rem #222,
    1rem 4rem 0 -0.05rem #f00, 2rem 4rem 0 -0.05rem #f00,
    3rem 4rem 0 -0.05rem #f00, 4rem 4rem 0 -0.05rem #f00,
    5rem 4rem 0 -0.05rem #f00, 6rem 4rem 0 -0.05rem #f00,
    7rem 4rem 0 -0.05rem #f00, 8rem 4rem 0 -0.05rem #f00,
    9rem 4rem 0 -0.05rem #f00, 10rem 4rem 0 -0.05rem #f00,
    11rem 4rem 0 -0.05rem #222, /* row 6 */ 0rem 5rem 0 -0.05rem #222,
    1rem 5rem 0 -0.05rem #f00, 2rem 5rem 0 -0.05rem #f00,
    3rem 5rem 0 -0.05rem #f00, 4rem 5rem 0 -0.05rem #f00,
    5rem 5rem 0 -0.05rem #222, 6rem 5rem 0 -0.05rem #222,
    7rem 5rem 0 -0.05rem #f00, 8rem 5rem 0 -0.05rem #f00,
    9rem 5rem 0 -0.05rem #f00, 10rem 5rem 0 -0.05rem #f00,
    11rem 5rem 0 -0.05rem #222, /* row 7 */ 0rem 6rem 0 -0.05rem #222,
    1rem 6rem 0 -0.05rem #222, 2rem 6rem 0 -0.05rem #f00,
    3rem 6rem 0 -0.05rem #f00, 4rem 6rem 0 -0.05rem #222,
    5rem 6rem 0 -0.05rem #fff, 6rem 6rem 0 -0.05rem #fff,
    7rem 6rem 0 -0.05rem #222, 8rem 6rem 0 -0.05rem #f00,
    9rem 6rem 0 -0.05rem #f00, 10rem 6rem 0 -0.05rem #222,
    11rem 6rem 0 -0.05rem #222, /* row 8 */ 0rem 7rem 0 -0.05rem #222,
    1rem 7rem 0 -0.05rem #fff, 2rem 7rem 0 -0.05rem #222,
    3rem 7rem 0 -0.05rem #222, 4rem 7rem 0 -0.05rem #222,
    5rem 7rem 0 -0.05rem #fff, 6rem 7rem 0 -0.05rem #fff,
    7rem 7rem 0 -0.05rem #222, 8rem 7rem 0 -0.05rem #222,
    9rem 7rem 0 -0.05rem #222, 10rem 7rem 0 -0.05rem #fff,
    11rem 7rem 0 -0.05rem #222, /* row 9 */ 0rem 8rem 0 -0.05rem #fff,
    1rem 8rem 0 -0.05rem #222, 2rem 8rem 0 -0.05rem #fff,
    3rem 8rem 0 -0.05rem #fff, 4rem 8rem 0 -0.05rem #fff,
    5rem 8rem 0 -0.05rem #222, 6rem 8rem 0 -0.05rem #222,
    7rem 8rem 0 -0.05rem #fff, 8rem 8rem 0 -0.05rem #fff,
    9rem 8rem 0 -0.05rem #fff, 10rem 8rem 0 -0.05rem #222,
    1rem 9rem 0 -0.05rem #222, 2rem 9rem 0 -0.05rem #fff,
    3rem 9rem 0 -0.05rem #fff, 4rem 9rem 0 -0.05rem #fff,
    5rem 9rem 0 -0.05rem #fff, 6rem 9rem 0 -0.05rem #fff,
    7rem 9rem 0 -0.05rem #fff, 8rem 9rem 0 -0.05rem #fff,
    9rem 9rem 0 -0.05rem #fff, 10rem 9rem 0 -0.05rem #222,
    11rem 9rem 0 -0.05rem #fff, /* row 11 */ 0rem 10rem 0 -0.05rem #fff,
    1rem 10rem 0 -0.05rem #fff, 2rem 10rem 0 -0.05rem #222,
    3rem 10rem 0 -0.05rem #222, 4rem 10rem 0 -0.05rem #fff,
    5rem 10rem 0 -0.05rem #fff, 6rem 10rem 0 -0.05rem #fff,
    7rem 10rem 0 -0.05rem #fff, 8rem 10rem 0 -0.05rem #222,
    9rem 10rem 0 -0.05rem #222, 4rem 11rem 0 -0.05rem #222,
    5rem 11rem 0 -0.05rem #222, 6rem 11rem 0 -0.05rem #222,
    7rem 11rem 0 -0.05rem #222;
}
</style>
