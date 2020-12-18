<template>
  <div class="container">
    <div class="row my-4">
      <basic-form
        :metadata="metadata.dailyRatesForm"
        @submitted="onSumbitted"
      ></basic-form>
    </div>
    <div class="row my-4">
      <basic-form-table
        :metadata="metadata.dailyRatesForm"
        :formData="formTable"
      ></basic-form-table>
    </div>
  </div>
</template>

<script>
import BasicForm from "../shared/dyna-forms/BasicForm.vue";
import BasicFormTable from "../shared/dyna-forms/BasicFormTable.vue";
import metadata from "../forms-metadata.js";

export default {
  name: "HelloWorld",
  components: {
    BasicForm,
    BasicFormTable,
  },
  data() {
    return {
      metadata: metadata,
      id: 102,
      formTable: [
        {
          id: "101",
          from: "USD",
          to: "INR",
          effectiveDate: "2020-12-16",
          conversionRate: 73.64,
        },
        {
          id: "102",
          from: "USD",
          to: "INR",
          effectiveDate: "2020-12-17",
          conversionRate: 73.563,
        },
      ],
    };
  },
  methods: {
    onSumbitted(event) {
      this.id = this.id + 1;
      this.formTable.push({
        ...event,
        id: this.id,
      });
    },
  },
};
</script>
