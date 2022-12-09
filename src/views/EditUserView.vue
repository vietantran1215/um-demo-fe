<template>
  <UserFormView :type="formType.EDIT" />
</template>

<script>
import UserFormView from "@/components/UserFormComponent.vue";
import FORM_TYPE from "@/constants/form-type";

export default {
  components: {
    UserFormView,
  },
  data() {
    return {
      formType: FORM_TYPE,
    };
  },
};
</script>

<style lang=""></style>
