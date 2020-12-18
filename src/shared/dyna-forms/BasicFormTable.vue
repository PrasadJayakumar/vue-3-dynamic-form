<template>
  <div class="container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th v-for="field in metadata.fields" :key="field.name">
            {{ field.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in formData" :key="row.id">
          <td v-for="field in metadata.fields" :key="field.name">
            {{ row[field.name] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "BasicFormTable",
  props: {
    metadata: Object,
    formData: Array,
  },
};
</script>