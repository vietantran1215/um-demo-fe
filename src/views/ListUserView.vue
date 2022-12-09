<template lang="">
  <TableComponent :headers="headers" :getter="getter" />
</template>
<script>
import TableComponent from "@/components/TableComponent.vue";

export default {
  components: {
    TableComponent,
  },
  data() {
    return {
      getter: "getUsers",
      headers: [
        {
          text: "Avatar",
          value: "avatar",
        },
        {
          text: "First name",
          value: "firstName",
        },
        {
          text: "Last name",
          value: "lastName",
        },
        {
          text: "Email",
          value: "email",
        },
        {
          text: "Role",
          value: "role",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
