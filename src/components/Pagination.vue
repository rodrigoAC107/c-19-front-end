<template>
  <div class="bg-white w-full mx-14 px-4 py-3 flex items-center justify-between border-t rounded-lg border-gray-200 sm:px-6">
    <div class="flex-1 flex justify-between sm:hidden">
      <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </a>
      <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </a>
    </div>
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Mostrando
          <span class="font-medium">{{ show }}</span>
          {{ ' ' }}
          registros de un total de 
          <span class="font-medium">{{ total }}</span>
        </p>
      </div>
      <div>
        <div class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
          <button @click="prevPage" :disabled="page === 1 ? true : false" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 hover:cursor-pointer">
            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
          </button>
          <span class="z-10 bg-sky-50 border-sky-500 text-sky-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> {{ page }} </span>
          <button @click="nextPage" :disabled="page === countPage ? true : false" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 hover:cursor-pointer">
            <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid'

export default {
  name: 'Pagination',
  props: {
    page: Number,
    countPage: Number,
    total: Number,
    show: Number
  },
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },
  emits: ['nextPage', 'prevPage'],
  setup({total, page, countPage}, { emit }) {

    const nextPage = page < countPage ? page + 1 : page;
    const prevPage = page === 1 ? page : page - 1;

    return {
      countPage,
      page,

      nextPage: () => { emit('nextPage', nextPage); },
      prevPage: () => { emit('prevPage', prevPage); }
    };
  }
}
</script>