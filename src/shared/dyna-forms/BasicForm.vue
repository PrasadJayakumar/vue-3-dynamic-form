<template>
  <div class="container">
    <h3>{{ metadata.formTitle }}</h3>
    <form class="row g-3" @submit.prevent="onSubmit">
      <template v-for="field in metadata.fields">
        <text-item
          :label="field.label"
          :name="field.name"
          :value="valueObj[field.name]"
          @change="gatherFieldValue"
          v-if="field.type === 'String'"
          :key="field.name"
        >
        </text-item>
        <number-item
          :label="field.label"
          :name="field.name"
          :value="valueObj[field.name]"
          @change="gatherFieldValue"
          v-if="field.type === 'Number'"
          :key="field.name"
        >
        </number-item>
        <date-item
          :label="field.label"
          :name="field.name"
          :value="valueObj[field.name]"
          @change="gatherFieldValue"
          v-if="field.type === 'Date'"
          :key="field.name"
        >
        </date-item>
        <lookup-item
          :label="field.label"
          :name="field.name"
          :keyValues="field.values"
          :value="valueObj[field.name]"
          @change="gatherFieldValue"
          :key="field.name"
          v-if="field.type === 'Lookup'"
        >
        </lookup-item>
      </template>
      <div class="row justify-content-end my-4">
        <div class="col-2 pa-2">
          <button type="button" class="btn btn-secondary" @click="reset">
            Clear
          </button>
        </div>
        <div class="col-2 pa-2">
          <button type="submit" class="btn btn-primary">Save</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import TextItem from "./items/TextItem.vue";
import NumberItem from "./items/NumberItem.vue";
import DateItem from "./items/DateItem.vue";
import LookupItem from "./items/LookupItem.vue";
export default {
  name: "BasicForm",
  components: {
    TextItem,
    NumberItem,
    DateItem,
    LookupItem,
  },
  props: {
    metadata: Object,
  },
  data() {
    return {
      defaultValues: {},
      valueObj: {},
    };
  },
  mounted() {
    this.metadata.fields.forEach(
      (field) => (this.defaultValues[field.name] = field.defaultValue || null)
    );
    this.reset();
  },
  methods: {
    reset() {
      this.valueObj = { ...this.defaultValues };
    },
    onSubmit(event) {
      this.$emit("submitted", this.valueObj);
      this.reset();
    },
    gatherFieldValue(event) {
      this.valueObj = { ...this.valueObj, ...event };
    },
  },
};
</script>