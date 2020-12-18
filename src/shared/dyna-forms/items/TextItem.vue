<template>
  <div class="form-group col-md-6">
    <label :for="name" class="form-label">
      {{ label }}
    </label>
    <input
      :name="name"
      type="text"
      v-bind:value="value"
      v-on:change.stop="emitItemValue"
      class="form-control"
    />
  </div>
</template>

<script>
export default {
  name: "TextItem",
  props: ["name", "label", "value"],
  methods: {
    emitItemValue(event) {
      this.$emit("change", { [this.name]: event.target.value });
    },
  }
};
</script>