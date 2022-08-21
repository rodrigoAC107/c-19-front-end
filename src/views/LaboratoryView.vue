<template>
  <LayoutVertical>
    <h1>Laboratory</h1>
    <div class="flex w-full min-h-full justify-center content-center mb-3">
      <div class="flex justify-start space-x-2 pl-14 w-2/12">
        <p class="mt-1">Mostrar: </p>
        <select v-model="show" @change="changeShow" class="bg-white border border-gray-200 outline-1 w-full outline-gray-100 rounded-lg p-1">
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
            @keydown.enter="changeShow"
          />
          <SearchIcon class="h-5 w-5 absolute top-2 right-2"/>
        </div>
        <!-- Modal Start -->
        <Modal>
          <template v-slot:form>
            <div class="p-2">
              <h1>Filtro de búsqueda</h1>
              <div class="flex flex-col flex-wrap space-y-4">
                <input
                  class="border border-gray-200 outline-1 outline-gray-100 rounded-lg p-1"
                  placeholder="Protocol..."
                  type="text"
                />
                <input
                  class="border border-gray-200 outline-1 outline-gray-100 rounded-lg p-1"
                  placeholder="Person..."
                  type="text"
                />
                <select
                  class="border border-gray-200 outline-1 w-full outline-gray-100 rounded-lg p-1"
                >
                  <option value="1">Covid 19</option>
                  <option value="2">Fluenza</option>
                  <option value="3">Dengue</option>
                  <option value="4">No sé</option>
                </select>
                <input
                  class="border border-gray-200 outline-1 outline-gray-100 rounded-lg p-1"
                  placeholder="Resulted..."
                  type="text"
                />
              </div>
            </div>
          </template>
        </Modal>
        <!-- Modal end -->
      </div>
    </div>
    <div class="flex w-full min-h-full justify-center content-center">
      <div class="bg-white w-11/12 rounded-lg shadow-xl shadow-gray-400">
        <table class="table-auto w-full h-1/2 text-center rounded-t-lg">
          <thead class="bg-sky-300 rounded-t-lg">
            <tr>
              <th
                class="text-sky-800 hover:text-white hover:cursor-pointer p-2 rounded-tl-lg"
              >
                Protocol
              </th>
              <th
                class="text-sky-800 hover:text-white hover:cursor-pointer p-2"
              >
                Person
              </th>
              <th
                class="text-sky-800 hover:text-white hover:cursor-pointer p-2"
              >
                Taken
              </th>
              <th
                class="text-sky-800 hover:text-white hover:cursor-pointer p-2"
              >
                Received
              </th>
              <th
                class="text-sky-800 hover:text-white hover:cursor-pointer p-2"
              >
                Processed
              </th>
              <th
                class="text-sky-800 hover:text-white hover:cursor-pointer p-2"
              >
                Validated
              </th>
              <th
                class="text-sky-800 hover:text-white hover:cursor-pointer p-2 rounded-tr-lg"
              >
                Resulted
              </th>
            </tr>
          </thead>
          <tbody class="divide-y-2 divide-gray-200">
            <tr v-for="data in laboratoriesData" :key="data._id" class="h-12 hover:bg-sky-100 hover:cursor-pointer">
              <td>
                {{ data.protocol }} <br />
                <small>{{ data.protocol_type }}</small>
              </td>
              <td>
                {{ data.person.name }} <br />
                <small>{{ data.person.province }} - {{ data.person.location }}</small>
              </td>
              <td>{{ data.taken }}</td>
              <td>{{ data.received }}</td>
              <td>{{ data.processed }}</td>
              <td>{{ data.validated }}</td>
              <td>
                {{ data.resulted }} <br />
                <small>{{ data.resulted_type }}</small>
              </td>
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
import { FilterIcon, SearchIcon } from "@heroicons/vue/outline";
import Modal from "../components/Modal.vue";
import Pagination from "../components/Pagination.vue"
import LayoutVertical from "../layout/LayoutVertical.vue";
import useLaboratories from "../composables/useLaboratory";
export default {
  components: {
    FilterIcon,
    SearchIcon,
    Modal,
    LayoutVertical,
    Pagination
  },
  setup() {
    const { getLaboratoriesAll, laboratoryFormatTime } = useLaboratories();
    const laboratoriesData = ref([]);
    const totalData = ref(0);
    const show = ref(10);
    const pageData = ref(1);
    const countPageData = ref(1);
    const search = ref(null);
    const isLoading = ref(true);

    const loadData = async () => {
      isLoading.value = true;
      const { data } = await getLaboratoriesAll({});
      const { laboratories, total, page, count_pages } = data;

      laboratoriesData.value = laboratories.map((laboratory) => {
        return laboratoryFormatTime(laboratory);
      });
      totalData.value = total;
      pageData.value = page;
      countPageData.value = count_pages;
      isLoading.value = false;
    };


    const changeShow = async (e) => {
      isLoading.value = true;
      let newPage = typeof e === 'object' ? 1 : e;
      const { data } = await getLaboratoriesAll({show: show.value, search: search.value, page: newPage});
      const { laboratories, total, page, count_pages } = data;


      laboratoriesData.value = laboratories.map((laboratory) => {
        return laboratoryFormatTime(laboratory);
      });
      totalData.value = total;
      pageData.value = page;
      countPageData.value = count_pages;
      isLoading.value = false;
    }

    loadData();

    return {
      laboratoriesData,
      totalData,
      pageData,
      countPageData,
      show,
      search,
      isLoading,

      //methods
      changeShow
    }
  },
};
</script>
