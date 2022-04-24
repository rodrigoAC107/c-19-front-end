<template>
  <LayoutVertical>
    <h1>Cases</h1>
    <div class="flex w-full min-h-full justify-center content-center mb-3">
      <div class="flex w-11/12 justify-end w-full space-x-2">
        <div class="relative">
          <input
            class="outline-0 rounded-lg p-1 px-2"
            type="text"
          />
          <SearchIcon class="h-5 w-5 absolute top-2 right-2 hover:cursor-pointer"/>
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
                  class="border border-gray-200 outline-1 w-full outline-gray-100 rounded-lg p-1"
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
    <div class="flex w-full min-h-full justify-center content-center">
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
                class="text-sky-800 hover:text-white hover:cursor-pointer p-2 rounded-tr-lg"
              >
                Triage
              </th>
            </tr>
          </thead>
          <tbody class="divide-y-2 divide-gray-200">
            <tr class="h-12 hover:bg-sky-100 hover:cursor-pointer">
              <td class="p-2">1</td>
              <td class="p-2">Rodrigo Acosta</td>
              <td class="p-2">Covid 19</td>
              <td class="p-2">Descartado</td>
              <td class="p-2">26 años</td>
              <td class="p-2">CRITICO</td>
            </tr>
            <tr class="h-12 hover:bg-sky-100 hover:cursor-pointer">
              <td class="p-2">1</td>
              <td class="p-2">Rodrigo Acosta</td>
              <td class="p-2">Covid 19</td>
              <td class="p-2">Descartado</td>
              <td class="p-2">26 años</td>
              <td class="p-2">CRITICO</td>
            </tr>
            <tr class="h-12 hover:bg-sky-100 hover:cursor-pointer">
              <td class="p-2">1</td>
              <td class="p-2">Rodrigo Acosta</td>
              <td class="p-2">Covid 19</td>
              <td class="p-2">Descartado</td>
              <td class="p-2">26 años</td>
              <td class="p-2">CRITICO</td>
            </tr>
            <tr class="h-12 hover:bg-sky-100 hover:cursor-pointer">
              <td class="p-2">1</td>
              <td class="p-2">Rodrigo Acosta</td>
              <td class="p-2">Covid 19</td>
              <td class="p-2">Descartado</td>
              <td class="p-2">26 años</td>
              <td class="p-2">CRITICO</td>
            </tr>
            <tr class="h-12 hover:bg-sky-100 hover:cursor-pointer">
              <td class="p-2">1</td>
              <td class="p-2">Rodrigo Acosta</td>
              <td class="p-2">Covid 19</td>
              <td class="p-2">Descartado</td>
              <td class="p-2">26 años</td>
              <td class="p-2">CRITICO</td>
            </tr>
            <tr class="h-12 hover:bg-sky-100 hover:cursor-pointer">
              <td class="p-2">1</td>
              <td class="p-2">Rodrigo Acosta</td>
              <td class="p-2">Covid 19</td>
              <td class="p-2">Descartado</td>
              <td class="p-2">26 años</td>
              <td class="p-2">CRITICO</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </LayoutVertical>
</template>

<script>
import { SearchIcon } from '@heroicons/vue/outline'
import Modal from "../components/Modal.vue";
import LayoutVertical from "../layout/LayoutVertical.vue";
export default {
  components: {
    Modal,
    SearchIcon,
    LayoutVertical,
  },
  setup() {},
};
</script>
