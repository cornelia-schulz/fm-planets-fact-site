<template>
    <div class="infobox">
        <p class="title">{{ title }}</p>
        <p class="content">{{ content }}</p>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    content: String,
    title: String
  }
})
export default class Infobox extends Vue {
  content!: string
  title!: string
}
</script>

<style scoped lang="scss">
@import '../scss/variables/colours.scss';

.infobox {
    align-items: center;
    border: 1px solid rgba($color: $white, $alpha: 0.5);
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    padding: 9px 24px 13px;
}

.title {
    color: $dark-grey;
    font-family: Spartan;
    font-size: 8px;
    font-weight: 700;
    line-height: 16px;
    padding-top: 3px;
}
.content {
    color: $white;
    text-transform: uppercase;
}

@media only screen and (min-width: 768px) {
  .infobox {
    align-items: flex-start;
    flex-direction: column;
    margin-right: 12px;
    padding: 25px 24px 25px;
    width: 25%;

    &:last-of-type {
      margin-right: 0;
    }
  }

  .content {
    font-size: 24px;
    margin-top: 8px;
  }
}

@media only screen and (min-width: 980px) {
  .content {
    font-size: 40px;
  }

  .title {
    font-size: 11px;
  }
}
</style>