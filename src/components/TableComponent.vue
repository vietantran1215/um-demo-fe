import { mapGetters } from 'vuex';
<template>
  <table>
    <thead>
      <tr>
        <th v-for="header in headers" :key="header.value">
          {{ header.text }}
        </th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td v-for="header in headers" :key="header.value">
          <div v-if="header.value === 'avatar'">
            <img :src="item[header.value]" width="100px" height="100px" />
          </div>
          <div v-else>
            {{ item[header.value] }}
          </div>
        </td>
        <td>Edit</td>
        <td>Delete</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: {
    headers: {
      type: Array,
      required: true,
    },
    getter: {
      type: String,
      required: true,
    },
  },
  computed: {
    items() {
      return this.$store.getters[this.getter];
    },
  },
};
</script>
<style lang=""></style>
