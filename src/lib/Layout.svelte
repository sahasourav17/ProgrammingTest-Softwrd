<script>
</script>

<div class="h-screen w-screen">
  <div class="grid grid-cols-6 h-full">
    <!-- First 6x6 layout -->
    <div
      class="col-span-6 md:col-span-3 bg-gray-200 relative flex flex-col h-full"
    >
      <!-- Container for 5x2 and 5x4 parts -->
      <div class="grid grid-cols-6 h-full">
        <!-- 5x2 part -->
        <div class="col-span-5 md:col-span-2 bg-red-200 h-full">
          <!-- sec1 -->
          <div class="grid grid-cols-3 md:grid-cols-2 bg-blue-400 h-3/5">
            <div
              class="col-span-3 w-full h-full flex items-center justify-center"
            >
              (3x2) grid
            </div>
          </div>
          <!-- sec2 -->
          <div class="grid grid-cols-2 md:grid-cols-2 bg-teal-400 h-2/5">
            <div
              class="col-span-2 w-full h-full flex items-center justify-center"
            >
              (2x2) grid
            </div>
          </div>
        </div>
        <!-- 5x4 part -->
        <div
          class="col-span-5 md:col-span-4 bg-rose-100 h-full flex items-center justify-center"
        >
          (5x4) grid
        </div>
      </div>
      <!-- 1x6 part at the bottom -->
      <div
        class="col-span-6 md:col-span-6 bg-fuchsia-400 h-1/6 flex items-center justify-center"
      >
        bottom (1x6) grid
      </div>
    </div>

    <!-- Second 6x6 layout -->
    <div class="col-span-6 md:col-span-3 bg-blue-200 h-full flex flex-col">
      <!-- Top portion of 2x6 size -->
      <div class="h-2/6 bg-blue-400 flex items-center justify-center">
        <p>Top (2x6) grid</p>
      </div>
      <!-- 4x6 grid-->
      <div class="grid grid-cols-3 h-4/6">
        <!-- 4x4 grid -->
        <div class="col-span-2 bg-yellow-100 flex items-center justify-center">
          <div class="rectangle">
            <div class="circle">
              <div class="mountain" />
              <div class="mountain" />
            </div>
          </div>
        </div>
        <!-- 4x2 grid -->
        <div class="col-span-1 bg-emerald-400 flex items-center justify-center">
          (4x2) grid
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .rectangle {
    width: 300px;
    height: 300px;
    background-color: #293462;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    z-index: 2;
    position: relative;
  }

  .circle {
    width: 200px;
    height: 200px;
    background-color: rgb(254 249 195);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    z-index: 1;
    /* background-clip: content-box; */
  }

  .mountain {
    width: 140px;
    height: 120px;
    background-color: #fe5f55;
    position: absolute;
    bottom: 0;
    transform-origin: center bottom;
  }

  .mountain:nth-child(1) {
    transform: rotate(45deg);
  }

  .mountain:nth-child(2) {
    transform: rotate(-50deg);
    bottom: -40px;
    translate: -20px;
  }
</style>
