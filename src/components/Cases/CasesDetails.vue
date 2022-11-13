<script>
import { ref } from 'vue';
import { getCase } from "../../services/CasesServices";
import { structureDateAndHours } from "../../utils/Utils";

export default {
  props: {
    case: String,
  },
  setup(props) {
    const { case: caseId } = props;

		const caseOne = ref([]);

    const getCaseOne = async (id) => {
			try {
				const { data } = await getCase({ caseId: id });
				caseOne.value = data;
			} catch (error) {
				console.log(error);
			}
    };

		getCaseOne(caseId);

		return {
			// variables
			caseOne,

			//Methods
			structureDateAndHours,
		}
  },
};
</script>

<template>
  <div class="p-2 max-h-[32rem] overflow-y-auto">
    <h1 class="font-medium text-[20px]">Cases Details <span class="font-light text-[16px]"> #{{ caseOne._id }}</span></h1>
		<div class="flex flex-row py-4 justify-start content-center">
			<div class="flex flex-col gap-y-2">
				<p class="font-light"><span class="font-normal">Age:</span> {{ caseOne.age }} </p>
				<p class="font-light"><span class="font-normal">Apartament:</span> {{ caseOne.apartament }} </p>
				<p class="font-light"><span class="font-normal">Birdth Day:</span> {{ structureDateAndHours(caseOne.birthday_date) }} </p>
				<p class="font-light"><span class="font-normal">Created:</span> {{ structureDateAndHours(caseOne.created_at) }} </p>
				<p class="font-light"><span class="font-normal">Current State:</span> {{ caseOne.current_state }} </p>
				<p class="font-light"><span class="font-normal">Current State Type:</span> {{ caseOne.current_state_type }} </p>
				<p class="font-light"><span class="font-normal">Deleted:</span> {{ structureDateAndHours(caseOne.deleted_at )}} </p>
				<p class="font-light"><span class="font-normal">Email:</span> {{ caseOne.email }} </p>
				<p class="font-light"><span class="font-normal">Estate:</span> {{ caseOne.estate }} </p>
				<p class="font-light"><span class="font-normal">Location:</span> {{ caseOne.location }} </p>
				<p class="font-light"><span class="font-normal">Name:</span> {{ caseOne.name }} </p>
				<p class="font-light"><span class="font-normal">Nationality:</span> {{ caseOne.nationality }} </p>
				<p class="font-light"><span class="font-normal">Phone:</span> {{ caseOne.phone }} </p>
				<p class="font-light"><span class="font-normal">Postal Code:</span> {{ caseOne.postal_code }} </p>
				<p class="font-light"><span class="font-normal">Province:</span> {{ caseOne.province }} </p>
				<p class="font-light"><span class="font-normal">Street:</span> {{ caseOne.street }} </p>
				<p class="font-light"><span class="font-normal">Triage:</span> {{ caseOne.triage }} </p>
				<p class="font-light"><span class="font-normal">Updated:</span> {{ structureDateAndHours(caseOne.updated_at) }} </p>
			</div>
		</div>
  </div>
</template>
