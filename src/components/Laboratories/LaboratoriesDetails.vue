<script>
import { ref } from 'vue';
import { structureDateAndHours } from "../../utils/Utils";
import { getLaboratory } from '../../services/LaboratoriesServices';

export default {
  props: {
    laboratory: String,
  },
  setup(props) {
    const { laboratory: laboratoryId } = props;

		const laboratoryOne = ref([]);

    const getLaboratoryOne = async (id) => {
			try {
				const { data } = await getLaboratory({ laboratoryId: id });
				laboratoryOne.value = data;
			} catch (error) {
				console.log(error);
			}
    };

    getLaboratoryOne(laboratoryId);

		return {
			// variables
			laboratoryOne,

			//Methods
			structureDateAndHours,
	}
  },
};
</script>

<template>
  <div class="p-2 max-h-[32rem] overflow-y-auto">
    <h1 class="font-medium text-[20px]">Laboratory Details <span class="font-light text-[16px]"> #{{ laboratoryOne._id }}</span></h1>
		<div class="flex flex-row py-4 justify-start content-center">
			<div class="flex flex-col gap-y-2">
				<p class="font-light"><span class="font-normal">Protocol:      </span> {{ laboratoryOne.protocol }} </p>
				<p class="font-light"><span class="font-normal">Protocol Type: </span> {{ laboratoryOne.protocol_type }} </p>
				<p class="font-light"><span class="font-normal">Person:        </span> {{ laboratoryOne.person?.name }} </p>
				<p class="font-light"><span class="font-normal">Taken:         </span> {{ structureDateAndHours(laboratoryOne.taken) }} </p>
				<p class="font-light"><span class="font-normal">Received:      </span> {{ structureDateAndHours(laboratoryOne.received) }} </p>
				<p class="font-light"><span class="font-normal">Proccessed:    </span> {{ structureDateAndHours(laboratoryOne.processed) }} </p>
				<p class="font-light"><span class="font-normal">Validated:     </span> {{ structureDateAndHours(laboratoryOne.validated) }} </p>
				<p class="font-light"><span class="font-normal">Resulted:      </span> {{ laboratoryOne.resulted }} </p>
				<p class="font-light"><span class="font-normal">Resulted Type: </span> {{ laboratoryOne.resulted_type }} </p>
				<p class="font-light"><span class="font-normal">Created:       </span> {{ structureDateAndHours(laboratoryOne.created_at) }} </p>
				<p class="font-light"><span class="font-normal">Updated:       </span> {{ structureDateAndHours(laboratoryOne.updated_at) }} </p>
			</div>
		</div>
  </div>
</template>
