<template>
  <div class="form-group col-md-6">
    <label :for="name" class="form-label">
      {{ label }}
    </label>
    <select
      class="form-control"
      :id="name"
      v-bind:value="value"
      v-on:change.stop="emitItemValue"
    >
      <option value="">Please select one</option>
      <option v-for="item in keyValues" :key="item.key" :value="item.key">
        {{ item.value }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "LookupItem",
  props: {
    name: String,
    label: String,
    value: String,
    keyValues: Array,
  },
  methods: {
    emitItemValue(event) {
      this.$emit("change", { [this.name]: event.target.value });
    },
  }
};
</script>