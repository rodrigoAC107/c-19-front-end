<template>
    <LayoutVertical>
        <h1>Profile</h1>

        <div class="flex flex-row my-2 justify-center content-center">
            <form @submit.prevent="editUser" class="text-center w-1/2 p-4 space-y-4 bg-white rounded-xl" autocomplete="off">
                <div>
                    <input type="text" autocomplete="off" value="" placeholder="Name" class="border border-gray-300 rounded-md px-2 outline-gray-300 w-1/2">
                </div>
                <div>
                    <input type="email" autocomplete="off" value="" placeholder="Email" class="border border-gray-300 rounded-md px-2 outline-gray-300 w-1/2">
                </div>
                <div>
                    <input type="password" autocomplete="off" value="" placeholder="Password" class="border border-gray-300 rounded-md px-2 outline-gray-300 w-1/2">
                </div>
                <div>
                    <input type="password" autocomplete="off" value="" placeholder="Repeat Password" class="border border-gray-300 rounded-md px-2 outline-gray-300 w-1/2">
                </div>
                <div>
                    <button type="submit" class="bg-blue-400 text-white p-2 w-1/2 rounded-lg hover:bg-blue-600">Submit</button>
                </div>
            </form>
        </div>
    </LayoutVertical>
</template>

<script>
import LayoutVertical from '../layout/LayoutVertical.vue'
export default {
    components: {
        LayoutVertical
    },
    setup() {

        const editUser = () => console.log("Edit User");

        return {
            // Methods
            editUser
        }
        
    },
}
</script>