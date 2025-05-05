<script>
  import { onMount } from 'svelte';
  import PocketBase from 'pocketbase';
  import Lmap from '$lib/components/map.svelte';

  let uname = "";
  let phonenumber = "";
  let lat = 25.3831; 
  let lon = 49.5864;

  const pb = new PocketBase('http://127.0.0.1:8090');

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name: uname,
      phonenumber: phonenumber,
      home: {
        lon: lon,
        lat: lat
      }
    };

    try {
      const record = await pb.collection('response').create(data);
      console.log("Created record:", record);
    } catch (error) {
      console.error("Failed to create record:", error);
    }
  }
</script>

<div class="flex justify-center items-center w-full h-screen pt-4">
  <form on:submit={handleSubmit} class="w-full max-w-2xl bg-white mt-[20%] sm:mt-[10%] p-6 rounded-xl shadow-md">
    <div class="space-y-6">
      <p class="text-xl text-center">مرحبًا</p>

      <div class="relative w-full">
        <input
          type="text"
          bind:value={uname}
          id="floating_filled"
          class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-blue-600 bg-blue-200 dark:bg-blue-200 border-0 border-b-2 border-blue-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          for="floating_filled"
          class="absolute text-sm text-blue-600 dark:text-blue-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto pr-2"
        >
          الأسم
        </label>
      </div>

      <div class="relative w-full">
        <input
          type="text"
          bind:value={phonenumber}
          id="floating_filled"
          class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-blue-600 bg-blue-200 dark:bg-blue-200 border-0 border-b-2 border-blue-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          for="floating_filled"
          class="absolute text-sm text-blue-600 dark:text-blue-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto pr-2"
        >
          رقم الهاتف
        </label>
      </div>

      <div class="relative w-full h-80 sm:h-96">
        <Lmap bind:lat bind:lon />
      </div>

      <div class="relative w-full">
        <button
          type="submit"
          class="w-full mt-[12%] sm:mt-[8%] bg-blue-600 text-white h-[50px] rounded-lg hover:bg-blue-700 active:bg-blue-800"
        >
          إرسال
        </button>
      </div>
    </div>
  </form>
</div>
