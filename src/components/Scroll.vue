<template>
  <div class="scroll">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.scroll {
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  width: 100%;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #b1a5a5;
    border-radius: 6px;

    &:hover {
      background-color: #999292;
    }
  }
}
</style>
