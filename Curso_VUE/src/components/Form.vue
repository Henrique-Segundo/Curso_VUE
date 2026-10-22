<template>
  <div>
    <InputText />
    <InputText />
    <InputText />
    <Submit />
  </div>
</template>

<script>
    import InputText from './Forms/InputText.vue';
    import Submit from './Forms/Submit.vue';

  export default {
    name: "Form",
    components: {
      InputText, Submit
    }
  }
</script>