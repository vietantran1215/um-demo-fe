<template>
  <form @submit="handleSubmit">
    <h1 v-if="type === formType.ADD">Add User</h1>
    <h1 v-if="type === formType.EDIT">Edit User</h1>
    <div>
      <label for="first-name">First name</label>
      <input type="text" id="first-name" v-model="formData.firstName" />
    </div>
    <div>
      <label for="last-name">Last name</label>
      <input type="text" id="last-name" v-model="formData.lastName" />
    </div>
    <div>
      <label for="email">Email</label>
      <input type="text" id="email" v-model="formData.email" />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" id="password" v-model="formData.password" />
    </div>
    <div>
      <br />
      <button v-if="type === formType.ADD">Add</button>
      <button v-if="type === formType.EDIT">Save</button>
    </div>
  </form>
</template>
<script>
import FORM_TYPE from "@/constants/form-type";
import { mapActions } from "vuex";

export default {
  props: {
    type: {
      type: String,
      default: FORM_TYPE.ADD,
    },
  },
  data() {
    return {
      formType: FORM_TYPE,
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
      defaultAvatar:
        "https://images.unsplash.com/photo-1664575197593-2e7085ef086b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      switch (this.type) {
        case FORM_TYPE.ADD:
          this.addUser();
          break;
        case FORM_TYPE.EDIT:
          this.editUser();
          break;
        default:
          break;
      }
    },
    addUser() {
      const user = {
        id: new Date().getTime(),
        ...this.formData,
        avatar: this.defaultAvatar,
      };
      this.createUser(user);
      alert("User added successfully");
      this.$router.push({ name: "list-user" });
    },
    editUser() {
      console.log("Edit user");
    },
    ...mapActions({
      createUser: "createUser",
    }),
  },
};
</script>

<style>
label {
  display: block;
}
</style>
