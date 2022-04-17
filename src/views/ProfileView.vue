<template>
    <LayoutVertical>
        <h1>Profile</h1>

        <div class="flex flex-row my-2 justify-center content-center">
            <form @submit.prevent="editUser" class="text-center w-1/2 p-4 space-y-4 bg-white rounded-xl" autocomplete="off">
                <div>
                    <input v-model="user.name" type="text" autocomplete="off" placeholder="Name" class="border border-gray-300 rounded-md px-2 outline-gray-300 w-1/2">
                </div>
                <div>
                    <input v-model="user.email" type="email" autocomplete="off" placeholder="Email" class="border border-gray-300 rounded-md px-2 outline-gray-300 w-1/2">
                </div>
                <div>
                    <input v-model="user.password" type="password" autocomplete="off" placeholder="Password" class="border border-gray-300 rounded-md px-2 outline-gray-300 w-1/2">
                </div>
                <div>
                    <input v-model="user.confirmPassword" type="password" autocomplete="off" placeholder="Confirm Password" class="border border-gray-300 rounded-md px-2 outline-gray-300 w-1/2">
                </div>
                <div>
                    <button type="submit" class="bg-blue-400 text-white p-2 w-1/2 rounded-lg hover:bg-blue-600">Submit</button>
                </div>
            </form>
        </div>
    </LayoutVertical>
</template>

<script>
import { ref } from "vue";
import useAuth from '../composables/useAuth';
import LayoutVertical from '../layout/LayoutVertical.vue'
export default {
    components: {
        LayoutVertical
    },
    setup() {
        const { getUser } = useAuth();
        const user = ref([]);

        const editUser = () => console.log("Edit User");


        const fetchUser = async () => {
            const { data } = await getUser();
            user.value = data;
        };
        fetchUser();

        return {
            user,
            // Methods
            editUser
        }
        
    },
}
</script>