<template>
  <LayoutVertical>
    <div class="flex w-full min-h-full justify-center content-center mb-3">
      <div class="flex justify-start space-x-2 pl-14 w-2/12">
        <p class="mt-1">Mostrar:</p>
        <select
          v-model="show"
          @change="changeShow"
          class="bg-white border border-gray-200 outline-1 w-full outline-gray-100 rounded-lg p-1"
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
      <div class="flex w-11/12 justify-end w-full space-x-2 pr-14">
        <div class="relative">
          <input
            class="outline-0 rounded-lg p-1 px-2"
            type="text"
            placeholder="Name..."
            v-model="search"
            @keyup.enter="changeShow"
          />
          <SearchIcon
            class="h-5 w-5 absolute top-2 right-2"
          />
        </div>
        <!-- Modal Start -->
        <Modal>
          <template v-slot:form>
            <div class="p-2">
              <h1>Filtro de búsqueda</h1>
              <div class="flex flex-col flex-wrap space-y-4">
                <input
                  class="border border-gray-200 outline-1 outline-gray-100 rounded-lg p-1"
                  placeholder="Person..."
                  type="text"
                />
                <select
                  class="bg-white border border-gray-200 outline-1 w-full outline-gray-100 rounded-lg p-1"
                >
                  <option value="1">Covid 19</option>
                  <option value="2">Fluenza</option>
                  <option value="3">Dengue</option>
                  <option value="4">No sé</option>
                </select>
                <input
                  class="border border-gray-200 outline-1 outline-gray-100 rounded-lg p-1"
                  placeholder="Current State..."
                  type="text"
                />
                <input
                  class="border border-gray-200 outline-1 outline-gray-100 rounded-lg p-1"
                  placeholder="Triage..."
                  type="text"
                />
              </div>
            </div>
          </template>
        </Modal>
        <!-- Modal end -->
      </div>
    </div>
    <div v-if="!isLoading" class="flex w-full min-h-full justify-center content-center">
      <div class="bg-white w-11/12 rounded-lg shadow-xl shadow-gray-400">
        <table class="table-auto w-full h-1/2 text-center rounded-t-lg">
          <thead class="bg-sky-300 rounded-t-lg">
            <tr>
              <th
                class="text-sky-800 hover:text-white hover:cursor-pointer p-2 rounded-tl-lg"
              >
                #
              </th>
              <th
                class="text-sky-800 hover:text-white hover:cursor-pointer p-2"
              >
                Person
              </th>
              <th
                class="text-sky-800 hover:text-white hover:cursor-pointer p-2"
              >
                Type
              </th>
              <th
                class="text-sky-800 hover:text-white hover:cursor-pointer p-2"
              >
                Current State
              </th>
              <th
                class="text-sky-800 hover:text-white hover:cursor-pointer p-2"
              >
                Age
              </th>
              <th
                class="text-sky-800 hover:text-white hover:cursor-pointer p-2"
              >
                Triage
              </th>
              <th
                class="text-sky-800 hover:text-white hover:cursor-pointer p-2 rounded-tr-lg"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="divide-y-2 divide-gray-200">
            <tr
              v-for="data in casesData"
              :key="data._id"
              class="h-11 hover:bg-sky-100 hover:cursor-pointer"
            >
              <td class="p-1">{{ data._id }}</td>
              <td class="p-1">{{ data.name }}</td>
              <td class="p-1">{{ data.current_state_type }}</td>
              <td class="p-1">{{ data.current_state }}</td>
              <td class="p-1">{{ data.age }} años</td>
              <td class="p-1">{{ data.triage }}</td>
              <td class="flex justify-center p-1 pt-2"><img class="h-5 w-5" :src="Eye" alt="icon-eye"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-if="!isLoading" class="flex w-full min-h-full justify-center content-center mt-4">
      <Pagination :countPage=countPageData :page=pageData :total=totalData :show=Number(show) @nextPage="changeShow" @prevPage="changeShow"/>
    </div>
  </LayoutVertical>
</template>

<script>
import { ref } from "vue";
import Pagination from "../components/Pagination.vue"
import { SearchIcon } from "@heroicons/vue/outline";
import Modal from "../components/Modal.vue";
import LayoutVertical from "../layout/LayoutVertical.vue";
import useCases from "../composables/useCases";
import Eye from "../utils/Icons/Eye.svg";
export default {
  components: {
    Modal,
    SearchIcon,
    LayoutVertical,
    Pagination
  },
  setup() {
    const { getCasesAll } = useCases();
    const casesData = ref([]);
    const totalData = ref(0);
    const show = ref(10);
    const pageData = ref(1);
    const countPageData = ref(1);
    const search = ref(null);
    const isLoading = ref(true);

    const loadData = async () => {
      isLoading.value = true;
      const { data } = await getCasesAll({});
      const { cases, total, page, count_pages } = data;

      casesData.value = cases;
      totalData.value = total;
      pageData.value = page;
      countPageData.value = count_pages;
      isLoading.value = false;
    };

    const changeShow = async (e) => {
      isLoading.value = true;
      let newPage = typeof e === 'object' ? 1 : e;
      const { data } = await getCasesAll({show: show.value, search: search.value, page: newPage});
      const { cases, total, page, count_pages } = data;
      casesData.value = cases;
      totalData.value = total;
      pageData.value = page;
      countPageData.value = count_pages;
      isLoading.value = false;
    };

    loadData();

    return {
      casesData,
      totalData,
      pageData,
      countPageData,
      show,
      search,
      isLoading,

      //Methods
      changeShow,

      //Icons
      Eye
    };
  },
};
</script>